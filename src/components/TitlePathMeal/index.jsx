import { IoHome } from 'react-icons/io5';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

const TitlePathMeal = ({ keyword, title2, className2, title3, className3 }) => {
  return (
    <div className="flex gap-3 items-center">
      <IoHome className="text-2xl text-black" />
      <Link href="/" className="text-sm hover:text-emerald-500">
        Home
      </Link>
      <FaChevronRight className="text-black" />
      <Link href={`/category/${keyword.toLowerCase()}`} className="text-sm hover:text-emerald-500">
        {title2}
      </Link>
      {title3 && (
        <>
          <FaChevronRight className="text-black" />
          <p className={`text-sm ${className3}`}>{title3}</p>
        </>
      )}
    </div>
  );
};

export default TitlePathMeal;
