import Link from 'next/link';

const CardList = ({ datas }) => {
  return (
    <>
      {datas?.categories?.map((data) => (
        <div key={data.idCategory} className="md:w-1/5 border border-gray-500 rounded-xl overflow-hidden transform transition-transform hover:scale-105">
          <Link href={`category/${data.strCategory.toLowerCase()}`}>
            <img src={data.strCategoryThumb} />
            <div className="p-3">
              <h3 className="font-semibold">{data.strCategory}</h3>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default CardList;
