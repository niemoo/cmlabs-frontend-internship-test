const TitleHeader = ({ title }) => {
  return (
    <header className="flex items-center w-full mt-5">
      <div className="border-l-2 border-red-500 h-6 mr-2"></div>
      <h1 className="my-3 text-xl font-semibold">{title}</h1>
    </header>
  );
};

export default TitleHeader;
