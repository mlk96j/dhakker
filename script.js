document.addEventListener("DOMContentLoaded", async function() {
    let page = window.location.pathname.split("/").pop().split(".")[0];
    let dbMap = {
        "quran": "data/quran.json",
        "hadith": "data/hadith.json",
        "meere": "data/meere.json"
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
