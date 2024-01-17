import TitlePathMeal from '@/components/Path/TitlePathMeal';
import VideoPlayer from '@/components/VideoPlayer';
import { getDetailData } from '@/libs/api-libs';

const MealPage = async ({ params: { id } }) => {
  const detailData = await getDetailData({ id });

  return (
    <main className="mx-auto max-w-screen-md p-5 pt-24 mb-20">
      {detailData.meals.map((data) => (
        <section className="flex flex-col gap-10">
          <TitlePathMeal keyword={data.strCategory} title2="Category" title3={data.strMeal} className3="text-gray-500" />

          <h1 className="md:text-5xl text-4xl font-bold">{data.strMeal}</h1>

          <hr className="border-black" />
          <div className="flex justify-center">
            <img src={data.strMealThumb} className="rounded-xl" />
          </div>
          <div className="md:flex md:justify-between">
            <div className="md:w-1/2">
              <h3 className="font-bold text-2xl mb-2">INGREDIENTS</h3>
              <ul className="flex flex-col gap-2 mt-7">
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

            <div className="flex flex-col gap-5 md:w-1/2 md:mt-0 mt-10">
              <h3 className="font-bold text-2xl mb-2">INSTRUCTION</h3>
              {data.strInstructions.split('\r\n').map((instruction, index) => (
                <div>
                  <p className="font-semibold">STEP {index + 1} </p>
                  <p key={index}>{instruction}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <hr className="w-1/3 border-b-2 border-black" />
              <h3 className="font-bold text-2xl ">HOW TO COOK</h3>
              <hr className="w-1/3 border-b-2 border-black" />
            </div>
            <VideoPlayer youtubeId={data.strYoutube} />
          </div>
        </section>
      ))}
    </main>
  );
};

export default MealPage;
