const today = new Date();
currentyear.innerHTML = today.getFullYear();
currentdatetime.innerHTML = document.lastModified;

const visitsElement = document.querySelector('#reviews');

let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

numReviews++;

if (numReviews !== 1) {
    visitsElement.textContent = `You have submitted ${numReviews} reviews!`;
}

else {
    visitsElement.textContent = "This is your first review!";
}

localStorage.setItem("numReviews-ls", numReviews);