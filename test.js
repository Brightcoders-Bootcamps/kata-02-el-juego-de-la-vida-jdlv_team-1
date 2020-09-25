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


var testCells = (life, neighbors, LifeExpected) => { test(`Prueba con celula ${life} y vecinos vivos = ${neighbors}, celula esperada ${LifeExpected}`,()=> {
    game.newcell.setLife(life);
    game.newcell.setNeighbors(neighbors);
    game.rulesCell(game.newcell,row,column);
    let newArray =game.getNewArray();
    let expectCellDead= newArray[row][column];      
    expect(expectCellDead.getLife()).toBe(LifeExpected);
});
};

testCells(1,1,0);//test con celula viva, vecinos<2 y celula esperada muerta
testCells(0,3,1);//test con celula muerta, vecinos=3 y celula esperada viva
testCells(1,4,0);//test con celula viva, vecinos>3 y celula esperada muerta
testCells(1,2,1);//test con celula viva, vecinos=2 y celula esperada viva
testCells(1,3,1);//test con celula viva, vecinos=3 y celula esperada viva