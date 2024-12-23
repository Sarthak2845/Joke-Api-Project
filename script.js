const joke = document.querySelector('.joke');
const btn = document.querySelector('.btn');
const url = "https://v2.jokeapi.dev/joke/Any";
const category = document.querySelector('.category');
const emoji = document.querySelector('.emoji');

async function load() {
    const response = await fetch(url);
    const data = await response.json();
    category.innerHTML = data.category;
    if (data.flags.nsfw) {
        emoji.innerHTML = "🔞";
    } else if (data.flags.religious) {
        emoji.innerHTML = "🙏";
    } else if (data.flags.political) {
        emoji.innerHTML = "🏛️";
    } else if (data.flags.racist) {
        emoji.innerHTML = "👨🏿";
    } else if (data.flags.sexist) {
        emoji.innerHTML = "🙈";
    } else {
        emoji.innerHTML = "😂";
    }
    if (data.setup) {
        joke.innerHTML = `${data.setup}<br>${data.delivery}`;
    } else {
        joke.innerHTML = `${data.joke}`;
    }
}

btn.addEventListener('click', load);