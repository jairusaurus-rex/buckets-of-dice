import { Link } from "react-router-dom";
import pageNotFound from "../../assets/images/wallpaper/pageNotFound.webp";

export const PageNotFound = () => {
    return (
        <div className=" flex h-screen items-center justify-center">
            <div className="flex flex-col center items-center  text-[var(--text-h)] rounded-xl bg-[var(--bg)]/50 p-2">
                <h1 className=" text-[var(--text-h)]">404</h1>
                <h2 className=" text-[var(--text-h)]">Page Not Found</h2>
                <h3 className=" text-[var(--text-h)]">Not all who wonder are lost... but you are!</h3>
                <img src={pageNotFound} className=" rounded-2xl border border-[var(--accent)] border-4 w-lg h-auto" />
                <h2 className=" text-[var(--text-h)]">Fear not, brave spacer, for you can <Link className=" text-[var(--accent)]  hover:underline " to="/">click here to return home!</Link></h2>
            </div>
        </div>
    );
}