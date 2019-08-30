// 1. Melakukan Looping Menggunakan While

var limit = 20
var deret = 0
console.log('LOOPING PERTAMA')
while(deret < limit) { 
  deret = deret + 2
  console.log(deret + ' - I love coding ')
}

var limit = 2
var deret = 22
console.log('LOOPING KEDUA')
while(deret > limit) { 
  deret = deret - 2
  console.log(deret + ' - I will become fullstack developer')
}



// 2. Melakukan Looping Menggunakan For
console.log('\n\n')

console.log('LOOPING PERTAMA')
for (i=1;i<21;i++){
    console.log(i+' - I love coding')
}

console.log('LOOPING KEDUA')
for (i=20;i>0;i--){
    console.log(i+' - I will become fullstack developer')
}

// 3. Angka Ganjil dan Genap
console.log('\n\n')

for (i=1;i<=100;i++){
    if (i%2 != 0){
        console.log(i +' = Ganjil')
    } else {
        console.log(i +' = Genap ')
    }
}

console.log('\n')

for (i=1;i<=100;i+=2){
    if (i%3 == 0){
        console.log(i+' KELIPATAN 3')
    }
}

console.log('\n')

for (i=1;i<=100;i+=5){
    if (i%6 == 0){
        console.log(i+' KELIPATAN 6')
    }
}

console.log('\n')

for (i=1;i<=100;i+=9){
    if (i%10 == 0){
        console.log(i+' KELIPATAN 10')
    }
}