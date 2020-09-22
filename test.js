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

test('Prueba de las reglas para que una celula viva',()=> {
    
});

/*
test('test', () => {
    debugger;
    c = new Celula(0, 3);
    expect(c.toString).toBe('.');
});
*/