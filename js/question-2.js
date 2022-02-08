const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=3c5896852c244d71afe582da6355b880";

const gameContainer = document.querySelector(".container");

async function getGame() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const games = data.results;

    console.log(games);

    for (let i = 0; i < games.length; i++) {

      if (i === 8) {
        break;
      }
    
      console.log(games[i].name)

      gameContainer.innerHTML += 
      `<div class="game">
        <h5>${games[i].name}</h5>
        <p>Rating: ${games[i].rating}</p>
        <p>Tags: ${games[i].tags.length}</p>
      </div>`;
    }
  } catch(error) {
    gameContainer.innerHTML = "An error occured";
    console.log(error);
  }
};

getGame();