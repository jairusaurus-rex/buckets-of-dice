import { Link } from "react-router-dom";
import { ArticleList } from "../article-lists/ArticleList";


export const WelcomeArticle = () => {
    return (
        <div className="p-2 text-center">
            <p className="p-2">Please visit articles below</p>
            {
                ArticleList.map((article) => (
                    <div key={article.id}>
                        <Link
                            to={`/wiki/${article.id}`}
                            className="text-[var(--accent)] hover:underline text-sm"
                        >
                            {article.title}
                        </Link>
                    </div>
                ))}
        </div>
    );
};