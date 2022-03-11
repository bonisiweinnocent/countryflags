describe('The Country Flag factory function', function () {
    it('should be able to return an success message when the country has been added', function () {
        var theApp = Country_flags();
        var word = "Cameroon"
        var contain = "🇨🇲"

        theApp.addCountryData(word,contain)
       
        assert.equal("Country added succesfully",theApp.errorMsg());


    });
   

});
