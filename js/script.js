function showBiodata(personId) {
    const articleTitle = document.getElementById('bio-title');
    const articleImg = document.getElementById('bio-img');
    const articleDetails = document.getElementById('bio-details');
    
    if (personId === 1) {
        articleTitle.innerText = "Sungho Profile";
        articleImg.src = "img/foto1.jpg";
        articleDetails.innerHTML = `
            <p>Nama: Park Sungho</p>
            <p>Tanggal Lahir: 4 September 2003</p>
            <p>MBTI: ENTJ</p>
            <p>Sungho sangat menyukai seni.
                Dia anggota tertua di grup.
                Dia lahir di Wonju, Gangwon, Korea Selatan.
                Dia menyukai seni dan mengendarai sepeda.
                Dia mencintai binatang.
            </p>
        `;
    } else if (personId === 2) {
        articleTitle.innerText = "Riwoo Profile";
        articleImg.src = "img/foto2.jpg";
        articleDetails.innerHTML = `
            <p>Nama: Lee Sang Hyeok</p>
            <p>Tanggal Lahir: 22 Oktober 2003</p>
            <p>MBTI: ISFP</p>
            <p>Riwoo bersekolah di Hanlim Multi Art School.
                Dia dekat dengan Yoonwoo TRENDZ dan Hojin eks N.CUS (mereka melakukan dance cover bersama sebelum debut).
                Dia suka mendengarkan musik.
            </p>
        `;
    } else if (personId === 3) {
        articleTitle.innerText = "Jaehyun Profile";
        articleImg.src = "img/foto3.jpg";
        articleDetails.innerHTML = `
            <p>Nama: Myung Jaehyun</p>
            <p>Tanggal Lahir: 4 Desember 2003</p>
            <p>MBTI: ENFP</p>
            <p>Jaehyun adalah mantan trainee YG Entertainment.
                Dia dulu tinggal di luar negeri.
                Dia adalah pecinta anjing.
                Dia memiliki nama belakang yang sangat langka di Korea Selatan.
                Dia memiliki kakak laki-laki.
            </p>
        `;
    } else if (personId ===4) {
        articleTitle.innerText = "Taesan Profile";
        articleImg.src = "img/foto4.jpg";
        articleDetails.innerHTML = `
            <p>Nama: Han Dong Min</p>
            <p>Tanggal Lahir: 10 Agustus 2004</p>
            <p>MBTI: INTJ</p>
            <p>Dia menjadi trainee selama lima sampai enam tahun
                Dia merupakan lulusan Sekolah Menengah Chungdam.
                Dia sebelumnya menjadi trainee di Source Music.
                Dia hobi membaca dan bermain piano
                Dia menyebut dirinya giant mountain BOYNEXTDOOR.
            </p>
        `;
    } else if (personId === 5) {
        articleTitle.innerText = "Leehan Profile";
        articleImg.src = "img/foto5.jpg";
        articleDetails.innerHTML = `
            <p>Nama: Kim Dong Hyun </p>
            <p>Tanggal Lahir: 20 OKtober 2004</p>
            <p>MBTI: ESFJ</p>
            <p>Leehan lahir di Busan, Korea Selatan.
                Dia memiliki kakak perempuan.
                Dia menyukai ikan dan tanaman.
                Ikan favoritnya adalah corydoras.
                Hobinya memelihara ikan.
            </p>
        `;
    } else if (personId === 6) {
        articleTitle.innerText = "Woonhak Profile";
        articleImg.src = "img/foto6.jpg";
        articleDetails.innerHTML = `
            <p>Nama: Kim Woon Hak</p>
            <p>Tanggal Lahir: 29 November 2006</p>
            <p>MBTI: ENFP</p>
            <p>Dia hobi bermain basket.
                Dia adalah penggemar Michael Jordan.
                Dia memiliki satu kakak perempuan.
                Bagi Woonhak, sang kakak adalah orang terfavorit di dunia. Dia sering merindukannya karena mereka tidak bisa sering bertemu.
            </p>
        `;
    }
 
    const allImages = document.querySelectorAll('aside img');
    allImages.forEach(img => img.classList.remove('active'));

 
    const clickedImage = document.getElementById('foto' + personId);
    clickedImage.classList.add('active');
}
let currentIndex = 0;

function moveSlider(n) {
    const sliderContainer = document.querySelector('.slider-container');
    const cards = document.querySelectorAll('.card');
    const visibleCards = 4; // Menampilkan 4 card sekaligus
    const cardWidth = cards[0].offsetWidth + 20; // lebar card + gap (20px)
    const totalCards = cards.length;

    currentIndex += n;

    // Batas geser agar tidak melampaui card pertama atau terakhir
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalCards - visibleCards) {
        currentIndex = totalCards - visibleCards;
    }

    // Menggeser container
    sliderContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
