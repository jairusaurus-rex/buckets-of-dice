//import { useState } from "react";
//import { Modal } from "../../components/commons/Modal";
import { DiceCategories } from "../../data-types/enums/dice-categories-enum";
import { DiceRollerProvider } from "../../contexts/DiceRollerContext";
import { DicePool } from "./DicePool";



export const DiceRollerMainLayout = () => {
  //const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="p-0 m-0">
      <DiceRollerProvider>
        <div className="p-0 m-0 grid grid-cols-5 gap-0">
          <div className="col-span-4 p-0 m-0 border ">
            <DicePool category={DiceCategories.POOL} />
            <div className="p-0 m-0 grid grid-cols-4 gap-0">
              <div className="col-span-1 border">
                <div className="border mt-2">attack dice go here</div>
                <div className="border mt-2">skills dice go here</div>
              </div>
              <div className="col-span-1 border">
                <div className="border mt-2">suit gear dice go here</div>
                <div className="border mt-2">gear dice go here</div>
              </div>
              <div className="col-span-1 border">
                <div className="border mt-2">vessel dice go here</div>
                <div className="border mt-2">asset dice go here</div>
              </div>
              <div className="col-span-1 border">
                <div className="border mt-2">relationship dice go here</div>
              </div>
            </div>
          </div>
          <div className="p-0 m-0 border ">
            <div className="border">messages</div>
            <div className="border mt-2">options</div>
          </div>
        </div>
      </DiceRollerProvider>

      {/*}
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
      */}
    </div>
  );
};