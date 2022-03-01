const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

let inputArea = document.querySelector('.inputField')
let addBtn = document.querySelector('.addbtn')
let show = document.querySelector('.showbtn')
let country = document.querySelector('.country')
let searchArea = document.querySelector('.searchField')
let displaySearch = document.querySelector('.display')
let sort = document.querySelector('.sortbtn')
let errorsElem = document.querySelector('.errors')
let successElem = document.querySelector('.success')

// var storage = [];
// if (localStorage["param"]) {
//     storage = JSON.parse(localStorage.getItem("param"))


function countryList() {
    countries.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        country.appendChild(li);
    });
    

}
function addCountry() {

var regEx = /^[A-Za-z]+$/;
const name = inputArea.value;

if (!regEx.test(name)) {

    errorsElem.innerHTML = "Please enter a correct country name with no special charectors"

}else
    countries.push(name)

    successElem.innerHTML= "Country added succesfully"

}

 errorsElem.innerHTML=""; 
 successElem.innerHTML=""  
   


function sortAlphabetically(){
    let sortedCountries = countries.sort().join('')

    
    return sortedCountries
}

show.addEventListener('click', countryList)
addBtn.addEventListener('click', addCountry)
sort.addEventListener('click',sortAlphabetically)


searchArea.addEventListener('keyup', (e) =>{
    let countryName = []
   
    if(e.target.value){
     countryName =countries.filter(contry => contry.toLowerCase().startsWith(e.target.value));
     countryName = countryName.map(contry => `<li>${contry}<\li>`)
     
 
    }
    showResults(countryName);
})
function showResults(countryName){
    let itemList = !countryName.length ? '' : countryName.join('')
    displaySearch.innerHTML = itemList
}
