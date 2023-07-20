const app = document.querySelector(".app");

fetch("https://api.thecatapi.com/v1/images/search?limit=10", {
  headers: {
    "x-api-key":
      "live_v9Q8wu87g3AGO51innwTF12jNQ8GZGmUHdWSObrIRx1mqcFNyZd8Yaa6E1j6nsNw",
  },
})
  .then((res) => res.json())
  .then((data) => {
    for (const value of data) {
      const element = document.createElement("img");
      element.classList.add("h-52", "w-full", "object-cover");
      element.src = value.url;

      app.appendChild(element);
    }
  });
