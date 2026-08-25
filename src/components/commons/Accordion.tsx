import { useState, type ReactNode } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({
  title,
  children,
  defaultOpen = false,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full overflow-hidden rounded-lg border border-[var(--border)]">
      {/* Title / button */}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-center justify-between bg-[var(--code-bg)] p-3 text-left font-semibold transition-colors hover:bg-[var(--accent-bg)] "
      >
        <span>{title}</span>

        {/* Arrow */}
        <span
          className={`text-xl transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {/* Content */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-0 m-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}