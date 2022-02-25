const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

let inputArea = document.querySelector('.inputField')
let addBtn = document.querySelector('.addbtn')
let show = document.querySelector('.showbtn')
let country = document.querySelector('.country')



// var storage = [];
// if (localStorage["param"]) {
//     storage = JSON.parse(localStorage.getItem("param"))
// }

function countryList() {
    countries.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        country.appendChild(li);
    });

}
function addCountry() {
const name= inputArea.value;
countries.push(name)
}





show.addEventListener('click', countryList)
addBtn.addEventListener('click', addCountry)
