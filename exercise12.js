function konversiMenit(menit) {
    
    menit = a/60;
    menit = Math.floor(menit)

        z = menit*60
        digit2 = menit - z
        digit2 = digit2.toString()

            if (digit2.length < 2) {
                digit2 = '0' + digit2
            }

            jam = a + ':' + digit2;

    
    return jam
  }
  
 
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
 