function konversiMenit(menit) {

    var a = menit;
    var z = '';
    if (a%60 === 0) {
        a = a/60;
        waktu = a + ':00';

    } else {
        a = a/60;
        a = a.toString().split(".")[0]

        z = a*60
        detik = menit - z
        second = detik.toString()

            if (second.length < 2) {
                second = '0' + second
            }

        waktu = a + ':' + second;

    }
    return waktu
  }
  
 
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
 