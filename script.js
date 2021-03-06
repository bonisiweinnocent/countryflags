const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];


const errorsArray = {
    charecters: "Please enter a correct country name with no special charecters or numbers",
    emoji: "Only flags emoji allowed,please try again",
    empty: "Input country details as required"
}

let data = countries.map(function (name, i) {
    return {
        name, flag: flags[i]
    }

})

let inputArea = document.querySelector('.inputField')
let emojiInput = document.querySelector('.emojiField')
let addBtn = document.querySelector('.addbtn')
let show = document.querySelector('.showbtn')
let country = document.querySelector('.country')
let searchArea = document.querySelector('.searchField')
let displaySearch = document.querySelector('.display')
let sort = document.querySelector('.sortbtn')
let errorsElem = document.querySelector('.errors')
let successElem = document.querySelector('.success')
let hidebtnElement = document.querySelector('.hidebtn')

let storag = [];

if (!localStorage["param"]) {
    
    data = localStorage.setItem("param", JSON.stringify(data))
    data = JSON.parse(localStorage.getItem("param"))
}else {
  
    data = JSON.parse(localStorage.getItem("param"))
    // localStorage.setItem("param", JSON.stringify(countryFlagInstance.getArr()));

    
}

let countryFlagInstance = Country_flags(data)

function addCountry(){
    setTimeout(function () {
        errorsElem.innerHTML = countryFlagInstance.timer()
        successElem.innerHTML = countryFlagInstance.timer()
        // localStorage.clear()
       

    }, 5000);
    let flagRegex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;
    var regEx = /^[A-Za-z]+$/;
    const name = inputArea.value;
    let flagEmoji = emojiInput.value

    // implementing template literals below
    if (name === "" && flagEmoji === "") {
        errorsElem.innerHTML = `${errorsArray.empty}`
    } else
        if (!regEx.test(name)) {

            errorsElem.innerHTML = `${errorsArray.charecters}`

        } else if (!flagRegex.test(flagEmoji)) {
            errorsElem.innerHTML = `${errorsArray.emoji}`
        }
        else {
            countryFlagInstance.addCountryData(name,flagEmoji)
            
            successElem.innerHTML = countryFlagInstance.errorMsg()
        }
       

}


show.addEventListener('click', () => {
    country.innerHTML= ''
    data.forEach((item) => {

        let countryName = item.name
        let countryFlag = item.flag
        
        let li = document.createElement("li");
        li.innerText = countryName + ' ' + countryFlag;
        country.appendChild(li);

       
    });

})
addBtn.addEventListener('click', addCountry)


sort.addEventListener('click', countryFlagInstance.sortAllCountries)


searchArea.addEventListener('keyup', (e) => {
    let countryName = []
    if (e.target.value) {
        countryName = data.filter(contry => contry.name.toLowerCase().startsWith(e.target.value));
        countryName = countryName.map(contry => `<li>${contry.name} ${contry.flag}<\li>`)
    }
    showResults(countryName);
})
function showResults(countryName) {
    let itemList = !countryName.length ? '' : countryName.join('')
    displaySearch.innerHTML = itemList
}
