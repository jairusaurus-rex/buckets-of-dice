//import { useState } from "react";
//import { Modal } from "../../components/commons/Modal";
import { DiceCategories } from "../../data-types/enums/dice-categories-enum";
import { DiceCategory } from "./DiceCategory";
import { DicePool } from "./DicePool";



export const DiceRollerMainLayout = () => {
  //const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="p-0 m-0">
        <div className="p-0 m-0 grid grid-cols-5 gap-0">
          <div className="col-span-4 p-0 m-0  ">
            <DicePool category={DiceCategories.POOL} />
            <div className="p-0 m-0 grid grid-cols-4 gap-0">
              <div className="col-span-1 ">
                <DiceCategory category={DiceCategories.COMBAT} canEdit={false} />
                <DiceCategory category={DiceCategories.SKILL} canEdit={false}  />
              </div>
              <div className="col-span-1 ">
                <DiceCategory category={DiceCategories.SUIT_GEAR} canEdit={false}  />
                <DiceCategory category={DiceCategories.NON_SUIT_GEAR} />
              </div>
              <div className="col-span-1 ">
                <DiceCategory category={DiceCategories.RELATIONSHIPS} />
                <DiceCategory category={DiceCategories.ASSETS} />
              </div>
              <div className="col-span-1 ">
                <DiceCategory category={DiceCategories.VESSEL_COMBAT} canEdit={false}  />
                <DiceCategory category={DiceCategories.VESSEL_TRAVEL} canEdit={false}  />
                <DiceCategory category={DiceCategories.VESSEL_EXTRA}  />
              </div>
            </div>
          </div>
          <div className="p-0 m-0  ">
            <div className="">messages</div>
            <div className=" mt-2">options</div>
          </div>
        </div>

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