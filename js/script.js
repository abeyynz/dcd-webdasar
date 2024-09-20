function biodata(personId) {
    const article = document.getElementById('bio');
    
    if (personId === 1) {
        article.innerHTML = `
            <h1>Sungho Profile</h1>
            <p>Nama: Orang Pertama</p>
            <p>Tanggal Lahir: 1 Januari 1990</p>
            <p>Pekerjaan: Penyanyi</p>
        `;
    } else if (personId === 2) {
        article.innerHTML = `
            <h1>Riwoo Profile</h1>
            <p>Nama: Orang Kedua</p>
            <p>Tanggal Lahir: 2 Februari 1992</p>
            <p>Pekerjaan: Rapper</p>
        `;
    } else if (personId === 3) {
        article.innerHTML = `
            <h1>Jaaehyun Profile</h1>
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
