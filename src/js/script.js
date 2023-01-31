const nav = document.querySelector("nav");

document.addEventListener("DOMContentLoaded", () => {
  const loadData = async () => {
    const response = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/602/guardian.php"
    );

    const data = await response.json();

    data.data.forEach((element) => {
      const newDiv = document.createElement("div");
      nav.appendChild(newDiv);
      newDiv.textContent = element;
      newDiv.addEventListener("click", () => loadArticles(newDiv.textContent));
    });
  };
  loadData();
});

const loadArticles = async (category) => {
  const response = await fetch(
    `https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=${category}`
  );
  const data = await response.json();
  console.log(data.data.channel.item);
  const articlesDiv = document.querySelector(".articles");
  articlesDiv.textContent = "";
  data.data.channel.item.forEach((item) => {
    articlesDiv.textContent += item.title;
  });
};

loadArticles();
