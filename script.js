const generateMemeBtn = document.querySelector(".meme-generator-btn");
const memeTitle = document.querySelector(".meme-name");
const memeImg = document.querySelector(".meme-img");
const memeAuthor = document.querySelector(".meme-author");

function updateMeme(url, author, title) {
    memeImg.setAttribute("src", url);
    memeTitle.textContent = title;
    memeAuthor.textContent = `Meme By: ${author}`;
}

async function loadMeme() {
    try {
        const response = await fetch('https://meme-api.com/gimme');
        const data = await response.json();
        updateMeme(data.url, data.author, data.title);
    } catch (error) {
        console.log("Error loading meme.", error);
    }
}

generateMemeBtn.addEventListener("click", loadMeme);
loadMeme();

