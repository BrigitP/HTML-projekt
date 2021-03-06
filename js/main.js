function valiRetsept(failinimi) {
    document.location = failinimi;
}

function mineTagasi() {
    window.history.back();
}

/*
 Valikud soovitamisel:
 1. Kas eelistate praadi või snäkki?
 1.1) Eelistan praadi
 2.1) Kas soovite riisirooga või makaronirooga?
 2.1.1) Eelistan riisirooga
 3.1.1) Soovitame teile kanakarrit riisiga
 2.1.2) Eelistan makaronirooga
 3.1.2) Soovitame teile pasta bolognese't

 1.2) Eelistan snäkki
 2.2) Kas soovite tervislikku snäkki või mitte?
 2.2.1) Soovin tervislikku
 3.2.1) Soovitame teile poke kaussi
 2.2.2) Ei soovi tervislikku
 3.2.2) Soovitame teile grilljuustu
 */
let kysimused = {
    'q1': {
        tekst: 'Kas eelistate praadi või snäkki?',
        vastused: ['a11', 'a12']
    },
    'q21': {
        tekst: 'Kas soovite riisirooga või makaronirooga?',
        vastused: ['a211', 'a212']
    },
    'q22': {
        tekst: 'Kas soovite tervislikku snäkki või mitte?',
        vastused: ['a321', 'a322']
    }
};

let vastused = {
    'a11': {
        tekst: 'Eelistan praadi',
        jargmineKysimus: 'q21'
    },
    'a12': {
        tekst: 'Eelistan snäkki',
        jargmineKysimus: 'q22'
    },
    'a211': {
        tekst: 'Eelistan riisirooga',
        retseptiPealkiri: 'Soovitame teile kanakarrit riisiga',
        retsept: 'karririis.html'
    },
    'a212': {
        tekst: 'Eelistan makaronirooga',
        retseptiPealkiri: 'Soovitame teile pasta bolognese\'t',
        retsept: 'pasta.html'
    },
    'a321': {
        tekst: 'Eelistan tervislikku',
        retseptiPealkiri: 'Soovitame teile smuuti-kaussi',
        retsept: 'smoothiebowl.html'
    },
    'a322': {
        tekst: 'Ei soovi tervislikku',
        retseptiPealkiri: 'Soovitame teile grilljuustu võileiba',
        retsept: 'grilledcheese.html'
    }

};

// see funktsioon vahetab "question" nimelise divi sisu välja meie küsimuse ja vastustega
function vahetaSisu(kysimuseVoti) {
    let kysimus = kysimused[kysimuseVoti];
    let html = kysimus.tekst;
    html += '<br>';

    for (let i = 0; i < kysimus.vastused.length; i++) {
        let vastuseVoti = kysimus.vastused[i];
        let vastuseSisu = vastused[vastuseVoti];

        if (vastuseSisu.jargmineKysimus) {
            html += '<button class="nupp" onclick="vahetaSisu(\'' + vastuseSisu.jargmineKysimus + '\')">' + vastuseSisu.tekst + '</button>';
        } else if (vastuseSisu.retsept) {
            html += '<button class="nupp" onclick="valiVastus(\'' + vastuseVoti + '\')">' + vastuseSisu.tekst + '</button>';
        }
    }

    document.getElementById("kysimus").innerHTML = html;
}

// see funktsioon vahetab "question" nimelise divi sisu välja retseptivalikuga
function valiVastus(vastuseVoti) {
    let html = '';
    let vastuseSisu = vastused[vastuseVoti];
    html += '<button class="nupp" onclick="valiRetsept(\'' + vastuseSisu.retsept + '\')">' + vastuseSisu.retseptiPealkiri + '</button>';
    html += '<br>';
    html += '<button class="nupp" onclick="vahetaSisu(\'q1\')">Alusta algusest</button>';
    document.getElementById("kysimus").innerHTML = html;
}