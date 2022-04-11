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
   // window.open('file:///D:/Carlitosnotocar/React_Javascript/interactive-rating-component/recibo.html');
   
    document.body.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles/recibo.css" />
        <link rel="icon" href="images/illustration-thank-you.svg">
        <title>Thank-you-state</title>
      
    </head>
    <body>
        <div class="container" >
            <div class="box">
                <div class="image">
                    <img src="images/illustration-thank-you.svg" alt="">
                </div>
            <div class="text_rating" id="text_rate">
                
                <p>You selected ${rating} out of 5</p>
            
            </div>
            <div class="content_text">
                <h1>Thank you!</h1>
                <p>We apprecite you taking the time to give a rating.
                    if you ever need more support, don't hesitate to
                    get in touch! 
                </p>
            </div>
            </div>
        </div>
        
    </body>
    </html>
`
  });
       
  
 

};
