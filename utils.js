function formatInputPrice(value) {
    return String(value).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
}

// TODO: Made this function work
function editOldPrice() {
    if (document.getElementById("oldPrice")) {
        oldPrice.innerHTML = Math.round(Number($("#numSum").val().replace(/ +/g, '')) * 1.1) + '  ₸';
    }
}

// TODO: Made this function work
function editNewPrice(obj) {
    if (document.getElementById("newPrice")) {
        newPrice.innerHTML = obj + '  ₸';
    }
}

function setLocalStorage(key, value) {
    if (typeof window === 'undefined') {
        throw new Error("localStorage is not available.");
    }
    localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage(key) {
    if (typeof window === 'undefined') {
        throw new Error("localStorage is not available.");
    }
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

function setProgressStyle(elementValue, max, min, colorFilled, colorEmpty) {

    let sum = max - min,
        current = elementValue - min,
        num = (current / sum) * 100;

    return {
        background: `
        linear-gradient(
            to right,
            ${colorFilled} 0%,
            ${colorFilled} ${num}%,
            ${colorEmpty} ${num}%,
            ${colorEmpty} 100%
        )
    `
    }
}