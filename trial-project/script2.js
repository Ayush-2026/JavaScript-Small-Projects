document.addEventListener("DOMContentLoaded", () => {
  const userInput = document.getElementById("city-input");
  const button = document.getElementById("get-weather-btn");
  const mainDiv = document.getElementsById("container");
  const weatherInfoDiv = document.getElementById("weather-info");
  const errorMessage = document.getElementById('error-message');

  

  button.addEventListener('click',()=>{
    const userInputValue = userInput.value.trim().toLowerCase();
    if (userInputValue === "") return;
mainDiv.classList.remove("rainy", "sunny", "winter");
    

    
     if (userInputValue === "rainy") {
      mainDiv.classList.add("rainy");
    } else if (userInputValue === "winter") {
      mainDiv.classList.add("winter");
    } else if (userInputValue === "sunny") {
      mainDiv.classList.add("sunny");
    } else {
      console.log("Weather not found");
    }
    

  })

});
