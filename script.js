const khodams = [
    { name: 'Curut Kejepit'},
    { name: 'Sule Betawi'},
    { name: 'Lumba-Lumba Jawa'},
    { name: 'Laba-Laba Sunda'},
    { name: 'Nyai Roro Kidul Montok'},
    { name: 'Musang King'},
    { name: 'Kuntilanak Lanang'},
    { name: 'Rawa Rontek'},
    { name: 'Suster Ngepod'},
    { name: 'Gondrong Baper'},
    { name: 'Reza Kecap'},
    { name: 'Icikiwier'},
    { name: 'Farhan Kebab'},
    { name: 'Monyet Second Choice'},
    { name: 'Lidi Terbang'},
    { name: 'Telo Rebus'},
    { name: 'Pocong Ngopi'},
    { name: 'Bantal Busa'},
    { name: 'Tikus Berdasi'},
    { name: 'Bolu Kukus'},
    { name: 'Pindang Kering'},
    { name: 'Badut Lonely'},
    { name: 'Terasi Wangi'},
    { name: 'Botol Yakult'},
    { name: 'Kura-Kura Penghibur'},
    { name: 'Buaya Setia'},
    { name: 'Ubi Singset'},
    { name: 'Anjing Sumbing'},
    { name: 'Bebek Ngigau'},
    { name: 'Tuyul Ngompol'},
    { name: 'Wajan Lepek'},
    { name: 'Bekantan Nolep'},
    { name: 'Kunti Tobrut'},
    { name: 'Kunci Roda'},
    { name: 'Piring Prasmanan'},
    { name: 'Keset Welcome'},
    { name: 'Egrek Sawit'},
    { name: 'Kondom Bocor'},
    { name: 'Gagak Cadel'},
    { name: 'Gorila Sange'},
    { name: 'Stik Rental'},

    // Tambahkan lebih banyak khodam sesuai kebutuhan
];

window.onload = () => {
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();
};

function generateKhodam() {
    const name = document.getElementById('nameInput').value.trim();
    if (name === "") {
        alert("God said: Masukkan nama Anda terlebih dahulu!");
        return;
    }
    const randomIndex = Math.floor(Math.random() * khodams.length);
    const selectedKhodam = khodams[randomIndex];
    
    document.getElementById('userName').innerText = name;
    document.getElementById('khodamName').innerText = selectedKhodam.name;

    document.getElementById('mainContainer').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'block';
}

function reset() {
    document.getElementById('nameInput').value = '';
    document.getElementById('mainContainer').style.display = 'block';
    document.getElementById('resultContainer').style.display = 'none';
}

// Tooltip untuk watermark
tippy('.watermark', {
    content: "Klik untuk membuka profil",
    placement: 'top',
    arrow: true,
});
