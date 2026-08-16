import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className="border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <ul className="flex justify-around p-0 m-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-4 font-medium transition-colors ${
                  isActive
                    ? "text-[var(--accent)] border-b-2 border-[var(--accent)]"
                    : "text-[var(--text-h)] hover:text-[var(--accent)]"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wiki"
              className={({ isActive }) =>
                `block py-4 font-medium transition-colors ${
                  isActive
                    ? "text-[var(--accent)] border-b-2 border-[var(--accent)]"
                    : "text-[var(--text-h)] hover:text-[var(--accent)]"
                }`
              }
            >
              Wiki
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dice-app"
              end
              className={({ isActive }) =>
                `block py-4 font-medium transition-colors ${
                  isActive
                    ? "text-[var(--accent)] border-b-2 border-[var(--accent)]"
                    : "text-[var(--text-h)] hover:text-[var(--accent)]"
                }`
              }
            >
              Dice Roller
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}