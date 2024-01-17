import CategoryCardList from '@/components/Card/CategoryCardList';
import TitleHeader from '@/components/TitleHeader';
import { getAllCategoriesData } from '@/libs/api-libs';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const Home = async () => {
  const allCategoryData = await getAllCategoriesData();

  return (
    <main>
      <div className="bg-[url('../../public/hero.jpg')] bg-auto bg-no-repeat bg-center">
        <header className="flex flex-col justify-center h-96 pt-36 px-10">
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold text-white mr-5">GOOD FOODS.</h1>
            <h1 className="text-3xl font-bold text-teal-600">BETTER WORLD.</h1>
          </div>
          <div className="flex flex-col justify-center mt-10 text-white">
            <p className="flex justify-center font-semibold underline decoration-2 decoration-pink-500">
              <RiDoubleQuotesL />A recipe has no soul.
            </p>
            <p className="flex justify-center font-semibold underline decoration-2 decoration-pink-500">
              You, as the cook, must bring the soul to the recipe.
              <RiDoubleQuotesR />
            </p>
            <p className="flex justify-center font-bold mt-5 text-black">- Thomas Keller -</p>
          </div>
        </header>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 315">
          <path fill="#f5f5f5" fill-opacity="1" d="M0,96L120,90.7C240,85,480,75,720,96C960,117,1200,171,1320,197.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
      </div>

      <section className="mx-auto max-w-screen-xl">
        <TitleHeader title="Category" />
        <div className="flex flex-wrap justify-center gap-5">
          <CategoryCardList datas={allCategoryData} />
        </div>
      </section>
    </main>
  );
};

export default Home;
