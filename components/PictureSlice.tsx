import { IPictureSlice } from "../types/types";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";

type Props = {
  slice: IPictureSlice;
};
export function PictureSlice({ slice }: Props) {
  const { url, dimensions } = slice.primary.img;
  const { caption } = slice.primary;
  return (
    <section>
      {url && dimensions ? (
        <Image src={url} width={dimensions.width} height={dimensions.height} />
      ) : (
        <p>Mynd fannst ekki</p>
      )}
      {caption && <p>{slice.primary.caption}</p>}
    </section>
  );
}
