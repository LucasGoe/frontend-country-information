
const searchButton = document.getElementById('button');

searchButton.addEventListener("click", getCountryInfo);

const searchBar = document.getElementById('textbar');
searchBar.addEventListener('keyup', setQuery);

const countryInfoBox = document.getElementById('countries');

let query = '';

function setQuery(e) {
    query = e.target.value;
    if (e.keyCode === 13) {
        getCountryInfo();
    }
}

async function getCountryInfo() {

    searchBar.value = '';

    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    const previousSearchResult = document.getElementById('country');
    if (previousSearchResult) {
        countryInfoBox.removeChild(previousSearchResult);
    }

    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/name/${query}?fullText=true`);

        const countryData = response.data[0];
        // console.log("COUNTRY DATA: ", countryData);

        const country = document.createElement('div');
        country.setAttribute('id', 'country');

        const flag = document.createElement('img');
        flag.setAttribute('src', countryData.flag);
        country.appendChild(flag);

        const countryPopulation = Math.round(countryData.population / 1000000 * 10) / 10;

        const countryString = `${countryData.name}`;
        // console.log(countryString);
        const countryName = document.createElement('div');
        countryName.textContent = countryData.name;
        country.appendChild(countryName);

        const countryInfoString = document.createElement('p');
        countryInfoString.textContent = `${countryData.name} is situated in ${countryData.subregion}. It has a population of ${countryPopulation} mln people.`;
        country.appendChild(countryInfoString);
        // console.log(countryInfoString);

        const capitalString = document.createElement('p');
        capitalString.textContent = `The capital is ${countryData.capital} ${formatCurrencies(countryData.currencies)}`; //
        country.appendChild(capitalString);
        // console.log(capitalString);

        const languageString = document.createElement('p');
        languageString.textContent = `${createLanguageDescription(countryData.languages)}`;
        country.appendChild(languageString);
        // console.log(languageString);

        countryInfoBox.appendChild(country);
    }   catch(e) {
        console.error(e);
        errorMessage.textContent = `${query} does not exist. Try again! (in English)`;
    }
}

    function createLanguageDescription(languages) {
    let output = 'They speak ';

    for (let i = 0; i < languages.length; i++) {
        if (languages.length === 1) {
            return output = output + languages[i].name;
        }
        if (i === languages.length - 1) {
            return output = output + " and " + languages[i].name;
        }
        if (languages.length === 2 || i === languages.length - 2) {
            output = output + languages[i].name;
        } else {
            output = output + languages[i].name + ", ";
        }
    }
    return output;
}

    function formatCurrencies(currencies) {
        for (let i = 0; i < currencies.length; i++) {
            let output = 'and you can pay with ';

            if (currencies.length === 2) {
                return output + `${currencies[i].name} and ${currencies[i].name}'s`;
            }
            return output + `${currencies[i].name}'s`;
        }
    }
