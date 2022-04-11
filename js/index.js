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
    if (!rating) {
      alert("You must select a rating");
      return;
    }
    document.getElementById(
      "ratingText"
    ).textContent = `You selected ${rating} out of 5`;

    document.getElementById("thankYouBox").classList.remove("hidden");
    document.getElementById("box").classList.add("hidden");
  });
};
