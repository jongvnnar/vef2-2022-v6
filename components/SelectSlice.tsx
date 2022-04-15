import { PrismicRichText } from "@prismicio/react";
import { ISelectSlice } from "../types/types";

type Props = {
  slice: ISelectSlice;
};

export function SelectSlice({ slice }: Props) {
  return (
    <section>
      <PrismicRichText field={slice.primary.selection_title} />
      <p>Valið gildi: {slice.primary.selection}</p>
    </section>
  );
}
