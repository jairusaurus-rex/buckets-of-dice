
import { useUser } from "../../../contexts/UserContext";

export const UserOptions = () => {
  const { userOptions, updateUserOption } = useUser();

  return (
    <div className="border-b border-[var(--border)] bg-[var(--bg)]/75 px-4 py-3">
      <ul className="select-none text-sm font-medium text-heading bg-neutral-primary-soft border border-[var(--border)] rounded">
        <li className="w-full border-b border-[var(--border)] rounded">
          <div className="flex items-center ps-3">
            <input id="message-sound" type="checkbox" checked={userOptions.MessageSound} onChange={(event) => updateUserOption("MessageSound", event.target.checked)} className="w-4 h-4 border border-[var(--border)] rounded bg-[var(--bg)] focus:ring-2 focus:ring-brand-soft" />
            <label htmlFor="message-sound" className="w-full py-3 ms-2 text-sm font-medium text-heading">Message Sound</label>
          </div>
        </li>
        <li className="w-full border-b border-[var(--border)] rounded">
          <div className="flex items-center ps-3">
            <input id="display-dice-rank" type="checkbox" checked={userOptions.DisplayDiceRate} onChange={(event) => updateUserOption("DisplayDiceRate", event.target.checked)} className="w-4 h-4 border border-[var(--border)] rounded bg-[var(--bg)] focus:ring-2 focus:ring-brand-soft" />
            <label htmlFor="display-dice-rank" className="w-full py-3 ms-2 text-sm font-medium text-heading">Display Dice Rank</label>
          </div>
        </li>
        
      </ul>
    </div>
  );
};
