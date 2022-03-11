function Country_flags(storages) {
    let emptyArr = storages || [];
    const addCountryData = (name, flag) => {

        if (!emptyArr.includes({ name, flag })) {
            data.push({ name, flag })
            localStorage.setItem("param", JSON.stringify(data))
        }
    }
    let getArr = () => emptyArr

    const errorMsg = () => "Country added succesfully"



    const sortAllCountries = () => data.sort(function (a, b) {
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase())
            return -1

    });

// const showAll = () => {
//     data.forEach((item) => {

//         // destructuring to extract values from an object
//         let countryName = item.name
//         let countryFlag = item.flag
        
//         let li = document.createElement("li");
//         li.innerText = countryName + ' ' + countryFlag;
//         country.appendChild(li);

       
//     });
// }

    const timer = () => "";


    return {
        addCountryData,
        sortAllCountries,
        errorMsg,
        timer,
        getArr,
        // showAll
        
    }

}