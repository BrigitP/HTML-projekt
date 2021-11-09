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
var kysimused = {
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
}
var vastused = {
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
        tekst: 'Eelistan tervilikku',
        retseptiPealkiri: 'Soovitame teile poke kaussi',
        retsept: 'smoothiebowl.html'
    },
    'a322': {
        tekst: 'Eelistan mittetervislikku',
        retseptiPealkiri: 'Soovitame teile grilljuustu',
        retsept: 'grilledcheese.html'
    }

}

// see funktsioon vahetab "question" nimelise divi sisu välja meie küsimuse ja vastustega
function vahetaSisu(kysimuseVoti) {
    var kysimus = kysimused[kysimuseVoti];
    var html = kysimus.tekst;
    html += '<br>';

    for (let i = 0; i < kysimus.vastused.length; i++) {
        var vastuseVoti = kysimus.vastused[i];
        var vastuseSisu = vastused[vastuseVoti];

        if (vastuseSisu.jargmineKysimus) {
            html += '<button class="valikvastus" onclick="vahetaSisu(\'' + vastuseSisu.jargmineKysimus + '\')">' + vastuseSisu.tekst + '</button>';
        } else if (vastuseSisu.retsept) {
            html += '<button class="valikvastus" onclick="valiVastus(\'' + vastuseVoti + '\')">' + vastuseSisu.tekst + '</button>';
        }
    }

    document.getElementById("question").innerHTML = html;
}

// see funktsioon vahetab "question" nimelise divi sisu välja retseptivalikuga
function valiVastus(vastuseVoti) {
    var html = '';
    var vastuseSisu = vastused[vastuseVoti];
    html += '<button class="soovitus" onclick="valiRetsept(\'' + vastuseSisu.retsept + '\')">' + vastuseSisu.retseptiPealkiri + '</button>';
    html += '<br>';
    html += '<button class="uuesti" onclick="vahetaSisu(\'q1\')">Alusta algusest</button>';
    document.getElementById("question").innerHTML = html;
}