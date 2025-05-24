document.addEventListener("DOMContentLoaded", function() {
    const musik = document.getElementById('musik');
    const logoMusik = document.getElementById('logoMusik'); 

    let isPlaying = false; 

    if (logoMusik) { 
        logoMusik.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            if (isPlaying) {
                musik.pause(); 
                isPlaying = false;
                console.log("Musik dijeda.");
            } else {
                musik.play(); 
                isPlaying = true;
                console.log("Musik diputar.");
            }
        });
    } else {
        console.warn("Elemen dengan ID 'logoMusik' tidak ditemukan.");
    }
});
