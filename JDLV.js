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


let rows = 4, columns = 8;
var resultArrayCell = '';
var resutNewArray = '';
var newArray;
var cell;
let arrayCells;
let loopControler=0;

function getRows(){
    return rows;
}

function getColumns(){
    return columns;
}

function getArrayCell(){
    return resultArrayCell;
}
function getNewArray(){
    return newArray;
}

function play(){
    var resultGame = initGame();
    console.log(resultGame);
    iteration(arrayCells);
    var showRes = showResult(newArray);
    console.log(showRes);
}

function initGame(){
    //let arrayCells;
    resultArrayCell = '';
    //rows = parseInt(prompt('Ingrese el numero de filas: '));
    //columns = parseInt(prompt('Ingrese el numero de columnas: '));
    arrayCells = new Array(rows);
    for (i = 0; i < arrayCells.length; i++) {
        arrayCells[i] = new Array(columns);
    }

    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < columns; y++) {
            var randomvar = Math.random();
            if (randomvar >= 0.5) {
                cell = new Celula(0, 0);
                arrayCells[x][y] = cell;
            } else {
                cell = new Celula(1, 0);
                arrayCells[x][y] = cell;
            }
            resultArrayCell+= arrayCells[x][y].toString();
        }
        resultArrayCell += '\n';
    }
    newArray=arrayCells;
    //console.log(resultArrayCell);
    //iteration(arrayCells);
    return resultArrayCell;
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
            rulesCell(ParamarrayCells[x][y],x,y);
        }
    }
}

function rulesCell(cell,rows,columns) {    
    //console.log("vecinos=" + neighbors + "   fila" + rows + "  columna=" + columns)
    if ((cell.getLife() == 1) && (cell.getNeighbors() < 2)) {
        newArray[rows][columns].setLife(0);         // Soledad
    } else if ((cell.getLife() == 1) && (cell.getNeighbors() > 3)) {
        newArray[rows][columns].setLife(0);         // Sobrepoblación
    } else if ((cell.getLife() == 0) && (cell.getNeighbors() == 3)) {
        newArray[rows][columns].setLife(1);         // Reproducción
    } else {
        newArray[rows][columns] = cell;
    }
}

function showResult(array){
    resutNewArray = '';
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array[x].length; y++) {
            resutNewArray += arrayCells[x][y].toString();
        }
        resutNewArray += '\n';
    }
    return resutNewArray;
    //console.log(resutNewArray);
}

function sumTd (x,y){
    return x + y;
}

play();
let newcell = new Celula(0, 4);
module.exports = {
    newcell,
    initGame,
    iteration,
    rulesCell,
    showResult,
    getRows,
    getColumns,
    getArrayCell,
    sumTd,
    getNewArray,
}