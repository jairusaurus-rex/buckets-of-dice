import { useState } from "react";
import { Modal } from "../../components/commons/Modal";



export const DiceRollerMainLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dice Roller</h1>
      <p>Welcome to the Dice Roller!</p>
      <button
        onClick={() => setIsModalOpen(true)}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Open Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="My Modal"
      >
        <p>Here is some content.</p>
      </Modal>
    </div>
  );
};