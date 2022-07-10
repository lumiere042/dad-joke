const btn = document.querySelector('.btn')

btn.addEventListener('click', getJoke())

async function getJoke(){
    const res = await fetch('https://icanhazdadjoke.com');
    const data = await res.json()

    console.log(data);
}