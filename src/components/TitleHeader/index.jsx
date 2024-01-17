const TitleHeader = ({ title }) => {
  return (
    <div className="flex justify-between items-center w-full mt-5">
      <div className="flex items-center">
        <div className="border-l-2 border-red-500 h-6 mr-2"></div>
        <h1 className="my-3 text-xl font-semibold">{title}</h1>
      </div>
    </div>
  );
};

export default TitleHeader;
