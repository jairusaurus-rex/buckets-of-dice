import { useState, type ReactNode } from "react";

type ReadMoreProps = {
  children: ReactNode;
  defaultOpen?: boolean;
}

export const ReadMore = ({
  children,
  defaultOpen = false,
}: ReadMoreProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full overflow-hidden">
      {/* Title / button */}
      <div className={`grid transition-all duration-300 ease-in-out ${!isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="p-0 m-0">
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="cursor-pointer color-[var(--muted)]">
              . . .
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="p-0 m-0">
            {children}
          </div>
          <div className="p-3 m-0">
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="cursor-pointer text-[var(--muted)] text-sm ">
              <i>close</i>
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}