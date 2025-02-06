document.addEventListener("DOMContentLoaded", function() {
    const page = window.location.pathname.split("/").pop();
    let databaseURL = "";

    if (page === "quran.html") {
        databaseURL = "https://raw.githubusercontent.com/mlk96j/dhakker/refs/heads/main/data/quran.json";
    } else if (page === "hadith.html") {
        databaseURL = "https://raw.githubusercontent.com/mlk96j/dhakker/refs/heads/main/data/hadith.json";
    } else if (page === "fiqh.html") {
        databaseURL = "https://raw.githubusercontent.com/mlk96j/dhakker/refs/heads/main/data/fiqh.json";
    }

    if (databaseURL) {
        fetch(databaseURL)
            .then(response => response.json())
            .then(data => {
                const dayIndex = new Date().getDate() % data.length;
                document.getElementById("fact-box").innerText = data[dayIndex].fact;
                document.getElementById("explanation-box").innerText = data[dayIndex].explanation;
            })
            .catch(error => console.error("Fehler beim Laden der Daten:", error));
    }
});
