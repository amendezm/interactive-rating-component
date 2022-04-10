window.onload = () => {
  var rating;

  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        items.forEach((item) => {
          item.classList.remove("active");
        });
        item.classList.add("active");
        rating = item.textContent;
      }
    });
  });

  const button = document.getElementById("submitButton");
  button.addEventListener("click", () => {
    console.log(rating);
  });
};
