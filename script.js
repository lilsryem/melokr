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
        fetchCountryFlag(ip);
    });
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

// Fonction pour récupérer le drapeau du pays
function fetchCountryFlag(ip) {
    fetch("https://ipinfo.io/" + ip + "/json")
        .then(response => response.json())
        .then(data => {
            var countryCode = data.country;
            var flagImage = document.getElementById("flagImage");
            flagImage.src = "https://www.countryflags.io/" + countryCode + "/flat/64.png";
            flagImage.alt = "Drapeau du " + data.country_name;
        })
        .catch(error => console.error("Erreur lors de la récupération du drapeau du pays :", error));
}
