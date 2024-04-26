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
