import { useState } from "react";
import {
  abeCharacterData,
  arykCharacterData,
  diceRollerDummyData,
  nyxCharacterData,
  shadyLadyData,
  tcharCharacterData,
} from "../../../assets/data/DiceRollerData";
import { DiceRollerReducerActions } from "../../../data-types/enums/dice-roller-reducer-action-enum";
import { useDiceRoller } from "../../../contexts/DiceRollerContext";
import styles from "./DiceRoller.module.css";

const characterTemplates = [
  { name: "Abe", categories: abeCharacterData },
  { name: "Aryk", categories: arykCharacterData },
  { name: "Nyx", categories: nyxCharacterData },
  { name: "Tchar", categories: tcharCharacterData },
];

export const UserLoadCharacter = () => {
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const { dispatch } = useDiceRoller();

  const loadCharacter = () => {
    const character = characterTemplates.find(({ name }) => name === selectedCharacter);
    const diceCategories = character
      ? [...shadyLadyData, ...character.categories]
      : diceRollerDummyData;

    dispatch({
      type: DiceRollerReducerActions.REPLACE_CATEGORIES,
      diceCategories,
    });
  };

  return (
    <div className="border-b border-[var(--border)] bg-[var(--bg)]/75 px-4 py-3">
      <label htmlFor="character-template" className="text-sm text-[var(--accent)]">Character Templates</label>
      <select
        id="character-template"
        value={selectedCharacter}
        onChange={(event) => setSelectedCharacter(event.target.value)}
        className="block w-full px-3 py-1 mb-2 bg-[var(--bg)]/75 border border-[var(--border)] text-sm rounded focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
      >
        <option value="">Blank Template</option>
        <option value="Abe">Abe</option>
        <option value="Aryk">Aryk</option>
        <option value="Nyx">Nyx</option>
        <option value="Tchar">Tchar</option>
      </select>
      <button
        type="button"
        onClick={loadCharacter}
        className={styles.diceButton}
      >
        Load Character
      </button>
    </div>
  );
};
