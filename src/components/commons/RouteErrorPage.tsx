import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import pageNotFound from "../../assets/images/wallpaper/pageNotFound.webp";

export const RouteErrorPage = () => {
    const error = useRouteError();
    const status = isRouteErrorResponse(error) ? error.status : undefined;

    return (
        <main className="flex min-h-screen items-center justify-center p-4">
            <div className="flex max-w-2xl flex-col items-center rounded-xl bg-[var(--bg)]/70 p-4 text-center text-[var(--text-h)]">
                <h1 className="text-4xl font-bold">{status ?? "Oops"}</h1>
                <h2 className="mt-2 text-2xl font-semibold">This page could not be loaded</h2>
                <p className="mt-3">Something went wrong while opening this part of the site.</p>
                <img
                    src={pageNotFound}
                    alt="A lost spacer searching for a way home"
                    className="mt-5 w-full rounded-2xl border-4 border-[var(--accent)]"
                />
                <Link
                    className="mt-5 text-[var(--accent)] hover:underline"
                    to="/"
                >
                    Return home
                </Link>
            </div>
        </main>
    );
};