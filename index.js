console.log("External JS berhasil dijalankan!ss");
const facebookNav = document.getElementById("facebook_nav");
const twitterNav = document.getElementById("twitter_nav");
const discordNav = document.getElementById("discord_nav");
const reachMe = document.getElementById("reach-me");

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbars');
    if (!navbar) return;
    // 1rem=32p
    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight*1 + (64*2)) {
            facebookNav.src = "ff--facebook.png";
            twitterNav.src = "ff--twitter.png";
            discordNav.src = "ff--discord.png";
        } else {
            facebookNav.src = "00--facebook.png";
            twitterNav.src = "00--twitter.png";
            discordNav.src = "00--discord.png";
        }
    });
});



document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});


