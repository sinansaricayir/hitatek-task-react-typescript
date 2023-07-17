import { ICategory } from "../interfaces/ICategory";

const Category: React.FC<ICategory> = ({ name }) => {
  return (
    <ul className="flex gap-4 text-lg  mb-2 mr-2 w-full">
      <li className="bg-green-600 px-6 py-10 text-white text-center cursor-pointer hover:bg-pink-700 transition-all min-w-[145px] flex items-center justify-center">
        <span>{name}</span>
      </li>
    </ul>
  );
};

export default Category;
