import { Suspense, useEffect, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import { ArticleList } from "./article-lists/ArticleList";
import styles from "./Articles.module.css";
import { WikiArticleNavigationFooter } from "./WikiArticleNavigationFooter";
import { ArticleNotFound } from "./articles/ArticleNotFound";
import { findArticleById, getArticleNavigation } from "./wikiArticleTree";

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

    //const articleLookup = useMemo(() => flattenArticleTree(ArticleList), []);

    const article = useMemo(() => {
        if (!articleId) return ArticleList[0];

        return findArticleById(ArticleList, articleId);
    }, [articleId]);

    const ArticleComponent = article?.component;

    const navigation = useMemo(() => {
        const activeId = articleId ?? ArticleList[0].id;
        return getArticleNavigation(ArticleList, activeId);
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
                        className="inline-block bg-[var(--bg)] items-center rounded-md border border-[var(--accent)]  px-3 py-2 m-0 text-sm  text-[var(--text-h)] shadow-sm md:hidden"
                        aria-label="Open wiki articles"
                    >
                        Article List
                    </button>
                )}
            </div>

            <div ref={articleSectionRef} className="flex-1 flex flex-col p-0 m-0 h-full min-h-0 overflow-y-auto ">
                <div className={`${styles.wiki} `}>
                    {article && article.articleImage && <img src={article.articleImage} alt={article.title} />}

                    <Suspense fallback={<div className="p-4 text-[var(--text-h)]">Loading article...</div>}>
                        {article && ArticleComponent ? <ArticleComponent /> : <ArticleNotFound />}
                    </Suspense>
                </div>

                {article && (
                    <WikiArticleNavigationFooter
                        article={article}
                        navigation={navigation}
                    />
                )}
            </div>
        </div>
    );
};