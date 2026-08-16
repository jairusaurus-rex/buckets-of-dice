import { useState } from "react";
import { WikiSideBar } from "./SideBar";
import { WikiPage } from "./ArticlePages";

export const WikiMainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col md:flex-row">
      {!isSidebarOpen && (
        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          className="fixed left-3 top-3 z-50 flex items-center rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm font-medium text-[var(--text-h)] shadow-sm md:hidden"
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
          className="fixed inset-0 z-30 bg-black/20 md:hidden"
        />
      )}

      <div className="flex-1 p-5 md:p-8">
        <WikiPage />
      </div>
    </div>
  );
}
