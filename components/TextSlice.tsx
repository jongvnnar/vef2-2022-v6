import { PrismicRichText } from "@prismicio/react";
import { ITextSlice } from "../types/types";
type Props = {
  slice: ITextSlice;
};
export function TextSlice({ slice }: Props) {
  return (
    <section>
      <PrismicRichText field={slice.primary.text} />
    </section>
  );
}
