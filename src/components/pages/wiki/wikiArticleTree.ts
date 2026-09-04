import type { ArticleListType } from "../../../data-types/types/AticleListType";

export type ArticleLookupEntry = {
  article: ArticleListType;
  parentId: string | null;
  prevSiblingId: string | null;
  nextSiblingId: string | null;
};

export const flattenArticleTree = (items: ArticleListType[]): Map<string, ArticleLookupEntry> => {
  const lookup = new Map<string, ArticleLookupEntry>();

  const walk = (currentItems: ArticleListType[], parentId: string | null = null) => {
    currentItems.forEach((item, index) => {
      const prevSiblingId = index > 0 ? currentItems[index - 1].id : null;
      const nextSiblingId = index < currentItems.length - 1 ? currentItems[index + 1].id : null;

      lookup.set(item.id, {
        article: item,
        parentId,
        prevSiblingId,
        nextSiblingId,
      });

      if (item.children) {
        walk(item.children, item.id);
      }
    });
  };

  walk(items);
  return lookup;
};

export const findArticleById = (
  items: ArticleListType[],
  id: string
): ArticleListType | null => {
  return flattenArticleTree(items).get(id)?.article ?? null;
};

export const getArticleNavigation = (
  items: ArticleListType[],
  id: string
): {
  parent: ArticleListType | null;
  prevSibling: ArticleListType | null;
  nextSibling: ArticleListType | null;
} => {
  const lookup = flattenArticleTree(items);
  const entry = lookup.get(id);

  if (!entry) {
    return {
      parent: null,
      prevSibling: null,
      nextSibling: null,
    };
  }

  return {
    parent: entry.parentId ? lookup.get(entry.parentId)?.article ?? null : null,
    prevSibling: entry.prevSiblingId ? lookup.get(entry.prevSiblingId)?.article ?? null : null,
    nextSibling: entry.nextSiblingId ? lookup.get(entry.nextSiblingId)?.article ?? null : null,
  };
};

export const findParentIds = (
  items: ArticleListType[],
  targetId: string
): string[] => {
  const lookup = flattenArticleTree(items);
  const parentIds: string[] = [];

  let currentId = targetId;
  let currentEntry = lookup.get(currentId);

  while (currentEntry && currentEntry.parentId) {
    parentIds.unshift(currentEntry.parentId);
    currentId = currentEntry.parentId;
    currentEntry = lookup.get(currentId);
  }

  return parentIds;
};
