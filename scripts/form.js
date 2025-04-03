const today = new Date();
currentyear.innerHTML = today.getFullYear();
currentdatetime.innerHTML = document.lastModified;

const selectElement = document.querySelector('#products');

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Got help from a Bing search for "how to populate select option in javascript"
products.forEach(product => {
    const optionElement = document.createElement('option');
    optionElement.value = product.id;
    optionElement.textContent = product.name.replace(/\b\w/g, char => char.toUpperCase()); // The lower casing of the names was bothering me, so I got help from a Bing search for "capitalize first letter of each word of a string javascript".  This regex option was one of the search results.
    selectElement.appendChild(optionElement);
});