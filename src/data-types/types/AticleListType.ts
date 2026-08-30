export type ArticleListType = {
    id: string;
    title: string;
    content: React.ReactNode;
    children?: ArticleListType[];
    articleImage?: string;
}