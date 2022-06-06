/* 
- CALCOLARE LA TARIFFA BASE
- CALCOLARE IL PREZZO CON LO SCONTO 
- GENERARE UN BIGLIETTO DEL TRENO CON LE SEGUENTO INFO:
0. Rendere visibile il biglietto
1. Nomme Passeggero
2. Offerta a sua disposizione
3. Numero carrozza radom
4. Codice Cp random
5. Costo finale del biglietto
*/


// Generare biglietto
const submitButton = document.getElementById('button_submit');
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
            discountPrice = standardPrice - (standardPrice * 40 / 100);
        } else {
            discountPrice = standardPrice;
        }
        
        // Descizione della tariffa
        if(userAge === 'minorenne') {
            document.getElementById('ticket-offer').innerHTML = 'Biglietto Under 18';
        } else if(userAge === 'over65') {
            document.getElementById('ticket-offer').innerHTML = 'Biglietto Over 65';
        } else {
            document.getElementById('ticket-offer').innerHTML = 'Biglietto Standard';
        }
        
        // Trasformo numeri decimali
        const finalPrice = discountPrice.toFixed(2);

        //Rendere visibile il biglietto
        document.querySelector('.ticket').classList.add('active');

        // Inserimento dei dati forniti nel biglietto
        document.getElementById('ticket-name').innerHTML = userName;
        document.getElementById('ticket-carriage').innerHTML = Math.floor(Math.random() * 9) + 1;
        document.getElementById('ticket-code').innerHTML = Math.floor(Math.random() * 9999) + 1000;
        document.getElementById('ticket-price').innerHTML = finalPrice  + '€';
    }
)

// Annulla biglietto
const cancelButton = document.getElementById('button_cancel');
cancelButton.addEventListener( 'click',
    function() {
        // Cancellazione lettura dei dati inseriti
        const userName = document.getElementById('user-name').value = '';
        const userKm = document.getElementById('user-km').value = '';
        const userAge = document.getElementById('user-age').value = '';

        // Rendere di nuovo invisibile il biglietto
        document.querySelector('.ticket').classList.remove('active');
    }
)