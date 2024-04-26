// Liste de paragraphes au hasard
var paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
];

// Attend que la page soit chargée
window.addEventListener("load", function () {
    // Cache le loader une fois que la page est chargée
    var loader = document.getElementById("loader");
    loader.style.display = "none";

    // Affiche l'adresse IP de l'utilisateur
    var ipMessage = document.getElementById("ipMessage");
    ipMessage.style.display = "block";
    var userIP = document.getElementById("userIP");
    getUserIP(function (ip) {
        userIP.textContent = ip;
    });

    // Affiche un paragraphe au hasard
    var randomParagraph = document.getElementById("randomParagraph");
    randomParagraph.style.display = "block";
    var randomText = document.getElementById("randomText");
    var randomIndex = Math.floor(Math.random() * paragraphs.length);
    randomText.textContent = paragraphs[randomIndex];
});

// Fonction pour récupérer l'adresse IP de l'utilisateur
function getUserIP(onIPReceived) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.ipify.org?format=json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            onIPReceived(response.ip);
        }
    };
    xhr.send();
}
