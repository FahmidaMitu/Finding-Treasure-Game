function playgame(choice){
    const game = document.getElementById("game");

    if (choice === 'left') {
        game.innerHTML = `
        <p>Swim or Wait?</p>
        <button onclick="playgame('swim')">Swim</button>
        <button onclick="playgame('wait')">Wait</button>
        <button onclick="playgame('anything2')">Anything else</button>

        `;
      } else if (choice === 'right'){
        game.innerHTML = `
        <p>Fall into a hole.</p>
        <p>Game Over</p>
        <button onclick="restartGame()">Restart</button>`;
      }else if (choice === 'anything1'){
        game.innerHTML = `
        <p>Fall into a hole.</p>
        <p>Game Over</p>
        <button onclick="restartGame()">Restart</button>`;  
      }else if(choice === 'swim'){
        game.innerHTML = `
        <p>Attacked by trout</p>
        <p>Game Over.</p>
        <button onclick="restartGame()">Restart</button>`;  
      }else if(choice ==='anything2'){
        game.innerHTML =`
        <p>Attacked by trout</p>
        <p>Game Over.</p>
        <button onclick="restartGame()">Restart</button>`;  
      }else if(choice === 'wait'){
        game.innerHTML =`
        <p>Which door?</p>
        <button onclick = "playgame('red')">Red</button>
        <button onclick = "playgame('blue')">Blue</button>
        <button onclick = "playgame('yellow')">Yellow</button>
        <button onclick = "playgame('anything3')">Anything else</button>`;
      }else if(choice === 'red'){
        game.innerHTML = `
        <p>Burned by fire.</p>
        <p>Game Over.</p>`;
      }else if(choice === 'blue'){
        game.innerHTML = `
        <p>Eaten by beasts</p>
        <p>Game Over</p>`;
      }else if( choice === 'yellow'){
        game.innerHTML = `
        <p>You win!</p>`;
      }else if (choice === 'anything3'){
        game.innerHTML =`
        <p>Game Over</p>`;
      }
    }
    function restartGame (){
      location.reload();

    }

