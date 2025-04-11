/*--------All - Navigation--------*/

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const filterList = document.querySelector('.filter-options');
const filterButton = document.querySelector('#filter-menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});

filterButton?.addEventListener('click', () => { //Got the idea for the '?' from a Bing search for "Uncaught TypeError: Cannot read properties of null addeventlistener"
    filterList.classList.toggle('open');
    filterButton.classList.toggle('open');
});

/*--------All - Footer--------*/

const today = new Date();
currentyear.textContent = today.getFullYear();
currentdatetime.textContent = document.lastModified;

/*------------All------------*/

const characters = [
    {
        characterName: "Harry Potter",
        house: "Gryffindor",
        gender: "male",
        age: "youth",
        imageUrl: "images/harry.webp"
    },
    {
        characterName: "Hermione Granger",
        house: "Gryffindor",
        gender: "female",
        age: "youth",
        imageUrl: "images/hermione.webp"
    },
    {
        characterName: "Ron Weasley",
        house: "Gryffindor",
        gender: "male",
        age: "youth",
        imageUrl: "images/ron.webp"
    },
    {
        characterName: "Ginny Weasley",
        house: "Gryffindor",
        gender: "female",
        age: "youth",
        imageUrl: "images/ginny.webp"
    },
    {
        characterName: "Draco Malfoy",
        house: "Slytherin",
        gender: "male",
        age: "youth",
        imageUrl: "images/draco.webp"
    },
    {
        characterName: "Luna Lovegood",
        house: "Ravenclaw",
        gender: "female",
        age: "youth",
        imageUrl: "images/luna.webp"
    },
    {
        characterName: "Cedric Diggory",
        house: "Hufflepuff",
        gender: "male",
        age: "youth",
        imageUrl: "images/cedric.webp"
    },
    {
        characterName: "Neville Longbottom",
        house: "Gryffindor",
        gender: "male",
        age: "youth",
        imageUrl: "images/neville.webp"
    },
    {
        characterName: "Cho Chang",
        house: "Ravenclaw",
        gender: "female",
        age: "youth",
        imageUrl: "images/cho.webp"
    },
    {
        characterName: "Albus Dumbledore",
        house: "Gryffindor",
        gender: "male",
        age: "adult",
        imageUrl: "images/dumbledore.webp"
    },
    {
        characterName: "Minerva McGonagall",
        house: "Gryffindor",
        gender: "female",
        age: "adult",
        imageUrl: "images/mcgonagall.webp"
    },
    {
        characterName: "Severus Snape",
        house: "Slytherin",
        gender: "male",
        age: "adult",
        imageUrl: "images/snape.webp"
    },
    {
        characterName: "Rubeus Hagrid",
        house: "Gryffindor",
        gender: "male",
        age: "adult",
        imageUrl: "images/hagrid.webp"
    },
    {
        characterName: "Sirius Black",
        house: "Gryffindor",
        gender: "male",
        age: "adult",
        imageUrl: "images/sirius.webp"
    },
    {
        characterName: "Remus Lupin",
        house: "Gryffindor",
        gender: "male",
        age: "adult",
        imageUrl: "images/lupin.webp"
    },
    {
        characterName: "Voldemort (aka Tom Riddle)",
        house: "Slytherin",
        gender: "male",
        age: "adult",
        imageUrl: "images/voldemort.webp"
    },
    {
        characterName: "Bellatrix Lestrange",
        house: "Slytherin",
        gender: "female",
        age: "adult",
        imageUrl: "images/bellatrix.webp"
    },
    {
        characterName: "Peter Pettigrew",
        house: "Gryffindor",
        gender: "male",
        age: "adult",
        imageUrl: "images/pettigrew.webp"
    }
];

/*------------Index------------*/

function cardTemplate(card) {
    return `<div class="card">
        <picture><source srcset="${card.imageUrl}" media="(min-width: 500px)"><img class="cardImage" src="${card.imageUrl}" alt="Picture of ${card.characterName} character" loading="lazy"></picture>
        <h3 class="cardHeader">${card.characterName}</h3>
        <div class="cardInfo"><p><span class="label">House:</span>   ${card.house}</p></div>
        </div>`;
}

function renderCards(cards) {
    const html = cards.map(cardTemplate);
    if (document.querySelector(".container")) {
        document.querySelector(".container").innerHTML = html.join("");
    }
}

if (document.querySelector("#pageLabel")) {
    const pageLabel = document.querySelector("#pageLabel");
    pageLabel.textContent = "All";
}

renderCards(characters);

if (document.querySelector("#all")) {
    const homeLink = document.querySelector("#all");
    homeLink.addEventListener("click", () => {
        event.preventDefault(); // Got this from a Bing search for "why does page move to the top when javascript runs?"
        pageLabel.textContent = "All";
        renderCards(characters);
    });
}

if (document.querySelector("#males")) {
    const maleCharactersLink = document.querySelector("#males");
    maleCharactersLink.addEventListener("click", () => {
        event.preventDefault();
        pageLabel.textContent = "Males";
        let maleCharacters = characters.filter(character => character.gender == "male");
        renderCards(maleCharacters);
    });
}

if (document.querySelector("#females")) {
    const femaleCharactersLink = document.querySelector("#females");
    femaleCharactersLink.addEventListener("click", () => {
        event.preventDefault();
        pageLabel.textContent = "Females";
        let femaleCharacters = characters.filter(character => character.gender == "female");
        renderCards(femaleCharacters);
    });
}

if (document.querySelector("#adults")) {
    const adultCharactersLink = document.querySelector("#adults");
    adultCharactersLink.addEventListener("click", () => {
        event.preventDefault();
        pageLabel.textContent = "Adults";
        let adultCharacters = characters.filter(character => character.age == "adult");
        renderCards(adultCharacters);
    });
}

if (document.querySelector("#youth")) {
    const youthCharactersLink = document.querySelector("#youth");
    youthCharactersLink.addEventListener("click", () => {
        event.preventDefault();
        pageLabel.textContent = "Youth";
        let youthCharacters = characters.filter(character => character.age == "youth");
        renderCards(youthCharacters);
    });
}

if (document.querySelector("#gryffindor")) {
    const gryffindorCharactersLink = document.querySelector("#gryffindor");
    gryffindorCharactersLink.addEventListener("click", () => {
        event.preventDefault();
        pageLabel.textContent = "Gryffindor";
        let gryffindorCharacters = characters.filter(character => character.house == "Gryffindor");
        renderCards(gryffindorCharacters);
    });
}

if (document.querySelector("#ravenclaw")) {
    const ravenclawCharactersLink = document.querySelector("#ravenclaw");
    ravenclawCharactersLink.addEventListener("click", () => {
        event.preventDefault();
        pageLabel.textContent = "Ravenclaw";
        let ravenclawCharacters = characters.filter(character => character.house == "Ravenclaw");
        renderCards(ravenclawCharacters);
    });
}

if (document.querySelector("#hufflepuff")) {
    const hufflepuffCharactersLink = document.querySelector("#hufflepuff");
    hufflepuffCharactersLink.addEventListener("click", () => {
        event.preventDefault();
        pageLabel.textContent = "Hufflepuff";
        let hufflepuffCharacters = characters.filter(character => character.house == "Hufflepuff");
        renderCards(hufflepuffCharacters);
    });
}

if (document.querySelector("#slytherin")) {
    const slytherinCharactersLink = document.querySelector("#slytherin");
    slytherinCharactersLink.addEventListener("click", () => {
        event.preventDefault();
        pageLabel.textContent = "Slytherin";
        let slytherinCharacters = characters.filter(character => character.house == "Slytherin");
        renderCards(slytherinCharacters);
    });
}

/*------------Sorting Hat------------*/

function calculateHouse() {
    const form = document.querySelector('.sorting-hat-form'); // Got help on this line and the next two from a Bing search for "get the values of all checked radio in a form javascript"
    const checkedRadios = form.querySelectorAll('input[type="radio"]:checked');
    const values = Array.from(checkedRadios).map(radio => radio.value);
    numGryffindor = values.filter(item => item == "gryffindor").length; //Got help from here:  https://www.geeksforgeeks.org/count-frequency-of-an-array-item-in-javascript/
    numSlytherin = values.filter(item => item == "slytherin").length;
    numRavenclaw = values.filter(item => item == "ravenclaw").length;
    numHufflepuff = values.filter(item => item == "hufflepuff").length;
    let results = [];
    results.push({ Gryffindor: numGryffindor });
    results.push({ Slytherin: numSlytherin });
    results.push({ Ravenclaw: numRavenclaw });
    results.push({ Hufflepuff: numHufflepuff });
    const findMaxKey = (arr) => { // Got help on this function from a Bing search for "find the key with the maximum value array of objects javascript"
        return arr.reduce((maxObj, currentObj) => {
            const currentMaxKey = Object.keys(currentObj).reduce((a, b) => currentObj[a] > currentObj[b] ? a : b);
            return currentObj[currentMaxKey] > maxObj.value ? { key: currentMaxKey, value: currentObj[currentMaxKey] } : maxObj;
        }, { key: null, value: -Infinity });
    };
    result = findMaxKey(results);
    resultKey = result.key;
    let resultKeyForLs = window.localStorage.getItem("resultKeyForLs-ls");
    resultKeyForLs = resultKey;
    localStorage.setItem("resultKeyForLs-ls", resultKeyForLs);
    return resultKey;
}

function showHouse(event) {
    event.preventDefault();
    let inputValue = document.querySelector('#full-name').value;
    alert(`Ahhh, ${inputValue}!  Yes, I've got it!  You're in ${calculateHouse()}!`);
    document.querySelector('.sorting-hat-form').reset();
}

/*------------Owl Post------------*/

const selectElement = document.querySelector('#toCharacters');

characters.forEach(character => {
    const optionElement = document.createElement('option');
    optionElement.value = character.characterName;
    optionElement.textContent = character.characterName;
    selectElement.appendChild(optionElement);
});

// Got help from a Bing search for "reference selected value from html select later in html"
function updateSelectedCharacter() {
    const root = document.documentElement;
    const selectedCharacterValue = selectElement.options[selectElement.selectedIndex].value;
    const getCharacter = characters.find(character => character.characterName == selectedCharacterValue); // Got help from here:  https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
    const selectedCharacterHouse = getCharacter.house;
    document.querySelector('#selected-character').textContent = selectedCharacterValue;
    document.querySelector('#selected-character2').textContent = ` for ${selectedCharacterValue}`;
    switch (selectedCharacterHouse) { // Got help from a Bing search for "javascript switch statement"
        case 'Gryffindor':
            document.querySelector('#fav-moment').style.color = getComputedStyle(root).getPropertyValue('--gryffindor-text-color').trim();
            document.querySelector('#letter').style.color = getComputedStyle(root).getPropertyValue('--gryffindor-text-color').trim();
            break;
        case 'Slytherin':
            document.querySelector('#fav-moment').style.color = getComputedStyle(root).getPropertyValue('--slytherin-text-color').trim();
            document.querySelector('#letter').style.color = getComputedStyle(root).getPropertyValue('--slytherin-text-color').trim();
            break;
        case 'Ravenclaw':
            document.querySelector('#fav-moment').style.color = getComputedStyle(root).getPropertyValue('--ravenclaw-text-color').trim();
            document.querySelector('#letter').style.color = getComputedStyle(root).getPropertyValue('--ravenclaw-text-color').trim();
            break;
        case 'Hufflepuff':
            document.querySelector('#fav-moment').style.color = getComputedStyle(root).getPropertyValue('--hufflepuff-text-color').trim();
            document.querySelector('#letter').style.color = getComputedStyle(root).getPropertyValue('--hufflepuff-text-color').trim();
            break;
        default:
            document.querySelector('#fav-moment').style.color = 'black';
    }
    return selectedCharacterValue;
}

const houseLsElement = document.querySelector('#hogwarts-house');
let text = window.localStorage.getItem("resultKeyForLs-ls");
if (text !== null) {
    houseLsElement.innerHTML = `(Hint:  Based on your <a href="sorting-hat.html">Sorting Hat</a> activity results, you're in ${text} House!)`;
}
else {
    houseLsElement.innerHTML = `(Hint:  Go to the <a href="sorting-hat.html">Sorting Hat</a> activity to find out what house you're in!)`;
}

// Got help from a Bing search for "create acknowledge dialog box in javascript onsubmit"
function showAck(event) {
    event.preventDefault();
    alert(`Well done!  An owl is now delivering your letter to ${updateSelectedCharacter()}!`);
    document.querySelector('.form').reset(); //Got help from a Bing search for "javascript reset form after submit"
}