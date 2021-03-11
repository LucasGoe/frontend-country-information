
const allCountriesInfoBox = document.getElementById('worldregions');

async function getAllCountries() {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/all`);
        const {data} = response;

        for (let i = 0; i < response.data.length; i++) {
            // console.log("ALL COUNTRIES by name?", response.data[i].name, "has a population of", response.data[i].population, "people");
            data.sort((a, b) => {
                return a.population - b.population;
            });
        }
       data.map((country) => {
           const { flag, name, region, population } = country;

           const countryElement = document.createElement("li");
           countryElement.setAttribute('class', 'country-clickable');

           const countryFlagElement = document.createElement('img');
           countryFlagElement.setAttribute('src', flag);
           countryFlagElement.setAttribute('class', 'flag');
           countryElement.appendChild(countryFlagElement);

           const countryNameElement = document.createElement('span');
           countryNameElement.textContent = name;
           countryElement.appendChild(countryNameElement);


           allCountriesInfoBox.appendChild(countryElement);
        });

    }
    catch (e) {
        console.log(e);
    }
}
getAllCountries()



//    Voor je begint
// 1. Je mag verder werken in jouw bestaande Country Information App
// 2. Schrijf voor alle onderstaande opdrachten eerst **stap voor stap de psuedo-code uit**.
//    Check bij de pseudo-antwoorden of je geen stappen overgeslagen hebt. Begin dan pas met programmeren.
//
// ## Plan de campagne
// 1. [x]   Maak een nieuwe HTML-pagina aan en link daar naartoe vanaf de home-pagina. Maak ook een nieuw JavaScript
//          bestand aan en link die aan de nieuwe pagina. Koppel ook het bestaande CSS bestand hieraan.
//          [x] maak regions.html en regions.js aan
//          [x] in regions.html link regions.js en styles.css
//          [x] check of het ook nodig is om axios opnieuw te linken
//
// 2. [ ]   Maak een functie die alle landen ophaalt en sorteert op grootte van de populatie, van laag naar hoog.
//          [ ] maak de functie aan en check of die wordt aangeroepen
//          [ ] maak een variabele aan die de landen array aanroept
//          [ ] gebruik de sort() methode die de 'countries.population' sorteert van laag naar hoog
//
// 3. Zorg ervoor dat er een lijst met land-namen en de bijbehorende vlag in de DOM wordt geplaatst. Gebruik
//    hierbij destructuring om de properties aan te spreken.


// 4. Plaats de landkaart \`world_map.png\` (te vinden in de \`assets map\`) bovenaan de pagina.


// 5. De land-namen moeten worden weergegeven in een kleur die overeenkomt met het continent waar het land in ligt.
//    Maak hier een aparte functie voor. Een land ligt altijd in één van de volgende vijf contintenten,
//    maar een uitzondering kan voorkomen:
//     * \`Africa\`: blauw
//     * \`Americas\`: groen
//     * \`Asia\`: rood
//     * \`Europe\`: geel
//     * \`Oceania\`: paars
//
// _Tip:_ gebruik de Color Picker extensie om erachter te komen welke kleuren er op de afbeelding staan.
//


// 6. **Bonus:** Zet een event listener op elk land, zodat als de gebruiker op dat land klikt, de populatie eronder tevoorschijn komt.
//    Zorg er ook voor dat als de gebruiker op een land klikt waarbij deze informatie al zichtbaar is, de informatie weer verdwijnt.
//    _Tip_: je hebt een unieke ID nodig voor elk tekst-element met populatie-informatie
//


// 7. **Bonus:** Zorg ervoor dat de styling aansluit bij de styling op de home-pagina
