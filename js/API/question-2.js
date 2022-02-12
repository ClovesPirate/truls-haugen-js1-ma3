// API call for a list of games.
const gameUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=3c5896852c244d71afe582da6355b880";

const gameContainer = document.querySelector(".container");

async function getGame() { // For gamelist, displaying 8 first entries of arrey.
  try {
    const response = await fetch(gameUrl);
    const data = await response.json();

    //console.log(data);

    const games = data.results;

    gameContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {

      if (i === 8) {
        break;
      }

    gameContainer.innerHTML += 
    `<div class="game" style="background-image: url(${games[i].background_image});">
      <h5>${games[i].name}</h5>
      <div class="content">
      <p>Rating: ${games[i].rating}/5</p>
      <p>Tags: ${games[i].tags.length}</p>
      </div>
    </div>`;
    }

  } catch(error) {
    gameContainer.innerHTML = displayError("An unkown error occured");
    console.log(error);
  }
};

getGame();