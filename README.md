# Mida täna süüa?

Tudengi igapäevaelu sisaldab piisavalt probleeme ja täisväärtuslik toitumine ei kuulu alati prioriteetide hulka. Lisaks on valikuid miljoneid ja valikuvariantide vähendamine aitab ka kõige otsustusvõimetuma tudengi koormat vähendada. See väike veebileht on loodud selle mure leevendamiseks. Siit lehelt leiab valiku roogasid, mille valmistamine ei käi üle jõu ka kõige algajamale kokale ja mis kõige parem - see aitab ka otsustusprotsessile kaasa.

## Kuidas seda kasutada?

Ava veebileht ning vajuta nupule "Mida süüa?". Vali valikuvariantidele vajutades meelepärane soovitus ning sellele peale vajutades jõuad retseptini.

## Arendajale
### Alustamine
1. Klooni endale projekt arvutisse:
   ```sh
   git clone https://github.com/BrigitP/HTML-projekt
   ```
2. Kasuta endale meeldivat IDE-t, et projekt sinna sisse importida

### Projekti struktuur
```
HTML-projekt
│   README.md
│   grilledcheese.html
│   index.html
│   karririis.html
│   macandcheese.html
│   pasta.html
│   smoothiebowl.html
│
└───img 
│   └───...
└───js 
│   └───main.js
│   
└───css
    │   main.css
    └───retsept.css
```

- **img**: kaust pildifailide jaoks
- **js**: kaust javascripti failide jaoks
- **css**: kaust css failide jaoks

### Küsimused
Küsimused ja vastused on kirjeldatud **main.js** failis.
Küsimused sisalduvad muutujas nimega **kysimused**. Igale küsimusele on antud võti, ning küsimus ise koosneb tekstist ja vastuste listist, mis viitavad [siin](#vastused) kirjeldatud vastustele.
```
    q1': {
        tekst: 'Kas eelistate praadi või snäkki?',
        vastused: ['a11', 'a12']
    }
```
Küsimuse lisamiseks on vaja samasugune objekt uue võtmega muutuja **kysimused** sisse lisada.

### Vastused
Vastused on samuti kirjeldatud **main.js** failis. Igal vastusele viitab unikaalne võti, ning iga vastuse sees on olemas sisutekst. Vastuseid on kahte sorti.

1. Vastused, mis viitavad järgmisele küsimusele:
```
    'a11': {
        tekst: 'Eelistan praadi', // vastuse tekst
        jargmineKysimus: 'q21' // viide järgmisele küsimusele
    }
```
2. Vastused, mis viitavad retseptile:
```
    'a322': {
        tekst: 'Ei soovi tervislikku', // vastuse tekst
        retseptiPealkiri: 'Soovitame teile grilljuustu võileiba', // Retsepti pealkiri, millele viidatakse
        retsept: 'grilledcheese.html' // link retseptile
    }
```
Vastuse lisamiseks on vaja samasugune objekt uue võtmega muutuja **vastused** sisse lisada.

### Retsepti lisamine
Retsepti lisamiseks on vaja luua uus **.html** fail projekti juurkausta. Igal retseptil on olemas:
1. Pilt valmistatavast toidust
2. Retsept tekstina
3. Youtube link
4. Juhend valmistamiseks
   
Pärast retsepti lisamist on vaja lisada juurde retseptile viitav [vastus](#vastused), ning siis lisada vastus kas juba olemasolevale [küsimusele](#küsimused) või lisada uus küsimus.

## Soovid panustada?
Kui soovid siia midagi juurde lisada, võta ühendust repositooriumi omanikuga. 
