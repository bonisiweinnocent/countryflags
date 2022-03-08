function Country_flags() {
    // var storage = [];
// if (localStorage["param"]) {
//     storage = JSON.parse(localStorage.getItem("param"))

 
    const addCountryData = (name, flag) => {
        data.push({ flag, name })
        
        
    }

    const errorMsg = () =>"Country added succesfully"

    
    const sortAllCountries = () => {
        let sortedCountries = data.sort().join('')

        return sortedCountries
    }
    const timer = () => "";
    

    return {
        addCountryData,
        sortAllCountries,
        errorMsg,
        timer
    }

}