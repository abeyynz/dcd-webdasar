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

    // Menghapus kelas 'active' dari semua gambar
    const allImages = document.querySelectorAll('aside img');
    allImages.forEach(img => img.classList.remove('active'));

    // Menambahkan kelas 'active' pada gambar yang diklik
    const clickedImage = document.getElementById('foto' + personId);
    clickedImage.classList.add('active');
}
