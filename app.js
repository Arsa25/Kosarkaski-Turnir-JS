import groups from './groups.json' assert { type: "json" };


const tabelaGrupneFaze = [
    [
        { Team: "Kanada", bodovi: 0, pobeda: 0, poraz: 0, kosevaPo: 0, kosevaPr: 0, kosRazlika: 0, FIBARanking: 7 },
        { Team: "Australija", bodovi: 0, pobeda: 0, poraz: 0, kosevaPo: 0, kosevaPr: 0, kosRazlika: 0, FIBARanking: 5 },
        { Team: "Grčka", bodovi: 0, pobeda: 0, poraz: 0, kosevaPo: 0, kosevaPr: 0, kosRazlika: 0, FIBARanking: 14 },
        { Team: "Španija", bodovi: 0, pobeda: 0, poraz: 0, kosevaPo: 0, kosevaPr: 0, kosRazlika: 0, FIBARanking: 2 }
    ],
    [
        { Team: "Nemačka", bodovi: 0, pobeda: 0, poraz: 0, kosevaPo: 0, kosevaPr: 0, kosRazlika: 0, FIBARanking: 3 },
        { Team: "Francuska", bodovi: 0, pobeda: 0, poraz: 0, kosevaPo: 0, kosevaPr: 0, kosRazlika: 0, FIBARanking: 9 },
        { Team: "Brazil", bodovi: 0, pobeda: 0, poraz: 0, kosevaPo: 0, kosevaPr: 0, kosRazlika: 0, FIBARanking: 12 },
        { Team: "Japan", bodovi: 0, pobeda: 0, poraz: 0, kosevaPo: 0, kosevaPr: 0, kosRazlika: 0, FIBARanking: 26 }
    ],
    [
        { Team: "Sjedinjene Države", bodovi: 0, pobeda: 0, poraz: 0, kosevaPo: 0, kosevaPr: 0, kosRazlika: 0, FIBARanking: 1 },
        { Team: "Srbija", bodovi: 0, pobeda: 0, poraz: 0, kosevaPo: 0, kosevaPr: 0, kosRazlika: 0, FIBARanking: 4 },
        { Team: "Južni Sudan", bodovi: 0, pobeda: 0, poraz: 0, kosevaPo: 0, kosevaPr: 0, kosRazlika: 0, FIBARanking: 34 },
        { Team: "Puerto Riko", bodovi: 0, pobeda: 0, poraz: 0, kosevaPo: 0, kosevaPr: 0, kosRazlika: 0, FIBARanking: 16 }
    ]
]
const allTeams = [groups.A, groups.B, groups.C];
const zreb = [[], [], [], []]



