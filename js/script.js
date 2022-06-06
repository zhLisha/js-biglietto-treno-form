/* 
- CALCOLARE LA TARIFFA BASE
- CALCOLARE IL PREZZO CON LO SCONTO 
- GENERARE UN BIGLIETTO DEL TRENO CON LE SEGUENTO INFO:
1. Nomme Passeggero
2. Offerta a sua disposizione
3. Numero carrozza radom
4. Codice Cp random
5. Costo finale del biglietto
*/


// Generare biglietto
let submitButton = document.getElementById('button_submit');
submitButton.addEventListener ( 'click',
    function() {
        // Lettura delle informazioni inserite dal cliente
        const userName = document.getElementById('user-name').value;
        const userKm = document.getElementById('user-km').value;
        const userAge = document.getElementById('user-age').value;

        // Calcolo prezzofisso
        const fixedPrice = 0.21;
        let standardPrice = userKm * fixedPrice;

        // Calcolo disconto e applicazione
        if(userAge === 'minorenne') {
            discountPrice = standardPrice - (standardPrice * 20 / 100);
        } else if(userAge === 'over65') {
            discountPrice = standardPrice - (standardPrice * 40 / 100)
        } else {
            discountPrice = standardPrice
        }
    }
)