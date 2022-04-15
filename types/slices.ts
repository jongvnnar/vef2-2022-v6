import { Image, RichText } from "./utils";

export type TextPrimary = {
  text: RichText;
};

export type PicturePrimary = {
  img: Image;
  caption: RichText;
};

export type AccordionPrimary = {
  accordion_title: RichText;
};

export type AccordionField = {
  item_title: RichText;
  item_content: RichText;
};
