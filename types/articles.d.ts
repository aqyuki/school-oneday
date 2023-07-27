import { ReactNode } from "react";

interface ArticlesPropsType {
  title: string;
  image: string;
  alt: string;
  children: ReactNode;
}

export interface NonImageArticlesPropsType {
  title: string;
  children: ReactNode;
}

export interface ArticlesContentPropsType {
  children: ReactNode;
}

export default ArticlesPropsType;
