let factorial = 10;
let contador =0;

while(true){
    contador ++;
    if(contador === factorial){
        break;
    }
    console.log(`numero factorial de ${factorial} esta en ${contador}`);
}

console.log(`El contador llego a  ${contador} y el factorial es ${factorial}`);