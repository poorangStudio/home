console.log("External JS berhasil dijalankan!ss");

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbars');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.replace('bg-green-500', 'bg-white');
            navbar.classList.replace('text-white', 'text-black');
        } else {
            navbar.classList.replace('bg-white', 'bg-green-500');
            navbar.classList.replace('text-black', 'text-white');
        }
    });
});

document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});


