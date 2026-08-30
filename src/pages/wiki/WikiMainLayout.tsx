import { useState } from "react";
import { WikiSideBar } from "./WikiSideBar";
import { ArticlePages } from "./ArticlePages";

export const WikiMainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex h-[calc(100vh-6.5rem)] flex-col md:flex-row">
      {!isSidebarOpen && (
        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          className="fixed left-3 top-20 z-50 bg-[var(--bg)] flex items-center rounded-md border border-[var(--accent)]  px-3 py-2 text-sm font-medium text-[var(--text-h)] shadow-sm md:hidden"
          aria-label="Open wiki articles"
        >
          Articles
        </button>
      )}

      <WikiSideBar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {isSidebarOpen && (
        <button
          type="button"
          aria-label="Close wiki sidebar overlay"
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-[var(--bg)] md:hidden"
        />
      )}

      <div className="flex-1 min-h-0 p-0">
        <ArticlePages isSidebarOpen={isSidebarOpen} openSideBar={() => setIsSidebarOpen(false)}/>
      </div>
    </div>
  );
}
