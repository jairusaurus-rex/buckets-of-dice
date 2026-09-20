import { Component, type ErrorInfo, type ReactNode } from "react";

type AppErrorBoundaryProps = {
    children: ReactNode;
};

type AppErrorBoundaryState = {
    hasError: boolean;
};

const isDynamicImportError = (error: unknown) => {
    if (!(error instanceof Error)) return false;

    const message = error.message.toLowerCase();
    return message.includes("dynamically imported module") ||
        message.includes("importing a module script failed") ||
        message.includes("loading chunk");
};

export class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
    state: AppErrorBoundaryState = { hasError: false };

    static getDerivedStateFromError(): AppErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Application render failed:", error, errorInfo);

        if (isDynamicImportError(error)) {
            window.location.replace("/");
        }
    }

    render() {
        if (!this.state.hasError) return this.props.children;

        return (
            <main className="p-8 text-[var(--text-h)]">
                <h1 className="text-2xl font-bold">Something went wrong</h1>
                <p className="mt-3">The application could not load this page.</p>
                <button
                    type="button"
                    className="mt-5 rounded-md border border-[var(--accent)] px-4 py-2"
                    onClick={() => window.location.reload()}
                >
                    Refresh
                </button>
            </main>
        );
    }
}