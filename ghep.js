const wishes = [

    "Semoga IPKnya bagus asik",

    "Semoga (gak) sama Gedruk",

    "Semoga nggak telat lagi pas kelas ^^",

    "Semoga hari kamu dipenuh kebahagiaan n berkah",

    "Semoga kamu dikelilingi orang orang baik",

    "Panjang umur yah Gep",

    "Semoga tugas tugas mu selesai n lancar jaya",

    "Semoga Ajisakany lancar jaya yh",

    "Semoga semua yg kamu ingin bakal tecapai",

    "Semoga cita2 km tercapai yah manis",

    "Semoga teokom dan duskom km aman yah",

    "Semoga tugas akhir cocur mu besok beres dgn lancar jaya",

    "Aowkowkw cie tua",

    "Semoga tahun ini n seterusnya km bahagia2 aj",

    "Semoga semogi",

    "Semoga kuliahny lancar sampe wisuda",

    "Semoga kamu menemukan kebahagiaan di setiap hari",

    "Semoga km dan org yg km sayangi selalu dalam lindungan Tuhan",

    "Semoga kamu mendapatkan cinta dan kebahagiaan yang melimpah",

    "Semoga selera km dl cowok membaik ya ^^",

    "Semoga gak jadi sasaran Mbak Hermin"

];

document.getElementById('wishButton').addEventListener('click', function() {

    const randomIndex = Math.floor(Math.random() * wishes.length);

    const wish = wishes[randomIndex];

    document.getElementById('wishDisplay').innerText = wish;

});