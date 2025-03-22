const words = ["HTML", "CSS", "JavaScript", "React"];
let index = 0;

function changeWord() {
    index = (index + 1) % words.length;
    document.getElementById("word-slideshow").textContent = words[index];
}

setInterval(changeWord, 2000); // Change word every 2 seconds