export const getAllCategoriesData = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getSpecifiedCategoryData = async ({ keyword }) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${keyword}`);
    const data = response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getDetailData = async ({ id }) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
