const btn = document.querySelector('.btn')
const text = document.querySelector('.dad-joke-text')

btn.addEventListener("click", joke);
    


async function joke(){
    // Input headers using the API
    const response = await fetch('https://icanhazdadjoke.com',{
        headers: {
            Accept: 'application/json',
            'User-Agent': 'learning app',
        },
    });
    // Turn response to json format
    const data = await response.json();
    let jokeText = data['joke']
    console.log(jokeText)
    text.innerHTML = jokeText;
}


