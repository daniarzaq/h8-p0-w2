var Name = 'Lucifer';
var Peran = 'pesulap';

if (Name === '') {
    console.log('Nama harus diisi!');
} else if (typeof Name !== 'undefined' && Peran === ''){
    console.log('Halo ' +Name, ', Pilih peranmu untuk memulai game!');
} else if (typeof Name !== 'undefined' && Peran === 'Ksatria'){
    console.log('Selamat datang di Dunia Proxytia, ' + Name ,'\n Halo Ksatria ' + Name ,', kamu dapat menyerang dengan senjatamu!' );
} else if (typeof Name !== 'undefined' && Peran === 'Tabib'){
    console.log('Selamat datang di Dunia Proxytia, ' + Name ,'\n Halo Tabib ' + Name ,', kamu akan membantu temanmu yang terluka!' );
} else if (typeof Name !== 'undefined' && Peran === 'Penyihir'){
    console.log('Selamat datang di Dunia Proxytia, ' + Name ,'\n Halo Penyihir ' + Name ,', ciptakan keajaiban yang membantu kemenanganmu!' );
} else {
    console.log('Peran anda tidak sesuai dengan peran didalam game !' );
}
