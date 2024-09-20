function showBiodata(personId) {
    const articleTitle = document.getElementById('bio-title');
    const articleImg = document.getElementById('bio-img');
    const articleDetails = document.getElementById('bio-details');
    
    if (personId === 1) {
        articleTitle.innerText = "Sungho Profile";
        articleImg.src = "img/foto1.jpg";
        articleDetails.innerHTML = `
            <p>Nama: Orang Pertama</p>
            <p>Tanggal Lahir: 1 Januari 1990</p>
            <p>Pekerjaan: Penyanyi</p>
        `;
    } else if (personId === 2) {
        articleTitle.innerText = "Riwoo Profile";
        articleImg.src = "img/foto2.jpg";
        articleDetails.innerHTML = `
            <p>Nama: Orang Kedua</p>
            <p>Tanggal Lahir: 2 Februari 1992</p>
            <p>Pekerjaan: Rapper</p>
        `;
    } else if (personId === 3) {
        articleTitle.innerText = "Jaehyun Profile";
        articleImg.src = "img/foto3.jpg";
        articleDetails.innerHTML = `
            <p>Nama: Orang Ketiga</p>
            <p>Tanggal Lahir: 3 Maret 1995</p>
            <p>Pekerjaan: Penari</p>
        `;
    } else if (personId ===4) {
        articleTitle.innerText = "Taesan Profile";
        articleImg.src = "img/foto4.jpg";
        articleDetails.innerHTML = `
            <p>Nama: Orang Ketiga</p>
            <p>Tanggal Lahir: 3 Maret 1995</p>
            <p>Pekerjaan: Penari</p>
        `;
    } else if (personId === 5) {
        articleTitle.innerText = "Leehan Profile";
        articleImg.src = "img/foto5.jpg";
        articleDetails.innerHTML = `
            <p>Nama: Orang Ketiga</p>
            <p>Tanggal Lahir: 3 Maret 1995</p>
            <p>Pekerjaan: Penari</p>
        `;
    } else if (personId === 6) {
        articleTitle.innerText = "Woonhak Profile";
        articleImg.src = "img/foto6.jpg";
        articleDetails.innerHTML = `
            <p>Nama: Orang Ketiga</p>
            <p>Tanggal Lahir: 3 Maret 1995</p>
            <p>Pekerjaan: Penari</p>
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
    const cardWidth = cards[0].offsetWidth + 20; // card width + gap
    const totalCards = cards.length;

    currentIndex += n;

    // Prevent overflow to the left or right
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalCards - 1) {
        currentIndex = totalCards - 1;
    }

    // Slide the container
    sliderContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
