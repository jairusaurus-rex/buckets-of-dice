import type { ArticleListType } from "../../data-types/types/AticleListType";

export const findArticleById = (
  items: ArticleListType[],
  id: string
): ArticleListType | null => {
  for (const item of items) {
    if (item.id === id) return item;

    if (item.children) {
      const found = findArticleById(item.children, id);
      if (found) return found;
    }
  }

  return null;
};

export const getArticleNavigation = (
  items: ArticleListType[],
  id: string
): {
  parent: ArticleListType | null;
  prevSibling: ArticleListType | null;
  nextSibling: ArticleListType | null;
} => {
  const result = {
    parent: null as ArticleListType | null,
    prevSibling: null as ArticleListType | null,
    nextSibling: null as ArticleListType | null,
  };

  const findNavigation = (
    currentItems: ArticleListType[],
    targetId: string,
    parentItem: ArticleListType | null = null
  ): boolean => {
    for (let i = 0; i < currentItems.length; i++) {
      const item = currentItems[i];

      if (item.id === targetId) {
        result.parent = parentItem;
        result.prevSibling = i > 0 ? currentItems[i - 1] : null;
        result.nextSibling = i < currentItems.length - 1 ? currentItems[i + 1] : null;
        return true;
      }

      if (item.children) {
        if (findNavigation(item.children, targetId, item)) {
          return true;
        }
      }
    }

    return false;
  };

  findNavigation(items, id);
  return result;
};

export const findParentIds = (
  items: ArticleListType[],
  targetId: string
): string[] => {
  for (const item of items) {
    if (item.children) {
      const hasTarget = item.children.some((child) => child.id === targetId);
      if (hasTarget) {
        return [item.id];
      }

      const nested = findParentIds(item.children, targetId);
      if (nested.length > 0) {
        return [item.id, ...nested];
      }
    }
  }

  return [];
};
