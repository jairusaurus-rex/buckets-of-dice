import { Link } from "react-router-dom";
import { ArticleList } from "../article-lists/ArticleList";
import pageNotFound from "../../../assets/images/wallpaper/pageNotFound.jpg";

export const ArticleNotFound = () => {
    return (
        <div className="p-2 text-center">
            <div className=" flex justify-center">

                <img src={pageNotFound} className=" rounded-2xl border border-[var(--accent)] border-4 w-lg h-auto" />
            </div>
            <p className="p-2">Please visit articles below</p>
            {
                ArticleList.map((article) => (
                    <div key={article.id} className="w-full">
                        <Link
                            to={`/wiki/${article.id}`}
                            className="block w-full border-4 text-[var(--accent)] border-[var(--accent)] m-1 text-[var(--accent)] hover:underline text-sm p-2"
                        >
                            {article.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};