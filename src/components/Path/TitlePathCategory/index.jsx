import { IoHome } from 'react-icons/io5';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

const TitlePathCategory = ({ title2 }) => {
  return (
    <div className="flex gap-3 items-center">
      <IoHome className="text-2xl text-black" />
      <Link href="/" className="text-sm hover:text-emerald-500">
        Home
      </Link>
      <FaChevronRight className="text-black" />
      <p className="text-sm text-gray-500">Category</p>
    </div>
  );
};

export default TitlePathCategory;
