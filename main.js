const menu = document.querySelector(".dots"),
side__bar = document.querySelector("aside");
let menuState = false;
let x = window.matchMedia("(max-width: 1000px)");
menu.addEventListener('click',showhideMenu);
function showhideMenu(){
    if(!menuState){
        menu.classList.add("active");
        side__bar.classList.add("active");
        menuState = true;
    }else{
        menu.classList.remove("active");
        side__bar.classList.remove("active");
        menuState = false;
    }
}
function myFunction(x) {
    if (x.matches) {
        side__bar.classList.add("active"); // Sidebar akan tersembunyi
    } else {
        side__bar.classList.remove("active"); // Sidebar muncul kembali di layar besar
    }
}

myFunction(x);
x.addListener(myFunction);

function calculateInterest() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100;
    const ratePeriod = document.getElementById("rate-period").value;
    const time = parseFloat(document.getElementById("time").value);
    const timePeriod = document.getElementById("time-period").value;
    const type = document.getElementById("type").value;
    const resultElement = document.getElementById("result");

    if (!principal || !rate || !time) {
        resultElement.textContent = "Angka harus diisi!";
        resultElement.style.color = "red";
        return;
    }

    let adjustedRate = rate;
    let adjustedTime = time;

    switch (ratePeriod) {
        case "month":
            adjustedRate = rate * 12;
            break;
        case "quarter":
            adjustedRate = rate * 4;
            break;
        case "caturwulan":
            adjustedRate = rate * 3;
            break;
        case "semester":
            adjustedRate = rate * 2;
            break;
    }

    switch (timePeriod) {
        case "month":
            adjustedTime = time / 12;
            break;
        case "quarter":
            adjustedTime = time / 4;
            break;
        case "caturwulan":
            adjustedTime = time / 3;
            break;
        case "semester":
            adjustedTime = time / 2;
            break;
    }

    let result;
    if (type === "simple") {
        result = principal * adjustedRate * adjustedTime; // Bunga tunggal
    } else if (type === "compound") {
        result = principal + (principal * adjustedRate * adjustedTime); // Modal akhir
    }

    const rupiah = new Intl.NumberFormat("id", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(result);

    resultElement.textContent = `Hasil perhitungan: ${rupiah}`;
    resultElement.style.color = "green";
}
