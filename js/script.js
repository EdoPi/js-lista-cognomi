var outputList = document.getElementById('lista-cognomi');
var outputPosition = document.getElementById('my-position');
var lastNameList = ['Dean', 'Cruise', 'Theron', 'Johanson', 'Connery'];
console.log('i congnomi iscritti sono: ' + lastNameList);

var userLastName = prompt ('Caro utente per proseguire avrei bisogno del tuo Cognome');
console.log('il cognome dell\'utente è ' + userLastName);

lastNameList.push(userLastName);
console.log('la nuova lista aggiornata è ' + lastNameList);

lastNameList.sort();
console.log('adesso la lista è ordinata e si presenta così: ' + lastNameList);



for (var i = 0; i < lastNameList.length; i++) {
  outputList.innerHTML += '<li>' + lastNameList[i] + '</li>';
}



outputPosition.innerText = 'La tua posizione umana è : ' + (lastNameList.indexOf(userLastName)+1);
console.log('il mio id è: ' + (lastNameList.indexOf(userLastName)+1));
