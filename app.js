async function getRandomUser() {

    try {
        const result = await fetch('https://randomuser.me/api/');
        const data = await result.json();
        const user = data.results[0];
           document.getElementById('random-name').innerText = user.name.first + user.name.last;
           document.getElementById('random-email').innerText = user.email;
    }
    catch(error) {
           console.error('Hiba történt :', error);
    }
   }