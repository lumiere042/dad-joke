const btn = document.querySelector('.btn')

btn.addEventListener('click', getJoke())

async function getJoke(){
    // Input headers using the API
    const response = await fetch('https://icanhazdadjoke.com',{
        headers: {
            Accept: 'application/json',
            'User-Agent': 'learning app',
        },
    });
    // Turn response to json format
    const data = await response.json();
    console.log(data['joke']);
}



