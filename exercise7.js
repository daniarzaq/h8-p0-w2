// 1. Menyusun Barisan Bintang

var rows1 = 5 
for (i=0;i<rows1;i++) {
    console.log('*')
}

console.log('\n')

// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5 
for (i=0;i<rows2;i++) {
    var bintang = ''
    for (j=0;j<rows2;j++) {
        
        bintang += '*'
    }
    console.log(bintang)
}

console.log('\n')

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5 
for (i=0;i<=rows3;i++) {
    var bintang = ''
    for (j=0;j<i;j++) {
        
        bintang += '*'
    }
    console.log(bintang)
}


