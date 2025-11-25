console.log("External JS berhasil dijalankan!ss");

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbars');
    if (!navbar) return;
    // 1rem=32p
    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight*1 + 64) {
            navbar.classList.replace('text-white', 'text-black');
            console.log(scrollY)
        } else {
            navbar.classList.replace('text-black', 'text-white');
        }
    });
});



document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});