const funcSvakoSaSvakim = async (grupa, i) => {
    let idx = i
    const k = 0.2;
    const e = Math.E;
    let mecevi = []
    if (i === 0) {
        console.log(`Grupa A`);
    }
    else if (i === 1) {
        console.log(`Grupa B`);
    }
    else {
        console.log(`Grupa C`);
    }

    const FuncUtakmica = (team1, team2) => {

        if (team1.FIBARanking > team2.FIBARanking) {
            var teamFibaBolji = team1;
            var teamFibaLosiji = team2;
        }
        else {
            var teamFibaBolji = team2;
            var teamFibaLosiji = team1;
        }

        let RazlikaFibaP = teamFibaBolji.FIBARanking - teamFibaLosiji.FIBARanking;
        let brojKosevaPobednickeEkipe = (Math.floor(Math.random() * 31) + 70);
        let brojKosevaGubitnickeEkipe = (Math.floor(Math.random() * 31) + 60);
        if (brojKosevaGubitnickeEkipe === brojKosevaPobednickeEkipe) {
            brojKosevaGubitnickeEkipe += 1;
        }
        let kosRazlika = brojKosevaPobednickeEkipe - brojKosevaGubitnickeEkipe;

        let verovatnocaBoljegTima = 1 / (1 + Math.pow(e, k * RazlikaFibaP)) * 100;
        let random = Math.random() * 100

        random < verovatnocaBoljegTima
            ? (
                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaBolji.Team).pobeda += 1,
                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaBolji.Team).kosevaPo += brojKosevaPobednickeEkipe,
                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaBolji.Team).kosevaPr += brojKosevaGubitnickeEkipe,
                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaBolji.Team).kosRazlika += kosRazlika,
                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaBolji.Team).bodovi += 2,

                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaLosiji.Team).poraz += 1,
                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaLosiji.Team).kosevaPo += brojKosevaGubitnickeEkipe,
                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaLosiji.Team).kosevaPr += brojKosevaPobednickeEkipe,
                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaLosiji.Team).kosRazlika += kosRazlika,
                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaLosiji.Team).bodovi += 1,
                mecevi.push({ teamFibaBolji, teamFibaLosiji, brojKosevaPobednickeEkipe, brojKosevaGubitnickeEkipe })
            )

            : (
                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaLosiji.Team).bodovi += 2,
                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaLosiji.Team).pobeda += 1,
                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaLosiji.Team).kosevaPo += brojKosevaPobednickeEkipe,
                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaLosiji.Team).kosevaPr += brojKosevaGubitnickeEkipe,
                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaLosiji.Team).kosRazlika += kosRazlika,

                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaBolji.Team).poraz += 1,
                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaBolji.Team).kosevaPo += brojKosevaGubitnickeEkipe,
                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaBolji.Team).kosevaPr += brojKosevaPobednickeEkipe,
                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaBolji.Team).kosRazlika += kosRazlika,
                tabelaGrupneFaze[idx].find(x => x.Team === teamFibaBolji.Team).bodovi += 1,
                mecevi.push({ teamFibaLosiji, teamFibaBolji, brojKosevaPobednickeEkipe, brojKosevaGubitnickeEkipe })
            )
    }

    for (let i = 0; i < grupa.length; i++) {
        for (let j = i + 1; j < grupa.length; j++) {
            FuncUtakmica(grupa[i], grupa[j]);
        }
    }


    console.log(mecevi.map(x => `${x.teamFibaBolji.Team} - ${x.teamFibaLosiji.Team} (${x.brojKosevaPobednickeEkipe}:${x.brojKosevaGubitnickeEkipe})`));
}



