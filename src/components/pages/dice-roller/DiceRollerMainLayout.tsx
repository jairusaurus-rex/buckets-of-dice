//import { useState } from "react";
//import { Modal } from "../../components/commons/Modal";
import Accordion from "../../commons/Accordion";
import { DiceCategories } from "../../../data-types/enums/dice-categories-enum";
import { DiceCategory } from "./DiceCategory";
import { DicePool } from "./DicePool";
import { MessageLog } from "./MessageLog";
import { useState } from "react";



export const DiceRollerMainLayout = () => {
  //const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogOpen, setIsLogOpen] = useState(false);

  return (
    <div className="p-0 m-0">
      {!isLogOpen && (
        <button
          type="button"
          onClick={() => setIsLogOpen(true)}
          className="fixed right-3 top-20 z-50 rounded-md border border-[var(--accent)] bg-[var(--bg)] px-3 py-2 text-sm font-medium text-[var(--text-h)] shadow-sm md:hidden"
          aria-label="Open message log"
        >
          Log
        </button>
      )}

      <div className="bg-[var(--bg)]/75 p-0 m-0 grid grid-cols-1 gap-0 md:grid-cols-5">
        <div className="col-span-1 p-0 m-0 md:col-span-4  ">
          <DicePool category={DiceCategories.POOL} />
          <div className="p-0 m-0 grid grid-cols-1 gap-0 md:grid-cols-4">
            <div className="col-span-1 ">
              <div className="m-1">
                <Accordion title={DiceCategories.COMBAT} >
                  <DiceCategory category={DiceCategories.COMBAT} canEdit={false} />
                </Accordion>
              </div>
              <div className="m-1">
                <Accordion title={DiceCategories.SKILL} >
                  <DiceCategory category={DiceCategories.SKILL} canEdit={false} />
                </Accordion>
              </div>
            </div>
            <div className="col-span-1 ">
              <div className="m-1">
                <Accordion title={DiceCategories.SUIT_GEAR} >
                  <DiceCategory category={DiceCategories.SUIT_GEAR} canEdit={false} />
                </Accordion>
              </div>
              <div className="m-1">
                <Accordion title={DiceCategories.NON_SUIT_GEAR} >
                  <DiceCategory category={DiceCategories.NON_SUIT_GEAR} />
                </Accordion>
              </div>
            </div>
            <div className="col-span-1 ">
              <div className="m-1">
                <Accordion title={DiceCategories.RELATIONSHIPS} >
                  <DiceCategory category={DiceCategories.RELATIONSHIPS} />
                </Accordion>
              </div>
              <div className="m-1">
                <Accordion title={DiceCategories.ASSETS} >
                  <DiceCategory category={DiceCategories.ASSETS} />
                </Accordion>
              </div>
            </div>
            <div className="col-span-1 ">
              <div className="m-1">
                <Accordion title={DiceCategories.VESSEL_COMBAT} >
                  <DiceCategory category={DiceCategories.VESSEL_COMBAT} canEdit={false} />
                </Accordion>
              </div>
              <div className="m-1">
                <Accordion title={DiceCategories.VESSEL_TRAVEL} >
                  <DiceCategory category={DiceCategories.VESSEL_TRAVEL} canEdit={false} />
                </Accordion>
              </div>
              <div className="m-1">
                <Accordion title={DiceCategories.VESSEL_EXTRA} >
                  <DiceCategory category={DiceCategories.VESSEL_EXTRA} />
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 ">
          <div className="m-1 hidden p-0 m-0 md:block ">
            <Accordion title="Log"  defaultOpen={true}>
              <MessageLog />
            </Accordion>
          </div>
          <div className="m-1">
            <Accordion title="Options">
              <div className=" mt-2">options</div>
            </Accordion>
          </div>
        </div>
      </div>

      {isLogOpen && (
        <>
          <aside className="fixed right-0 top-0 z-40 h-full w-72 border-l border-[var(--border)] bg-[var(--bg)] p-4 shadow-lg md:hidden">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="font-bold text-[var(--text-h)]">Log</h3>
              <button
                type="button"
                onClick={() => setIsLogOpen(false)}
                className="rounded border border-[var(--border)] px-2 py-1 text-xs font-medium text-[var(--text-h)]"
                aria-label="Close message log"
              >
                Close
              </button>
            </div>
            <MessageLog />
          </aside>
          <button
            type="button"
            aria-label="Close message log overlay"
            onClick={() => setIsLogOpen(false)}
            className="fixed inset-0 z-30 bg-black/20 md:hidden"
          />
        </>
      )}

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