// 1. Maak een 'Zoek'-knop op de pagina
// 2. en koppel deze aan een functie
// 3. die de gegevens over `België` ophaalt en dit in de console logt.
//
//     _Tip:_ Als de de [documentatie](https://www.npmjs.com/package/axios) bekijkt en op `async` zoekt, vindt je een voorbeeld van een GET-request.
//
// ## 1. De gebruiker kan de knop zien
//
// - [x] Zoek knop maken (HTML)
// - [x] id meegeven -> om met javascript te selecteren (HTML)
//
// ## 2. De gebruiker gaat klikken
//
// - [x] Knop selecteren (getElementById, opslaan in variabele)
// - [x] Event listener & Event Handler toevoegen aan knop (addEventListener, click, async functie)
//
// ## 3. Wanneer de gebruiker klikt wordt mijn async function aangeroepen
//
// - [x] Variable met maken country -> "Belgie" (hardcoden)
//     - [x] Variabele Url maken -> https://restcountries.eu/rest/v2/name/${country}?fullText=true
// - [x] axios.get(url)
// - [x] await toevoegen
// - [x] response -> checken

const button = document.getElementById("button");
//console.log("SEARCHBUTTON: ", button)

async function searchCountry() {
    //console.log("Hi!")
    let country = "belgium";
    //console.log("land: ", country);
    // Let op: URL met backticks (`..url...`) !
    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`);
    //console.log("response?: ", response.data[0].name);
    const countryData = response.data[0];
    console.log(countryData);

    const currencies = countryData.currencies;
    console.log("CURRENCIES:", currencies);
    const countryName = countryData.name;
    console.log("COUNTRY: ", countryName)
    const countryArea = countryData.subregion;
    console.log("AREA: ", countryArea);
    const countryPopulation = countryData.population;
    const roundedPopulation = Math.round(countryPopulation/1000000 * 10) / 10;
    console.log("POPULATION: ", roundedPopulation);

    const countryInfoString = `${countryData.name} is situated in ${countryData.subregion}. It has a population of ${roundedPopulation} mln people. `
    console.log("COUNTRY INFO: ", countryInfoString);


}
button.addEventListener("click", button);
const searchCountries = searchCountry();
console.log("zoek landen: ", searchCountries)



// formatCurrencies();



// 2. Maak op basis van de response de volgende string en log dit in de console:
//    `[country-naam] is situated in [subarea-name]. It has a population of [amount] people.`
//
// - [x] Goed in de data kijken, waar zit deze info: -> loggen
// - [x] variabelen maken: countryName, countryArea, countryPopulation
// - [x] template string maken met -> `${countryName} ... etc`
//
// 3. Maak op basis van de response de volgende string en log dit in de console: `The capital is [city]`
//
// - [ ] Goed in de data kijken, waar zit deze info: -> loggen
// - [ ] variabelen maken: countryCapital
// - [ ] template string maken met -> `${countryCapital} ... etc`
//
// 4. Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt. In een land kunnen één of twee currencies gebruikt worden:
//     - 1 valuta: `and you can pay with [currency]'s`
// - 2 valuta's: `and you can pay with [currency]'s and [currency]'s`
//
// - [ ] Goed in de data kijken, waar zit deze info: -> loggen
// - [ ] variabele maken, en de currencies uit de data daaraan toekennen
// - [ ] functie maken -> formatCurrencies()
//     - [ ] aanroepen -> logje in de functie zetten om te checken
// - [ ] input: currencies, parameter(s) toevoegen, argument(en) meegeven
// - [ ] parameter loggen om te kijken of de input hebben
// - [ ] if
//     - [ ] 1 currency -> `and you can pay with [currency]'s`
//     - [ ] 2 currency -> `and you can pay with [currency]'s and [currency]'s`
//     - [ ] return de waarde `and you can pay with [currency]'s and [currency]'s`