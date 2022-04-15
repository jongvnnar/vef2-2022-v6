export type RichText = any;

export type Image = {
  dimensions: {
    width: number;
    height: number;
  };
  alt: string;
  copyright: string | null;
  url: string;
};
