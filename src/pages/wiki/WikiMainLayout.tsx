import { WikiSideBar } from "./SideBar";
import { WikiPage } from "./ArticlePages";

export const WikiMainLayout = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <WikiSideBar />
      <div className="flex-1 p-5 md:p-8">
        <WikiPage />
      </div>
    </div>
  );
}
