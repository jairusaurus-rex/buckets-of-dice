import styles from "./DiceRoller.module.css";

export const UserLoadCharacter = () => {
  return (
    <div className="border-b border-[var(--border)] bg-[var(--bg)]/75 px-4 py-3">
      <span className=" text-sm">Character Templates</span>
      <select id="countries" className="block w-full px-3 py-2.5 bg-[var(--bg)]/75 border border-[var(--border)] text-sm rounded focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
        <option selected>Blank Template</option>
        <option value="Abe">Abe</option>
        <option value="Aryk">Aryk</option>
        <option value="Nyx">Nyx</option>
        <option value="Tchar">Tchar</option>
      </select>
      <button
        className={styles.diceButton}
      >
        Load Character
      </button>
    </div>
  );
};
