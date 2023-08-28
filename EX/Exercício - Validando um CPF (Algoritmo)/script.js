// 705.484.450-52 ; 070.987.720-03

/*

7x  0x  5x  4x  8x  4x  4x  5x  0 
10  9   8   7   6   5   4   3   2
70  0  40  28  48  20  16  15   0  = 237

11 - (237 % 11) = 5 (Primeiro Digito)
Se o digito for maior que 9 = 0

7x  0x  5x  4x  8x  4x  4x  5x  0  5x
11  10  9   8   7   6   5   4   3  2  
77  0  45  32  56  24  20  20   0  10 = 284

11 - (284 % 11) = 2 (Segundo Digito)

705.484.450-52 === 705.484.450-52
*/

let cpf = '705.484.450-52'
let cpfLimpo = cpf.replace(/\D+/g, ''); // Representa tudo que não é um numero
cpfArray = Array.from(cpfLimpo); // Array da string
console.log(cpfArray.reduce((ac,val) => ac + Number(val), 0))