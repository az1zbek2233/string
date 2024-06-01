let ism = prompt("Ism kiriting");
let kalit = prompt("lalit kiriting");

if (ism.includes(kalit)) {
    alert(`${ism}da ${kalit} sozi bor`)
} else {
    alert(`${ism}da ${ism}soz yoq`)
}