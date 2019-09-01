function xo(str) {

    var test = str
    var testo = 0
    var testx = 0

        for (var i = 0; test.length > i; i++) {

            if (test[i] === 'o') {
                testo+=1;
            } else if (test[i] === 'x') {
                testx+=1;
            } else {
                return 'Salah Input'
            } 
        }

        if (testo != testx) {
            return false
        } else {
            return true
        }

  }
  
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true