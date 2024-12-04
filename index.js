//Create Restart Button and Game over paragraph.
function createBtn(str) {
  return `        
  <p class="fw-bold text-danger fs-4">Game Over</p>
  <button onclick="restartGame()"type="button" class="btn btn-light">Restart</button>`
}
//To restart the game.
function restartGame (){
  location.reload();
}
//Function to choose button.
function startGame(choice){
  //define html game to display the functionality.
    const game = document.getElementById("game");
//HTML, Bootstrap & JavaScript done together.
    if (choice === 'left') {
        game.innerHTML = `
        <p class="fw-bold">Swim or Wait?</p>
        <button onclick="startGame('swim')" type="button" class="btn btn-light">Swim</button>
        <button onclick="startGame('wait')"type="button" class="btn btn-light">Wait</button>
        <button onclick="startGame('anything2')"type="button" class="btn btn-light">Anything else</button>
        `;
      } else if (choice === 'right'){
        game.innerHTML = `
        <p class="fw-bold">Fall into a hole.</p>
        ${createBtn()}`;
      }else if (choice === 'anything1'){
        game.innerHTML = `
        <p class="fw-bold">Fall into a hole.</p>
        ${createBtn()}`;
      }else if(choice === 'swim'){
        game.innerHTML = `
        <p class="fw-bold">Attacked by trout</p>
        ${createBtn()}`;
      }else if(choice ==='anything2'){
        game.innerHTML =`
        <p class="fw-bold">Attacked by trout</p>
       ${createBtn()}`;
      }else if(choice === 'wait'){
        game.innerHTML =`
        <p class="fw-bold">Which door?</p>
        <button onclick = "startGame('red')"type="button" class="btn btn-danger">Red</button>
        <button onclick = "startGame('blue')"class="btn btn-primary">Blue</button>
        <button onclick = "startGame('yellow')"type="button" class="btn btn-warning">Yellow</button>
        <button onclick = "startGame('anything3')""type="button" class="btn btn-light">Anything else</button>`;
      }else if(choice === 'red'){
        game.innerHTML = `
        <p class="fw-bold">Burned by fire.</p>
        ${createBtn()}`;
      }else if(choice === 'blue'){
        game.innerHTML = `
        <p class="fw-bold">Eaten by beasts</p>
        ${createBtn()}`;
      }else if( choice === 'yellow'){
        game.innerHTML = `
        <p class="fw-bold text-success fs-4">You win!</p>
        <button onclick="restartGame()"type="button" class="btn btn-light">Restart</button>`;
      }else if (choice === 'anything3'){
        game.innerHTML =`
        ${createBtn()}`; 
      }
    }
    