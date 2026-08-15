import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
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

  // Find parent, previous sibling, and next sibling
  const navigation = useMemo(() => {
    const result = {
      parent: null as ArticleListType | null,
      prevSibling: null as ArticleListType | null,
      nextSibling: null as ArticleListType | null,
    };

    if (!articleId) return result;

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

    findNavigation(articleList, articleId);
    return result;
  }, [articleId]);

  return (
    <div className="flex-1 flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[var(--text-h)] mb-2">
          {article.title}
        </h1>
        <div className="border-b border-[var(--border)]"></div>
      </div>
      <div className={styles.wiki}>{article.content}</div>

      {/* Navigation Footer */}
      <div className="mt-auto pt-8 border-t border-[var(--border)]">
        <div className="flex justify-between items-center gap-4 mb-8">
          <div className="flex-1">
            {navigation.prevSibling && (
              <Link
                to={`/wiki/${navigation.prevSibling.id}`}
                className="text-[var(--accent)] hover:underline"
              >
                ← {navigation.prevSibling.title}
              </Link>
            )}
          </div>

          <div className="flex-1 text-center">
            {navigation.parent && (
              <Link
                to={`/wiki/${navigation.parent.id}`}
                className="text-[var(--accent)] hover:underline"
              >
                ↑ {navigation.parent.title}
              </Link>
            )}
          </div>

          <div className="flex-1 text-right">
            {navigation.nextSibling && (
              <Link
                to={`/wiki/${navigation.nextSibling.id}`}
                className="text-[var(--accent)] hover:underline"
              >
                {navigation.nextSibling.title} →
              </Link>
            )}
          </div>
        </div>

        {/* Children Navigation */}
        {article.children && article.children.length > 0 && (
          <div className="flex flex-col items-center gap-2 pt-4 border-t border-[var(--border)]">
            <p className="text-sm font-medium text-[var(--text-h)]">
              Sections
            </p>
            <ul className="space-y-1 text-center">
              {article.children.map((child) => (
                <li key={child.id}>
                  <Link
                    to={`/wiki/${child.id}`}
                    className="text-[var(--accent)] hover:underline text-sm"
                  >
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}