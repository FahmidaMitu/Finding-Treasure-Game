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
        game.innerHTML = `
        <p>Which door?</p>
        <button onclick = "red()">Red</button>
        <button onclick = "blue()">Blue</button>
        <button onclick = "yellow()">Red</button>
        <button onclick = "anything3()">Red</button>`
      }
       


}

