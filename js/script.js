function Giocata() {
    if (saldo == 0) {
        ris.innerText = "Hai esaurito la valuta di gioco!";
        return;
    }
    var valorepuntata = 0;
    if (puntata[0].checked || puntata[1].checked || puntata[2].checked) {
        for (let i = 0; i < puntata.length; i++) {
            if (puntata[i].checked && saldo >= puntata[i].value) {
                valorepuntata = parseInt(puntata[i].value, 10);
                saldo -= valorepuntata;
                mostrasaldo.innerText = saldo;
                Conta++;
                contatore.innerText = Conta;
            } else if (puntata[i].checked && saldo < puntata[i].value) {
                ris.innerHTML = "La puntata è maggiore della valuta di gioco, cambiala!";
                return;
            }
        }
    }
    else {
        ris.innerText = "Seleziona prima una puntata!";
        return;
    }

    var n1Gen = Math.floor(Math.random() * 9) + 1;
    var n2Gen = Math.floor(Math.random() * 9) + 1;
    var n3Gen = Math.floor(Math.random() * 9) + 1;

    n1.innerHTML = n1Gen;
    n2.innerHTML = n2Gen;
    n3.innerHTML = n3Gen;

    if (n1Gen == n2Gen && n1Gen == n3Gen) {
        ris.innerHTML = '<img src="img/Jackpot.gif" alt="Jackpot"></img>';
        saldo += valorepuntata * 2;
        mostrasaldo.innerText = saldo;
    } else if (n1Gen == n2Gen || n1Gen === n3Gen || n2Gen === n3Gen) {
        ris.innerHTML = "HAI VINTO!";
        saldo += valorepuntata;
        mostrasaldo.innerText = saldo;
    } else {
        ris.innerHTML = "Ritenta, sarai più fortunato";
    }
}
var puntata = document.getElementsByName("puntata");
var saldo = 100;
var Conta = 0;
var ris = document.getElementById("risultato");
var contatore = document.getElementById("contatore");
var mostrasaldo = document.getElementById("mostra_saldo");
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
var bt = document.getElementById("id_bottone");
bt.addEventListener('click', Giocata, false);
