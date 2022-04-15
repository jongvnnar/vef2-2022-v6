import { IPictureSlice } from "../types/types";
import Image from "next/image";

type Props = {
  slice: IPictureSlice;
};
export function PictureSlice({ slice }: Props) {
  const { url, dimensions, alt } = slice.primary.img;
  const { caption } = slice.primary;
  return (
    <section>
      {url && dimensions ? (
        <Image
          src={url}
          width={dimensions.width}
          height={dimensions.height}
          alt={alt ?? ""}
        />
      ) : (
        <p>Mynd fannst ekki</p>
      )}
      {caption && <p>{slice.primary.caption}</p>}
    </section>
  );
}
