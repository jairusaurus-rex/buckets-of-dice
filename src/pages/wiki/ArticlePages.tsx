import { useEffect, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import { ArticleList } from "./article-lists/ArticleList";
import styles from "./Articles.module.css";
import type { ArticleListType } from "../../data-types/types/AticleListType";
import { WikiArticleNavigationFooter } from "./WikiArticleNavigationFooter";
import { ArticleNotFound } from "./articles/ArticleNotFound";

type ArticlePagesProps = {
    isSidebarOpen: boolean;
    openSideBar: () => void;
}

export const ArticlePages = ({ isSidebarOpen, openSideBar }: ArticlePagesProps) => {
    const { articleId } = useParams();
    const articleSectionRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const articleSection = articleSectionRef.current;

        if (!articleSection) return;

        articleSection.scrollTop = 0;


    }, [articleId]);

    const article = useMemo(() => {
        if (!articleId) return ArticleList[0];

        const findArticle = (
            items: ArticleListType[],
            id: string
        ): (typeof ArticleList)[0] | null => {
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === id) return items[i];

                if (items[i].children) {
                    const found = findArticle(items[i].children ?? [], id);
                    if (found) return found;
                }
            }
            return null;
        };

        return findArticle(ArticleList, articleId);
    }, [articleId]);

    // Find parent, previous sibling, and next sibling
    const navigation = useMemo(() => {
        const result = {
            parent: null as ArticleListType | null,
            prevSibling: null as ArticleListType | null,
            nextSibling: null as ArticleListType | null,
        };

        const findNavigation = (
            items: ArticleListType[],
            id: string,
            parentItem: ArticleListType | null = null
        ): boolean => {
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    result.parent = parentItem;
                    result.prevSibling = i > 0 ? items[i - 1] : null;
                    result.nextSibling = i < items.length - 1 ? items[i + 1] : null;
                    return true;
                }

                if (items[i].children) {
                    if (findNavigation(items[i].children ?? [], id, items[i])) {
                        return true;
                    }
                }
            }
            return false;
        };

        findNavigation(ArticleList, articleId ?? ArticleList[0].id);
        return result;
    }, [articleId]);

    return (
        <div className="flex-1 flex flex-col bg-[var(--bg)]/90 p-5 md:p-8 h-full">
            <div className="mb-6 flex justify-between">
                <h2 className="text-3xl font-bold text-[var(--text-h)] mb-2">
                    {article ? article.title : "Article Not Found"}
                </h2>
                {!isSidebarOpen && (
                    <button
                        type="button"
                        onClick={() => openSideBar()}
                        className="inline-block bg-[var(--bg)] items-center rounded-md border border-[var(--accent)]  px-3 py-2 text-sm  text-[var(--text-h)] shadow-sm md:hidden"
                        aria-label="Open wiki articles"
                    >
                        Article List
                    </button>
                )}
            </div>

            <div ref={articleSectionRef} className="flex-1 flex flex-col p-0 m-0 h-full min-h-0 overflow-y-auto ">

                <div className={`${styles.wiki} `}>
                    {article ? article.content : <ArticleNotFound />}
                </div>
                {article && <WikiArticleNavigationFooter
                    article={article}
                    navigation={navigation}
                />}
            </div>

        </div>
    );
}