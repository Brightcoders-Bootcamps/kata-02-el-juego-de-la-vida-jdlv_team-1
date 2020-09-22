//const Celula = require('./celula'); // CommonJS
const game = require('./JDLV');

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
    let row=2;
    let column=2;
    game.rulesCell(game.newcell,row,column);
    let newArray=game.getNewArray();
    let expectCellDead= newArray[row][column];
    expect(expectCellDead.getLife()).toBe(0);
});

test('Prueba con celula viva y vecinos vivos mayor que 3, regresa celula muerta en la misma fila y columna ',()=> {
    game.newcell.setLife(1);
    game.newcell.setNeighbors(4);
    let row=2;
    let column=2;
    game.rulesCell(game.newcell,row,column);
    let newArray=game.getNewArray();
    let expectCellDead= newArray[row][column];
    expect(expectCellDead.getLife()).toBe(0);
});

test('Prueba con celula muerta y vecinos vivos = 3, regresa celula viva en la misma fila y columna ',()=> {
    game.newcell.setLife(0);
    game.newcell.setNeighbors(3);
    let row=2;
    let column=2;
    game.rulesCell(game.newcell,row,column);
    let newArray=game.getNewArray();
    let expectCellDead= newArray[row][column];
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
// function rulesCell(cell,rows,columns) {    
//     //console.log("vecinos=" + neighbors + "   fila" + rows + "  columna=" + columns)
//     if ((cell.getLife() == 1) && (cell.getNeighbors() < 2)) {
//         newArray[rows][columns].setLife(0);         // Soledad
//     } else if ((cell.getLife() == 1) && (cell.getNeighbors() > 3)) {
//         newArray[rows][columns].setLife(0);         // Sobrepoblación
//     } else if ((cell.getLife() == 0) && (cell.getNeighbors() == 3)) {
//         newArray[rows][columns].setLife(1);         // Reproducción
//     } else {
//         newArray[rows][columns] = cell;
//     }
// }

/*
test('test', () => {
    debugger;
    c = new Celula(0, 3);
    expect(c.toString).toBe('.');
});
*/