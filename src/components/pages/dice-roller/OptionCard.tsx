import { UserConnection } from "./UserConnection";
import { UserOptions } from "./UserOptions";



export const OptionCard = () => {

  return (
    <div className="mb-10 pb-10 md:mb-1 md:pb-1 bg-[var(--bg)]/75 ">
      <UserConnection />
      <UserOptions />
    </div>
  );
};
