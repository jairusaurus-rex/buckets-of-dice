import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { articleList } from "./articles/ArticleList";
import styles from "./Articles.module.css";
import type { ArticleListType } from "../../commons/types/AticleListType";

export const WikiPage = () => {
  const { articleId } = useParams();

  const article = useMemo(() => {
    if (!articleId) return articleList[0];

    const findArticle = (
      items: ArticleListType[],
      id: string
    ): (typeof articleList)[0] | null => {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) return items[i];

        if (items[i].children) {
          const found = findArticle(items[i].children ?? [], id);
          if (found) return found;
        }
      }
      return null;
    };

    return findArticle(articleList, articleId) || articleList[0];
  }, [articleId]);

  return (
    <div className="flex-1">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[var(--text-h)] mb-2">
          {article.title}
        </h1>
        <div className="border-b border-[var(--border)]"></div>
      </div>
      <div className={styles.wiki}>{article.content}</div>
    </div>
  );
}