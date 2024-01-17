import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-5 z-10 fixed w-full bg-white shadow-md">
      <div className="mx-auto max-w-screen-xl">
        <Link href="/" className="font-semibold text-teal-500 underline decoration-2 decoration-pink-500">
          mealsApp
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
