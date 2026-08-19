import { Link } from "react-router-dom";
import type { ArticleListType } from "../../data-types/types/AticleListType";

interface NavigationInfo {
  parent: ArticleListType | null;
  prevSibling: ArticleListType | null;
  nextSibling: ArticleListType | null;
}

interface WikiArticleNavigationFooterProps {
  article: ArticleListType;
  navigation: NavigationInfo;
  onNavigate: () => void;
}

export const WikiArticleNavigationFooter = ({
  article,
  navigation,
  onNavigate,
}: WikiArticleNavigationFooterProps) => {
  return (
    <div className="mt-auto pt-8 border-t border-[var(--border)]">
      <div className="flex justify-between items-center gap-4 mb-8">
        <div className="flex-1">
          {navigation.prevSibling && (
            <Link
              to={`/wiki/${navigation.prevSibling.id}`}
              onClick={onNavigate}
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
              onClick={onNavigate}
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
              onClick={onNavigate}
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
                  onClick={onNavigate}
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
  );
};
