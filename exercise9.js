// Tugas 1

function shoutOut(){
    return ('Halo Function!')
}
console.log(shoutOut())


console.log('\n')
// Tugas 2

function calculateMultiply(angka1, angka2){
    return angka1*angka2;
}

var num1 = 5
var num2 = 6

var hasilPerkalian = calculateMultiply(num1, num2)
console.log(hasilPerkalian)


console.log('\n')
// Tugas 3

function processSentence(nama, umur, alamat, hobi){
    return ('Nama saya ' + nama +', umur saya '+ umur +' tahun, alamat saya di '+ alamat +', dan saya punya hobby yaitu '+ hobi +'!')
}

var name = "Dani";
var age = 29;
var address = "Purwokerto";
var hobby = "Cari Duit";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);