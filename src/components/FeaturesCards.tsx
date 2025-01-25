import { Feature } from "@/types/interfaces";
import { FC } from "react";

interface FeaturesCardProps extends Feature {}

const FeaturesCard: FC<FeaturesCardProps> = ({ title, imageUrl, content }) => {
  return (
    <article className="w-full md:max-w-[30rem]"></article>
  )
};
export default FeaturesCard;
