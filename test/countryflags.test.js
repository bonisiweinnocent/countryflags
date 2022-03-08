describe('The Country Flag factory function', function () {
    it('should be able to add  a country', function () {
        var theApp = Country_flags();
        var word = "Cameroon"
        var contain = "🇨🇲"

        theApp.addCountryData(word,contain)
       
        assert.equal("Cameroon", theApp());


    });

});
