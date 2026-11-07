import { NavLink } from "react-router-dom";

export const ToolsMenu = () => {
  return (
    <nav className="border-b border-[var(--border)] bg-[var(--bg)]/90">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <ul className="flex justify-around p-0 m-0">
          <li>
            <NavLink
              to="/tools/message"
              className={({ isActive }) =>
                `block py-4 font-medium transition-colors ${
                  isActive
                    ? "text-[var(--accent)] border-b-2 border-[var(--accent)]"
                    : "text-[var(--text-h)] hover:text-[var(--accent)]"
                }`
              }
            >
              Message
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tools/emotions"
              className={({ isActive }) =>
                `block py-4 font-medium transition-colors ${
                  isActive
                    ? "text-[var(--accent)] border-b-2 border-[var(--accent)]"
                    : "text-[var(--text-h)] hover:text-[var(--accent)]"
                }`
              }
            >
              Emotions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tools/clock"
              end
              className={({ isActive }) =>
                `block py-4 font-medium transition-colors ${
                  isActive
                    ? "text-[var(--accent)] border-b-2 border-[var(--accent)]"
                    : "text-[var(--text-h)] hover:text-[var(--accent)]"
                }`
              }
            >
              Clock
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}