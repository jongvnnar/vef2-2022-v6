import { asText } from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { useState } from "react";
import { IAccordionSlice, RichText } from "../types/types";

type Props = {
  slice: IAccordionSlice;
};
export function AccordionSlice({ slice }: Props) {
  const { accordion_title: title } = slice.primary;
  return (
    <section>
      <h2>{asText(title)}</h2>
      <ul>
        {slice.fields.map((value, i) => {
          return (
            <li>
              <AccordionItem
                title={asText(value.item_title)}
                content={value.item_content}
                key={i}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

type AccordionItemProps = {
  title: string;
  content: RichText;
};
function AccordionItem({ title, content }: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen((open) => !open);
  };
  return (
    <div>
      <h3>{title}</h3>
      <button onClick={onClick}>{open ? "Loka" : "Opna"}</button>
      {open && <PrismicRichText field={content} />}
    </div>
  );
}
