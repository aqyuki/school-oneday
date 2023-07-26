import Image from "next/image";
import { memo } from "react";
import ArticlesPropsType, { ArticlesContentPropsType } from "../types/articles";

export const RightImageArticles = memo((props: ArticlesPropsType) => {
  return (
    <div className="hero min-h-screen h-50">
      <div className="hero-content flex-col lg:flex-row w-3/5">
        <Image
          src={props.image}
          className="max-w-sm rounded-lg"
          width={430}
          height={1046}
          alt={props.alt}
          priority
        />
        <div>
          <h1 className="text-4xl font-bold md:text-start sm:text-center">
            {props.title}
          </h1>
          <ArticlesContent>{props.children}</ArticlesContent>
        </div>
      </div>
    </div>
  );
});

export const LeftImageArticles = memo((props: ArticlesPropsType) => {
  return (
    <div className="hero min-h-screen h-50">
      <div className="hero-content flex-col lg:flex-row-reverse w-3/5">
        <Image
          src={props.image}
          className="max-w-sm rounded-lg"
          width={430}
          height={1046}
          alt={props.alt}
        />
        <div>
          <h1 className="text-4xl font-bold md:text-start sm:text-center">
            {props.title}
          </h1>
          <ArticlesContent>{props.children}</ArticlesContent>
        </div>
      </div>
    </div>
  );
});

const ArticlesContent = ({ children }: ArticlesContentPropsType) => {
  return <p className="py-7 text-2xl md:w-full w-screen">{children}</p>;
};

RightImageArticles.displayName = "RightImageArticles";
LeftImageArticles.displayName = "LeftImageArticles";
export default LeftImageArticles;
