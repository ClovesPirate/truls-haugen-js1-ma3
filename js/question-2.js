const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=3c5896852c244d71afe582da6355b880";

const gameContainer = document.querySelector(".container");

async function getGame() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const games = data.results;

    gameContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {

      if (i === 8) {
        break;
      }

      gameContainer.innerHTML += 
      `<div class="game" style="background-image: url(${games[i].background_image});">
        <h5>${games[i].name}</h5>
        <p>Rating: ${games[i].rating}</p>
        <p>Number of tags: ${games[i].tags.length}</p>
      </div>`;
    }

  } catch(error) {
    gameContainer.innerHTML = `<div class="error"><p>An error occured while trying to load your request</p></div>`;
    console.log(error);
  }
};

getGame();