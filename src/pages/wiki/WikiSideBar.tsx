import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArticleList } from "./article-lists/ArticleList";
import type { ArticleListType } from "../../data-types/types/AticleListType";
import { findParentIds, flattenArticleTree } from "./wikiArticleTree";

type WikiSideBarProps = {
  isOpen: boolean;
  onClose: () => void;
}

export const WikiSideBar = ({ isOpen, onClose }: WikiSideBarProps) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const { articleId } = useParams();
  const articleLookup = flattenArticleTree(ArticleList);

  useEffect(() => {
    if (articleId) {
      const parentsToExpand = findParentIds(ArticleList, articleId);
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

  const activeArticle = articleId ? articleLookup.get(articleId)?.article ?? null : null;

  const handleSelectArticle = () => {
    onClose();
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
                className="mr-2 rounded p-1 hover:bg-[var(--code-bg)]"
                aria-label={isExpanded ? "Collapse" : "Expand"}
              >
                <span className="text-[var(--text-h)]">
                  {isExpanded ? "▼" : "▶"}
                </span>
              </button>
            )}
            {!hasChildren && <span className="mr-2 w-6 p-1"></span>}
            <Link
              to={`/wiki/${item.id}`}
              onClick={handleSelectArticle}
              className={`flex-1 rounded px-2 py-2 transition-colors ${
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
    <aside
      className={`
        fixed left-0 
        top-0 z-40 h-full w-72 
        border-r border-[var(--border)] 
        bg-[var(--bg)] md:bg-[var(--bg)]/90 
        p-4 
        shadow-lg 
        overflow-auto
        transition-transform duration-200 md:static md:z-auto md:h-auto md:w-64 md:translate-x-0 md:shadow-none ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="font-bold text-[var(--text-h)]">Articles</h3>
        <button
          type="button"
          onClick={onClose}
          className="rounded border border-[var(--border)] px-2 py-1 text-xs font-medium text-[var(--text-h)] md:hidden"
          aria-label="Close wiki articles"
        >
          Close
        </button>
      </div>
      <nav className="space-y-1">{renderMenuItems(ArticleList)}</nav>
    </aside>
  );
}