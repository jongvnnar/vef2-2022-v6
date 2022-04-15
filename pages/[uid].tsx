import { asText } from "@prismicio/helpers";
import { SliceZone } from "@prismicio/react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Link from "next/link";
import { fetchFromPrismic } from "../api/prismic";
import { AccordionSlice } from "../components/AccordionSlice";
import { PictureSlice } from "../components/PictureSlice";
import { TextSlice } from "../components/TextSlice";
import { Page } from "../types/types";

type PrismicResponse = {
  page?: Page;
};

type Props = {
  page: Page;
};

const Page: NextPage<
  InferGetServerSidePropsType<GetServerSideProps<Props>>
> = ({ page }) => {
  const title = asText(page.title);
  return (
    <div>
      <Head>
        <title>{title || "Síða"}</title>
        <meta name="description" content="Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{title}</h1>
      <Link href="/">
        <a>Aftur á forsíðu</a>
      </Link>
      <SliceZone
        slices={page.body}
        components={{
          text: TextSlice,
          picture: PictureSlice,
          accordion: AccordionSlice,
        }}
      />
    </div>
  );
};

export default Page;

const query = `
query($uid:String!){
    page(uid:$uid lang:"is"){
      title
      body{
        ...on PageBodyText{
          type
          primary {
           text 
          }
        }
        ...on PageBodyPicture{
          type
          primary{
            img
            caption
          }
        }
        ... on PageBodyAccordion{
          type
          primary{
            accordion_title
          }
          fields{
            item_title
            item_content
          }
        }
      }
    }
  }
`;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { uid } = context.query;
  if (!uid || Array.isArray(uid)) {
    return {
      notFound: true,
    };
  }
  const result = await fetchFromPrismic<PrismicResponse>(query, {
    uid: uid,
  });
  if (!result || !result.page) {
    return {
      notFound: true,
    };
  }
  const page = result.page;
  return {
    props: { page },
  };
};
