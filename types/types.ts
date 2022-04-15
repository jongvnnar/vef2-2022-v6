import * as prismicT from "@prismicio/types";

export type RichText = prismicT.RichTextField;

//Mostly like Slice from @prismicio/types, but items is now fields, and slice_type is now type
export interface Slice<
  SliceType = string,
  PrimaryFields extends Record<string, prismicT.AnyRegularField> = Record<
    string,
    prismicT.AnyRegularField
  >,
  ItemsFields extends Record<string, prismicT.AnyRegularField> = Record<
    string,
    prismicT.AnyRegularField
  >
> {
  type: SliceType;
  primary: PrimaryFields;
  fields: ItemsFields[];
}

//different from @prismicio/types in that it uses our Slice interface
export type SliceZone<
  Slices extends Slice,
  State extends prismicT.FieldState = prismicT.FieldState
> = State extends "empty" ? [] : [Slices, ...Slices[]];

export type ITextSlice = Slice<"text", { text: RichText }>;
export type IPictureSlice = Slice<
  "picture",
  { img: prismicT.ImageField; caption: prismicT.KeyTextField }
>;
export type IAccordionSlice = Slice<
  "accordion",
  { accordion_title: RichText },
  {
    item_title: RichText;
    item_content: RichText;
  }
>;

export type ISelectSlice = Slice<
  "select",
  { selection_title: RichText; selection: string }
>;

export type Page = {
  title: RichText;
  body: SliceZone<ITextSlice | IPictureSlice | IAccordionSlice | ISelectSlice>;
};

export type Homepage = {
  title?: RichText;
  content?: RichText;
};
