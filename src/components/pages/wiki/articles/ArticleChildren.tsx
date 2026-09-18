import type { ArticleListType } from "../../../../data-types/types/AticleListType";
import { Link } from "react-router-dom";
import flyingWiki from "../../../../assets/images/art/flyingwiki.webp";

type ArticleChildrenProps = {
    children: ArticleListType[];
};

export const ArticleChildren = ({ children }: ArticleChildrenProps) => {
    return (
        <div className="p-2 text-center">
            <div className="flex justify-center">
                <img
                    src={flyingWiki}
                    alt="Flying wiki"
                    className="w-lg h-auto rounded-2xl border-4 border-[var(--accent)]"
                />
            </div>
            <p className="p-2">Please visit a section below</p>
            {children.map((child) => (
                <div key={child.id} className="w-full">
                    <Link
                        to={`/wiki/${child.id}`}
                        className="m-1 block w-full border-4 border-[var(--accent)] p-2 text-sm text-[var(--accent)] hover:underline"
                    >
                        {child.title}
                    </Link>
                </div>
            ))}
        </div>
    );
};
