class Celula {
  constructor(life, neighbors) {
      this.life = life;
      this.neighbors = neighbors;
  }
  // CONDICIONES PARA LA CELULA
  // 1 = VIVO    0 = MUERTO

  getLife() {
      return this.life;
  }

  setLife(life){
      this.life=life;
  }

  setNeighbors(Neighbors) {
      this.neighbors = Neighbors;
  }

  toString() {
      if (this.life == 0) {
          return '.';
      } else {
          return '*';
      }
  }

  getNeighbors() {
      return this.neighbors;
  }

};


let numX = 4, numY = 8;
var resutArrayCell = '';
var resutNewArray = '';
var cell;
let arrayCells;
let loopControler=0;

function getNumX(){
    return numX;
}

function getNumY(){
    return numY;
}

function getArrayCell(){
    return resutArrayCell;
}

function getNewArray(){
    return resutArrayCell;
}

play();
function play(){
    var resultGame = initGame();
    console.log(resultGame);
    iteration(arrayCells);
    var showRes = showResult(newArray);
    console.log(showRes);
}

function initGame(){
    //let arrayCells;
    resutArrayCell = '';
    //numX = parseInt(prompt('Ingrese el numero de filas: '));
    //numY = parseInt(prompt('Ingrese el numero de columnas: '));
    arrayCells = new Array(numX);
    for (i = 0; i < arrayCells.length; i++) {
        arrayCells[i] = new Array(numY);
    }

    for (let x = 0; x < numX; x++) {
        for (let y = 0; y < numY; y++) {
            var randomvar = Math.random();
            if (randomvar >= 0.5) {
                cell = new celula(0, 0);
                arrayCells[x][y] = cell;
            } else {
                cell = new celula(1, 0);
                arrayCells[x][y] = cell;
            }
            resutArrayCell+= arrayCells[x][y].getNumCell();
        }
        resutArrayCell += '\n';
    }
    newArray=arrayCells;
    //console.log(resutArrayCell);
    //iteration(arrayCells);
    return resutArrayCell;
}

function iteration(ParamarrayCells){
    for (var x = 0; x < ParamarrayCells.length; x++) {
        for (var y = 0; y < ParamarrayCells[x].length; y++) {
            let neighbors = 0;
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    try {
                        
                        if (ParamarrayCells[x + i][y + j].getLife() == 1) {
                            if(ParamarrayCells[x][y].getLife() == 1 && i==0 && j==0){
                                //console.log('se conto solo');
                            }else{
                                neighbors++;
                            }
                            
                        }
                    } catch (e) {
                        
                    }
                }
            }
            ParamarrayCells[x][y].setNeighbors(neighbors);
            rulesLife(ParamarrayCells[x][y],x,y);
        }
    }
}

function rulesLife(cell,x,y) {
    
    //console.log("vecinos=" + neighbors + "   fila" + x + "  columna=" + y)
    if ((cell.getLife() == 1) && (cell.getNeighbors() < 2)) {
        newArray[x][y].setLife(0);         // Soledad
    } else if ((cell.getLife() == 1) && (cell.getNeighbors() > 3)) {
        newArray[x][y].setLife(0);         // Sobrepoblación
    } else if ((cell.getLife() == 0) && (cell.getNeighbors() == 3)) {
        newArray[x][y].setLife(1);         // Reproducción
    } else {
        newArray[x][y] = cell;
    }
}

function showResult(array){
    resutNewArray = '';
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array[x].length; y++) {
            resutNewArray += arrayCells[x][y].getNumCell();
        }
        resutNewArray += '\n';
    }
    return resutNewArray;
    //console.log(resutNewArray);
}

function sumTd (x,y){
    return x + y;
}


let newcell = new Celula(0, 4);
module.exports = {
    
    initGame,
    iteration,
    rulesLife,
    showResult,
    getNumX,
    getNumY,
    getArrayCell,
    getNewArray,
    sumTd,
    newcell,
}