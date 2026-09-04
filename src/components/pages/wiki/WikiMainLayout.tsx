import { ArticlePages } from "./ArticlePages";
import { WikiSideBar } from "./WikiSideBar";
import { useState } from "react";

export const WikiMainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex h-[calc(100vh-6.5rem)] flex-col md:flex-row">

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
        <ArticlePages isSidebarOpen={isSidebarOpen} openSideBar={() => setIsSidebarOpen(true)} />
      </div>
    </div>
  );
}
