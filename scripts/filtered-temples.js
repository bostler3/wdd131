const today = new Date();
currentyear.innerHTML = today.getFullYear();
currentdatetime.innerHTML = document.lastModified;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },

    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },

    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },

    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },

    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },

    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Newport Beach California",
        location: "Newport Beach, California, United States",
        dedicated: "2005, August, 28",
        area: 17800,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/newport-beach-california/400x250/newport-beach-temple-lds-758832-wallpaper.jpg"
    },

    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
    },

    {
        templeName: "Bountiful Utah",
        location: "Bountiful, Utah, United States",
        dedicated: "1995, January, 8",
        area: 104000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-lds-1059079-wallpaper.jpg"
    }
];

// Got help from a Bing search for "show number with thousands decimal javascript" for putting the comma in the area number (the .toLocaleString() method)
function cardTemplate(card) {
    return `<div class="card"><h3 class="cardHeader">${card.templeName}</h3>
        <div class="cardInfo"><p><div class="label">LOCATION:</div>   ${card.location}</p></div>
        <div class="cardInfo"><p><div class="label">DEDICATION:</div>   ${card.dedicated}</p></div>
        <div class="cardInfo"><p class="cardInfo"><div class="label">AREA:</div>   ${card.area.toLocaleString()} square feet</p></div>
        <picture>
            <source srcset="${card.imageUrl}" media="(min-width: 500px)">
            <img class="cardImage" src="${card.imageUrl}" alt="Picture of ${card.templeName} temple" loading="lazy" width="400" height="250">
        </picture></div>`;
}

function renderCards(cards) {
    const html = cards.map(cardTemplate);
    document.querySelector(".container").innerHTML = html.join("");
}

const pageLabel = document.querySelector("#pageLabel");
pageLabel.innerHTML = "Home";

renderCards(temples);

const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
    pageLabel.innerHTML = "Home";
    renderCards(temples);
});

const oldTemplesLink = document.querySelector("#old");
oldTemplesLink.addEventListener("click", () => {
    pageLabel.innerHTML = "Old";
    let oldTemples = temples.filter(temple => (Number(temple.dedicated.slice(0, 4)) < 1900)); // Got help from W3 Schools' "JavaScript String slice()" article for how to grab the year from the "Dedicated" string in the dataset
    renderCards(oldTemples);
});

const newTemplesLink = document.querySelector("#new");
newTemplesLink.addEventListener("click", () => {
    pageLabel.innerHTML = "New";
    let newTemples = temples.filter(temple => (Number(temple.dedicated.slice(0, 4)) > 2000));
    renderCards(newTemples);
});

const largeTemplesLink = document.querySelector("#large");
largeTemplesLink.addEventListener("click", () => {
    pageLabel.innerHTML = "Large";
    let largeTemples = temples.filter(temple => (temple.area > 90000));
    renderCards(largeTemples);
});

const smallTemplesLink = document.querySelector("#small");
smallTemplesLink.addEventListener("click", () => {
    pageLabel.innerHTML = "Small";
    let smallTemples = temples.filter(temple => (temple.area < 10000));
    renderCards(smallTemples);
});