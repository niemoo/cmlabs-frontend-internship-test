import { getSpecifiedCategoryData } from '@/libs/api-libs';
import Link from 'next/link';

const CategoryPage = async ({ params: { keyword } }) => {
  const categoryData = await getSpecifiedCategoryData({ keyword });

  return (
    <main className="p-5 mx-auto max-w-screen-xl">
      <div className="flex flex-wrap justify-center gap-5">
        {categoryData.meals.map((data) => (
          <div key={data.idMeal} className="md:w-1/5 border border-gray-500 rounded-xl overflow-hidden">
            <Link href={`/category/${keyword}/recipe/${data.idMeal}`}>
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
