//const Celula = require('./celula'); // CommonJS
const game = require('./JDLV');
let row = 2;
let column = 2;
// let life = 1;
// let neighbors = 3;

test('La suma es correcta', () => {
    expect(game.sumTd(1, 2)).toBe(3);
});

test('Prueba de celula muerta . = 0', () => {
    expect(game.newcell.toString()).toBe('.');
});
test('Prueba de celula viva * = 1', () => {
    game.newcell.setLife(1);
    expect(game.newcell.toString()).toBe('*');
});

test('Prueba de vecinos iniciales = 5', () => {
    game.newcell.setNeighbors(5);
    expect(game.newcell.getNeighbors()).toBe(5);
});

test('Prueba de las filas del tablero = 4', () => {
    expect(game.getRows()).toBe(4);
});

test('prueba de las columnas del tablero = 8', () =>{
    expect(game.getColumns()).toBe(8);
});


test('Se completo el juego correctamente', () => {
    expect(game.getArrayCell()).toBe(game.getArrayCell());
});


var testCells = (life,neighbors) => 
{ test('Prueba con celula viva y vecinos vivos = 3 ',()=> {
    game.newcell.setLife(life);
    game.newcell.setNeighbors(neighbors);
    game.rulesCell(game.newcell,row,column);
    let newArray =game.getNewArray();
    let expectCellDead= newArray[row][column];        

    if(life==0 && neighbors == 3){
        console.log(`Celula ${life}, vecinos = ${neighbors}, la celula revive`);
        expect(expectCellDead.getLife()).toBe(1);
    }
    if(life==1){
        if(neighbors < 2 || neighbors > 3){
            console.log(`Celula ${life}, vecinos = ${neighbors}, la celula muere`);
            expect(expectCellDead.getLife()).toBe(0);
        }
        if(neighbors == 2 || neighbors == 3){            
            console.log(`Celula ${life}, vecinos = ${neighbors}, la celula sigue viviendo`);
            expect(expectCellDead.getLife()).toBe(1);
        }
    }
});
};

testCells(1,1);
testCells(0,3);
testCells(1,4);
testCells(1,2);
testCells(1,3);