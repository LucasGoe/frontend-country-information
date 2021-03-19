```
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

// 2. Maak op basis van de response de volgende string en log dit in de console:
//    `[country-naam] is situated in [subarea-name]. It has a population of [amount] people.`
//
// - [x] Goed in de data kijken, waar zit deze info: -> loggen
// - [x] variabelen maken: countryName, countryArea, countryPopulation
// - [x] template string maken met -> `${countryName} ... etc`

// 3. Maak op basis van de response de volgende string en log dit in de console: `The capital is [city]`
//
// - [x] Goed in de data kijken, waar zit deze info: -> loggen
// - [x] variabelen maken: countryCapital
// - [x] template string maken met -> `${countryCapital} ... etc`

// 4. Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt.
// In een land kunnen één of twee currencies gebruikt worden:
//     - 1 valuta: `and you can pay with [currency]'s`
// - 2 valuta's: `and you can pay with [currency]'s and [currency]'s`
//
// - [x] Goed in de data kijken, waar zit deze info: -> loggen
// - [x] variabele maken, en de currencies uit de data daaraan toekennen
// - [x] functie maken -> formatCurrencies()
//     - [x] aanroepen -> logje in de functie zetten om te checken
// - [x] input: currencies, parameter(s) toevoegen, argument(en) meegeven
// - [x] parameter loggen om te kijken of de input hebben
// - [x] if
//     - [x] 1 currency -> `and you can pay with [currency]'s`
//     - [x] 2 currency -> `and you can pay with [currency]'s and [currency]'s`
//     - [x ] return de waarde `and you can pay with [currency]'s and [currency]'s`

// DEEL 2
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


```