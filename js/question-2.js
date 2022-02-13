// API call for a list of games.
const gameUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=3c5896852c244d71afe582da6355b880";

const gameContainer = document.querySelector(".container");

async function getGame() { // For gamelist, outputing 8 first entries of arrey.
  try {
    const response = await fetch(gameUrl);
    const data = await response.json();

    //console.log(data);

    const games = data.results;

    gameContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {

      if (i === 8) { // Change value to display more or fewer games.
        break;
      }

    gameContainer.innerHTML += // Name of game, background imagestyling, rating and # of tags.
    `<div class="game" style="background-image: url(${games[i].background_image});">
      <h5>${games[i].name}</h5>
      <div class="content">
        <p>Rating: ${games[i].rating}/5</p>
        <p>Tags: ${games[i].tags.length}</p>
      </div>
    </div>`;
    }

  } catch(error) { // error message displayed to the user
    gameContainer.innerHTML = displayError();
    console.log(error);
  }
};

getGame();