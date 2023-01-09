// Laço For in (15/12/2022)

const frutas = ['Pera', 'Maçã', 'Uva'];
/*
for (let i = 0; i < frutas.length; i++) { //jeito mais "trabalhoso"
    console.log(frutas[i]);
}*/

for (let i in frutas){
    console.log(frutas[i]); //jeito mais rápido
}