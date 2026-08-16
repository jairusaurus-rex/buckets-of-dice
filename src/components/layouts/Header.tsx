import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-1 pl-4">
        <Link to="/">
            <p className="text-2xl font-bold">Buckets of Dice</p>
        </Link>
    </div>
  );
}