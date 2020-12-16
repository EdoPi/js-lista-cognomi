var output = document.getElementById('lista-cognomi');

var lastNameList = ['Dean', 'Cruise', 'Theron', 'Johanson', 'Connery'];
console.log('i congnomi iscritti sono: ' + lastNameList);

var userLastName = prompt ('Caro utente per proseguire avrei bisogno del tuo Cognome');
console.log('il cognome dell\'utente è ' + userLastName);

lastNameList.push(userLastName);
console.log('la nuova lista aggiornata è ' + lastNameList);

lastNameList.sort();
console.log('adesso la lista è ordinata e si presenta così: ' + lastNameList);



for (var i = 0; i < lastNameList.length; i++) {
  output.innerHTML += '<li>' + lastNameList[i] + '</li>'; 
}
