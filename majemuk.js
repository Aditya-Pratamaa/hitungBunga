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
    // Ambil nilai input
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100;
    const time = parseFloat(document.getElementById("time").value);
    const ratePeriod = document.getElementById("ratePeriod").value;
    const timePeriod = document.getElementById("timePeriod").value;
    const type = document.getElementById("type").value;
    const resultElement = document.getElementById("result");

    if (!principal || !rate || !time) {
        resultElement.textContent = "Angka harus diisi!";
        resultElement.style.color = "red";
        return;
    }

    let adjustedRate = rate;
    switch (ratePeriod) {
        case "bulan":
            adjustedRate = rate * 12;
            break;
        case "caturwulan":
            adjustedRate = rate * 3;
            break;
        case "triwulan":
            adjustedRate = rate * 4;
            break;
        case "semester":
            adjustedRate = rate * 2;
            break;
        case "tahun":
        default:
            adjustedRate = rate;
            break;
    }

    let adjustedTime = time;
    switch (timePeriod) {
        case "bulan":
            adjustedTime = time / 12;
            break;
        case "caturwulan":
            adjustedTime = time / 3;
            break;
        case "triwulan":
            adjustedTime = time / 4;
            break;
        case "semester":
            adjustedTime = time / 2;
            break;
        case "tahun":
        default:
            adjustedTime = time;
            break;
    }

    let result;
    if (type === "simple") {
        result = principal * (1 + adjustedRate) ** (-adjustedTime);
    } else if (type === "compound") {
        result = principal * (1 + adjustedRate) ** adjustedTime;
    }

    const rupiah = new Intl.NumberFormat("id", {
        style: "currency",
        maximumFractionDigits: 0,
        currency: "IDR",
    }).format(result);

    // Tampilkan hasil
    resultElement.textContent = `Hasil perhitungan: ${rupiah}`;
    resultElement.style.color = "green";
}
