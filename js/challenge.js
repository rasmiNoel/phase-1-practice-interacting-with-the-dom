const counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');


const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('list');

let counterInterval = setInterval(incrementCounter, 1000);
let likes = {};

function incrementCounter() {
    counter.innerText = parseInt(counter.innerText) + 1;
    }

function decrementCounter() {
    counter.innerText = parseInt(counter.innerText) - 1;
    }

function likeNumber() {
    const currentNumber = counter.innerText;
    if (likes[currentNumber]) {
        likes[currentNumber] += 1;
    } else {
        likes[currentNumber] = 1;
    }
    renderLikes();
}

function renderLikes() {
    const likesList = document.querySelector('.likes');
    likesList.innerHTML = '';
    for (const key in likes) {
        const li = document.createElement('li');
        li.innerText = `${key} has been liked ${likes[key]} times`;
        likesList.appendChild(li);
    }
}

function pauseCounter() {
    if (pause.innerText === 'pause') {
        clearInterval(counterInterval);
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        pause.innerText = 'resume';
    } else {
        counterInterval = setInterval(incrementCounter, 1000);
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        pause.innerText = 'pause';
    }
}

function addComment(event) {
    event.preventDefault();
    const comment = commentInput.value;
    const p = document.createElement('p');
    p.innerText = comment;
    commentList.appendChild(p);
    commentForm.reset();
}

minus.addEventListener('click', decrementCounter);
plus.addEventListener('click', incrementCounter);
heart.addEventListener('click', likeNumber);
pause.addEventListener('click', pauseCounter);
commentForm.addEventListener('submit', addComment);
