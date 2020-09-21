//const Celula = require('./celula'); // CommonJS
 const game = require('./JDLV');

// test('La suma es correcta', () => {
    // expect(game.sumTd(1, 2)).toBe(3);
// });
// 
// test('Las filas es igual a 4', () => {
    // expect(game.getNumX()).toBe(4);
// });
// 
// test('Las columnas es igual a 8', () => {
    // expect(game.getNumY()).toBe(8);
// });
// 
// test('Se completo el juego correctamente', () => {
    // let arrayCell = game.getArrayCell();
    // let newArray = game.getNewArray();
    // expect(arrayCell).toBe(newArray);
// });
// 
// test('Prueba', () => {
//     expect(game.cell.getNumCell()).toBe('.');
// });

test('test', () => {
    debugger;
    c = new Celula(0, 3);
    expect(c.toString).toBe('.');
});