const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((element) => {
  console.log(`\nCategory: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("ul > li").length}`);
});
