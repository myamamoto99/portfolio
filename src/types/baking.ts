export type Baking = {
  title: string;
  date: string;
  imageUrl: string;
};

export type BakingCardProps = Baking & {
  onOpen: () => void;
};

export type BakingImageProps = Baking & {
  onClose: () => void;
};