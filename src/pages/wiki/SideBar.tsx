import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { articleList } from "./articles/ArticleList";
import type { ArticleListType } from "../../commons/types/AticleListType";

export const WikiSideBar = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const { articleId } = useParams();

  // Auto-expand parents when viewing a child article
  useEffect(() => {
    const findParents = (
      items: ArticleListType[],
      targetId: string
    ): string[] => {
      for (const item of items) {
        if (item.children) {
          const hasTarget = item.children.some((child) => child.id === targetId);
          if (hasTarget) {
            return [item.id];
          }
          const nested = findParents(item.children, targetId);
          if (nested.length > 0) {
            return [item.id, ...nested];
          }
        }
      }
      return [];
    };

    if (articleId) {
      const parentsToExpand = findParents(articleList, articleId);
      if (parentsToExpand.length > 0) {
        setExpanded((prev) => {
          const updated = { ...prev };
          parentsToExpand.forEach((id) => {
            updated[id] = true;
          });
          return updated;
        });
      }
    }
  }, [articleId]);

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Check if an item or any of its descendants is active
  const hasActiveDescendant = (item: ArticleListType): boolean => {
    if (item.id === articleId) return true;
    if (item.children) {
      return item.children.some((child) => hasActiveDescendant(child));
    }
    return false;
  };

  const renderMenuItems = (items: ArticleListType[]) => {
    return items.map((item) => {
      const isActive = articleId === item.id;
      const hasActive = hasActiveDescendant(item);
      const isExpanded = expanded[item.id];
      const hasChildren = item.children && item.children.length > 0;

      return (
        <div key={item.id}>
          <div className="flex items-center">
            {hasChildren && (
              <button
                onClick={() => toggleExpanded(item.id)}
                className="mr-2 p-1 hover:bg-[var(--code-bg)] rounded"
                aria-label={isExpanded ? "Collapse" : "Expand"}
              >
                <span className="text-[var(--text-h)]">
                  {isExpanded ? "▼" : "▶"}
                </span>
              </button>
            )}
            {!hasChildren && <span className="mr-2 p-1 w-6"></span>}
            <Link
              to={`/wiki/${item.id}`}
              className={`flex-1 py-2 px-2 rounded transition-colors ${
                isActive
                  ? "bg-[var(--accent-bg)] text-[var(--accent)] font-medium"
                  : hasActive
                    ? "text-[var(--accent)] font-medium"
                    : "text-[var(--text-h)] hover:bg-[var(--code-bg)]"
              }`}
            >
              {item.title}
            </Link>
          </div>
          {hasChildren && isExpanded && (
            <div className="ml-4 border-l border-[var(--border)]">
              {renderMenuItems(item.children ?? [])}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <aside className="w-full md:w-64 border-r border-[var(--border)] p-4 bg-[var(--bg)]">
      <h3 className="font-bold text-[var(--text-h)] mb-4">Articles</h3>
      <nav className="space-y-1">{renderMenuItems(articleList)}</nav>
    </aside>
  );
}