import TitleHeader from '@/components/TitleHeader';
import TitlePathCategory from '@/components/TitlePathCategory';
import { getSpecifiedCategoryData } from '@/libs/api-libs';
import Link from 'next/link';

const CategoryPage = async ({ params: { keyword } }) => {
  const capitalizedKeyword = keyword.charAt(0).toUpperCase() + keyword.slice(1);
  const categoryData = await getSpecifiedCategoryData({ keyword });

  return (
    <main className="mx-auto max-w-screen-lg p-5">
      <TitlePathCategory />
      <TitleHeader title={capitalizedKeyword} />
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 mt-10">
        {categoryData?.meals?.map((data) => (
          <div key={data.idMeal} className="border border-gray-500 rounded-xl overflow-hidden transform transition-transform hover:scale-105">
            <Link href={`/category/${keyword}/meal/${data.idMeal}`}>
              <img src={data.strMealThumb} />
              <div className="p-3">
                <h3>{data.strMeal}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CategoryPage;
