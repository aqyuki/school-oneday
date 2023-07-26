import Image from "next/image";
import { memo } from "react";
import ArticlesPropsType, { ArticlesContentPropsType } from "../types/articles";

export const RightImageArticles = memo((props: ArticlesPropsType) => {
  return (
    <div className="hero my-1 h-96">
      <div className="hero-content flex-col lg:flex-row w-3/5">
        <Image
          src={props.image}
          className="max-w-sm rounded-lg bg-auto"
          width={430}
          height={1046}
          alt={props.alt}
          priority
        />
        <div>
          <h1 className="text-4xl font-bold">{props.title}</h1>
          <ArticlesContent>{props.children}</ArticlesContent>
        </div>
      </div>
    </div>
  );
});

export const LeftImageArticles = memo((props: ArticlesPropsType) => {
  return (
    <div className="hero my-1 h-96">
      <div className="hero-content flex-col lg:flex-row-reverse w-3/5">
        <Image
          src={props.image}
          className="max-w-sm rounded-lg bg-auto"
          width={430}
          height={1046}
          alt={props.alt}
        />
        <div>
          <h1 className="text-4xl font-bold">{props.title}</h1>
          <ArticlesContent>{props.children}</ArticlesContent>
        </div>
      </div>
    </div>
  );
});

const ArticlesContent = ({ children }: ArticlesContentPropsType) => {
  return <p className="py-7 text-2xl">{children}</p>;
};

RightImageArticles.displayName = "RightImageArticles";
LeftImageArticles.displayName = "LeftImageArticles";
export default LeftImageArticles;
