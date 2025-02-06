document.addEventListener("DOMContentLoaded", async function() {
    let page = window.location.pathname.split("/").pop().split(".")[0];
    let dbMap = {
        "quran": "https://raw.githubusercontent.com/mlk96j/dhakker/refs/heads/main/data/quran.json",
        "hadith": "https://raw.githubusercontent.com/mlk96j/dhakker/refs/heads/main/data/hadith.json",
        "fiqh": "https://raw.githubusercontent.com/mlk96j/dhakker/refs/heads/main/data/fiqh.json"
    };
    
    if (dbMap[page]) {
        let response = await fetch(dbMap[page]);
        let data = await response.json();
        let currentDay = localStorage.getItem("currentDay") || 0;
        
        if (currentDay < data.length) {
            document.getElementById("fact").innerText = data[currentDay].fact;
            document.getElementById("explanation").innerText = data[currentDay].explanation;
            localStorage.setItem("currentDay", ++currentDay);
        }
    }
});
