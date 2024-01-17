import HomeCardList from '@/components/Card/HomeCardList';
import TitleHeader from '@/components/TitleHeader';
import { getAllCategoriesData } from '@/libs/api-libs';

const Home = async () => {
  const allCategoryData = await getAllCategoriesData();

  return (
    <main className="p-5 mx-auto max-w-screen-xl">
      <TitleHeader title="Category" />
      <section className="flex flex-wrap justify-center gap-5">
        <HomeCardList datas={allCategoryData} />
      </section>
    </main>
  );
};

export default Home;
