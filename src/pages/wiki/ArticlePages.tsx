import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { ArticleList } from "./article-lists/ArticleList";
import styles from "./Articles.module.css";
import type { ArticleListType } from "../../data-types/types/AticleListType";
import { WikiArticleNavigationFooter } from "./WikiArticleNavigationFooter";

export const ArticlePages = () => {
    const { articleId } = useParams();

    const scrollToTop = () => {
        window.scrollTo(0, 150);
    };

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

        return findArticle(ArticleList, articleId) || ArticleList[0];
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
        <div className="flex-1 flex flex-col bg-[var(--bg)]/90 m1  p-5 md:p-8 ">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-[var(--text-h)] mb-2">
                    {article.title}
                </h1>
                <div className="border-b border-[var(--border)]"></div>
            </div>
            <div className={styles.wiki}>{article.content}</div>

            <WikiArticleNavigationFooter
                article={article}
                navigation={navigation}
                onNavigate={scrollToTop}
            />
        </div>
    );
}