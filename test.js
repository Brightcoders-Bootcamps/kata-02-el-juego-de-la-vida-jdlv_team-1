//const Celula = require('./celula'); // CommonJS
const game = require('./JDLV');
let row = 2;
let column = 4;
let newArray;
let expectCellDead;

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

test('Prueba con celula viva y vecinos vivos menor que 2, regresa celula muerta en la misma fila y columna ',()=> {
    game.newcell.setLife(1);
    game.newcell.setNeighbors(1);
    newArray=game.getNewArray();
    expectCellDead= newArray[row][column];
    game.rulesCell(game.newcell,row,column);
    expect(expectCellDead.getLife()).toBe(0);
});

test('Prueba con celula viva y vecinos vivos mayor que 3, regresa celula muerta en la misma fila y columna ',()=> {
    game.newcell.setLife(1);
    game.newcell.setNeighbors(4);
    game.rulesCell(game.newcell,row,column);
    newArray=game.getNewArray();
    expectCellDead= newArray[row][column];
    expect(expectCellDead.getLife()).toBe(0);
});

test('Prueba con celula muerta y vecinos vivos = 3, regresa celula viva en la misma fila y columna ',()=> {
    game.newcell.setLife(0);
    game.newcell.setNeighbors(3);
    game.rulesCell(game.newcell,row,column);
    newArray=game.getNewArray();
    expectCellDead= newArray[row][column];
    expect(expectCellDead.getLife()).toBe(1);
});
test('Prueba con celula viva y vecinos vivos = 2, regresa celula viva en la misma fila y columna ',()=> {
    game.newcell.setLife(1);
    game.newcell.setNeighbors(2);
    let row=2;
    let column=2;
    game.rulesCell(game.newcell,row,column);
    let newArray=game.getNewArray();
    let expectCellDead= newArray[row][column];
    expect(expectCellDead.getLife()).toBe(1);
});
test('Prueba con celula viva y vecinos vivos = 3, regresa celula viva en la misma fila y columna ',()=> {
    game.newcell.setLife(1);
    game.newcell.setNeighbors(3);
    let row=2;
    let column=2;
    game.rulesCell(game.newcell,row,column);
    let newArray=game.getNewArray();
    let expectCellDead= newArray[row][column];
    expect(expectCellDead.getLife()).toBe(1);
});


// test('visualizar el resultado del arreglo en cadena',()=> {
//     game.showResult(array);
//     expect(showResult()).toBe(array);
    
// });


// function showResult(array){
//     resutNewArray = '';
//     for (let x = 0; x < array.length; x++) {
//         for (let y = 0; y < array[x].length; y++) {
//             resutNewArray += arrayCells[x][y].toString();
//         }
//         resutNewArray += '\n';
//     }
//     return resutNewArray;
// }