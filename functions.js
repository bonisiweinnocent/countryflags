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



    const timer = () => "";


    return {
        addCountryData,
        sortAllCountries,
        errorMsg,
        timer,
        getArr,
        
        
    }

}