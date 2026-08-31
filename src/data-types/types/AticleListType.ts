import type { ComponentType, LazyExoticComponent } from "react";

export type ArticleListType = {
    id: string;
    title: string;
    component: LazyExoticComponent<ComponentType<any>> | ComponentType<any>;
    children?: ArticleListType[];
    articleImage?: string;
}