const play = async () => {
    console.log("Utakmice Grupne faze:");

    for (let i = 0; i < allTeams.length; i++) {
        await funcSvakoSaSvakim(allTeams[i], i);
    }

    const sortiranje = (niz) => {
        if (niz.length > 3) {
            niz.sort((a, b) => {
                if (a.bodovi > b.bodovi) {
                    return -1;
                }
                else if (a.bodovi < b.bodovi) {
                    return 1;
                }
                else if (a.kosevaPo > b.kosevaPo) {
                    return -1;
                }
                else if (a.kosevaPo < b.kosevaPo) {
                    return 1;
                }
                else if (a.kosRazlika > b.kosRazlika) {
                    return -1;
                }
                else if (a.kosRazlika < b.kosRazlika) {
                    return 1;
                }
                return 0;
            })
            return niz
        } else {
            niz.sort((a, b) => {
                if (a.bodovi > b.bodovi) {
                    return -1;
                }
                else if (a.bodovi < b.bodovi) {
                    return 1;
                }
                else if (a.kosRazlika > b.kosRazlika) {
                    return -1;
                }
                else if (a.kosRazlika < b.kosRazlika) {
                    return 1;
                }
                else if (a.kosevaPo > b.kosevaPo) {
                    return -1;
                }
                else if (a.kosevaPo < b.kosevaPo) {
                    return 1;
                }
                return 0;
            })
        }
    }

    sortiranje(tabelaGrupneFaze[0])
    sortiranje(tabelaGrupneFaze[1])
    sortiranje(tabelaGrupneFaze[2])

    console.log(`Konacan plasman po grupama:`);
    console.log(`Grupa A:`);
    console.log(tabelaGrupneFaze[0].map((x, i) => `${i + 1}. ${x.Team} / ${x.pobeda} / ${x.poraz} / ${x.bodovi} / ${x.kosevaPo} / ${x.kosevaPr} / ${x.kosRazlika}`));
    console.log(`Grupa B:`);
    console.log(tabelaGrupneFaze[1].map((x, i) => `${i + 1}. ${x.Team} / ${x.pobeda} / ${x.poraz} / ${x.bodovi} / ${x.kosevaPo} / ${x.kosevaPr} / ${x.kosRazlika}`));
    console.log(`Grupa C:`);
    console.log(tabelaGrupneFaze[2].map((x, i) => `${i + 1}. ${x.Team} / ${x.pobeda} / ${x.poraz} / ${x.bodovi} / ${x.kosevaPo} / ${x.kosevaPr} / ${x.kosRazlika}`));

    const sortiranjeZaZreb = async (niz) => {

        let sortiraniNizA = niz[0].slice(0, 1).concat(niz[1].slice(0, 1)).concat(niz[2].slice(0, 1))
        let sortiraniNizB = niz[0].slice(1, 2).concat(niz[1].slice(1, 2)).concat(niz[2].slice(1, 2))
        let sortiraniNizC = niz[0].slice(2, 3).concat(niz[1].slice(2, 3)).concat(niz[2].slice(2, 3))


        sortiranje(sortiraniNizA)
        sortiranje(sortiraniNizB)
        sortiranje(sortiraniNizC)
        let dodavanjeBodovaZaZreb = (...niz) => {
            let tabelaSaBodovima = niz
            niz.map((x, i) => {
                x.rang = i + 1
            })
            tabelaSaBodovima.pop()
            zreb[0].push(tabelaSaBodovima[0], tabelaSaBodovima[1])
            zreb[1].push(tabelaSaBodovima[2], tabelaSaBodovima[3])
            zreb[2].push(tabelaSaBodovima[4], tabelaSaBodovima[5])
            zreb[3].push(tabelaSaBodovima[6], tabelaSaBodovima[7])

            return console.log(tabelaSaBodovima);
        }
        dodavanjeBodovaZaZreb(...sortiraniNizA, ...sortiraniNizB, ...sortiraniNizC)

        return zreb
    }

    sortiranjeZaZreb(tabelaGrupneFaze)

    console.log('Šeširi: \n Šešir D: ')
    console.log(`${zreb[0].map(x => console.log(`${x.Team}`))}`);
    console.log('Šešir E: ')
    console.log(`${zreb[1].map(x => console.log(`${x.Team}`))}`);
    console.log('Šešir F: ')
    console.log(`${zreb[2].map(x => console.log(`${x.Team}`))}`);
    console.log('Šešir G: ')
    console.log(`${zreb[3].map(x => console.log(`${x.Team}`))}`);
}

play();

