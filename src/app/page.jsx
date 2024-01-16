import CardList from '@/components/CardList';
import { getAllCategoriesData } from '@/libs/api-libs';

const Home = async () => {
  const allCategoryData = await getAllCategoriesData();

  return (
    <main className="p-5 mx-auto max-w-screen-xl">
      <section className="flex flex-wrap justify-center gap-5">
        <CardList datas={allCategoryData} />
      </section>
    </main>
  );
};

export default Home;
