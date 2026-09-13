
type ListLayoutProps<T> = {
    title?: string;
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    searchPlaceholder?: string;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    showSearch?: boolean;
    getKey?: (item: T) => string | number;

};

export function ListLayout<T>({
    title,
    items,
    renderItem,
    searchPlaceholder,
    searchValue,
    onSearchChange,
    showSearch = false,
    getKey,
}: ListLayoutProps<T>) {
    return (
        <div className="p-2 text-justify clear-both">
            {showSearch && (
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4 border-t border-[var(--border)] pt-4">
                    {title && <h3 className="font-bold">{title}</h3>}
                    <input
                        type="search"
                        value={searchValue}
                        onChange={(e) => onSearchChange?.(e.target.value)}
                        placeholder={searchPlaceholder}
                        className="w-full md:w-3/4 rounded border border-[var(--border)] bg-[var(--bg)] p-2 text-[var(--text-h)]"
                    />
                </div>
            )}

            <div className="columns-1 md:columns-2 gap-8">
                {items.map((item, index) => {
                    const key = getKey ? getKey(item) : index;

                    return (
                        <div key={String(key)} className="mt-2 p-2 break-inside-avoid">
                            {renderItem(item)}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}