const funcPlayZreb = async (niz) => {
    const randomize = (length) => Math.floor(Math.random() * length);
    let zreb = niz
    const srebro = []
    const zaBronzu = []
    const timIspada = (niz, teamZaBrisanje) => {
        niz.forEach((element, i) => {
            Array.isArray(element)
                ? timIspada(element, teamZaBrisanje)
                : element.Team === teamZaBrisanje.Team
                    ? niz.splice(i, 1)
                    : null
        })
    }

    const playMatch = (team1, team2, ...vari) => {
        let medalja = vari[1]
        let i = vari[0]

        if (team1.FIBARanking > team2.FIBARanking) {
            var boljiTim = team2;
            var losijiTim = team1;
        } else {
            var boljiTim = team1;
            var losijiTim = team2;
        }

        const k = 0.2;
        const e = Math.E;
        let RazlikaFibaP = boljiTim.FIBARanking - losijiTim.FIBARanking;
        let verovatnocaBoljegTima = 1 / (1 + Math.pow(e, k * RazlikaFibaP)) * 100
        let random = Math.random() * 100;

        let brojKosevaPobednickeEkipe = (Math.floor(Math.random() * 31) + 80);
        let brojKosevaGubitnickeEkipe = (Math.floor(Math.random() * 31) + 50);
        if (brojKosevaGubitnickeEkipe === brojKosevaPobednickeEkipe) {
            brojKosevaGubitnickeEkipe += 1;
        }

        random < verovatnocaBoljegTima
            ?
            (
                timIspada(zreb, losijiTim),
                medalja === "bronza" ? zaBronzu.push(losijiTim) : medalja === "srebro" ? srebro.push(losijiTim) : medalja === "ZaBronza" ? zaBronzu.push(boljiTim) : null,
                console.log(`\t ${boljiTim.Team} - ${losijiTim.Team} (${brojKosevaPobednickeEkipe}:${brojKosevaGubitnickeEkipe})`)
            )
            :
            (
                timIspada(zreb, boljiTim),
                medalja === "bronza" ? zaBronzu.push(boljiTim) : medalja === "srebro" ? srebro.push(boljiTim) : medalja === "ZaBronza" ? zaBronzu.push(losijiTim) : null,
                console.log(`\t ${losijiTim.Team} - ${boljiTim.Team} (${brojKosevaPobednickeEkipe}:${brojKosevaGubitnickeEkipe})`)
            )
    }



    const cetvrtFinale = (zreb) => {


        const pomesajTimove = (niz) => {

            let kopijaNiza = JSON.parse(JSON.stringify(niz))

            let prvaUtakmica = [kopijaNiza[0].shift(), kopijaNiza[3].splice(randomize(kopijaNiza[3].length), 1)[0]]
            playMatch(prvaUtakmica[0], prvaUtakmica[1], 0)

            let drugaUtakmica = [kopijaNiza[0].shift(), kopijaNiza[3].shift()]
            playMatch(drugaUtakmica[0], drugaUtakmica[1], 1)

            let trecaUtakmica = [kopijaNiza[1].shift(), kopijaNiza[2].splice(randomize(kopijaNiza[2].length), 1)[0]]
            playMatch(trecaUtakmica[0], trecaUtakmica[1], 2)

            let cetvrtaUtakmica = [kopijaNiza[1].shift(), kopijaNiza[2].shift()]
            playMatch(cetvrtaUtakmica[0], cetvrtaUtakmica[1], 3)

        }
        pomesajTimove(zreb)
    }
    console.log("\n Cetvrtfinale: ");
    cetvrtFinale(zreb);


    console.log("\n Polufinale: ")
    const poluFinale = (niz) => {
        let noviNiz = JSON.parse(JSON.stringify(niz))
        noviNiz = noviNiz.filter(x => x.length > 0).flat();

        playMatch(noviNiz[0], noviNiz[1], 0, "bronza")
        playMatch(noviNiz[2], noviNiz[3], 1, "bronza")


    }
    poluFinale(zreb)

    console.log("\n Finale: ")
    const finale = (niz) => {
        let noviNiz = JSON.parse(JSON.stringify(niz)).flat();
        
        playMatch(noviNiz[0], noviNiz[1], 0, "srebro")
    }
    finale(zreb)

    console.log('Za Bronzu: ');
    const fZaBronzu = (niz) => {
        let noviNiz = JSON.parse(JSON.stringify(niz))
        playMatch(noviNiz[0], noviNiz[1], 1, "ZaBronza")
    }
    fZaBronzu(zaBronzu)

    console.log(`\n Medalje: \n Zlato: ${zreb.filter(x => x.length > 0)[0][0].Team} \n Srebro: ${srebro[0].Team} \n Bronza: ${zaBronzu[0].Team}`);
}

setTimeout(() => {
    funcPlayZreb(zreb);
}, 500);









