import { getDetailData } from '@/libs/api-libs';

const RecipePage = async ({ params: { id } }) => {
  const detailData = await getDetailData({ id });

  return (
    <main className="p-5 mx-auto max-w-screen-md">
      {detailData.meals.map((data) => (
        <section className="flex flex-col gap-10">
          <h1 className="md:text-5xl text-4xl font-bold">{data.strMeal}</h1>
          <hr />
          <div className="flex justify-center">
            <img src={data.strMealThumb} className="rounded-xl" />
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold text-2xl mb-2">INGREDIENTS</h3>
              <ul>
                {Array.from(
                  { length: 20 },
                  (_, index) =>
                    data[`strIngredient${index + 1}`] !== '' && (
                      <li key={index} className="list-inside list-disc">
                        {data[`strMeasure${index + 1}`]} {data[`strIngredient${index + 1}`]}
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            <h3 className="font-bold text-2xl mb-2">INSTRUCTION</h3>
            {data.strInstructions.split('\r\n').map((instruction, index) => (
              <p key={index}>{instruction}</p>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default RecipePage;
