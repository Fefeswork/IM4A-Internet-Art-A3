//production nav

const navData = [
    { title: "Home", link: "./home.html"},
    { title: "Theory", link: "./Theory/theory.html"},
    { title: "Internet Art", link: "../Internet Art/internetgame.html"},
    { title: "Design", link: "../Design/design.html"},
]


const navElement = document.getElementById("nav-Id");

let list = document.createElement("ul");

for(var i = 0; i < navData.length; i++){

    let listItemLink = document.createElement("a");
    listItemLink.innerText = navData[i].title;
    listItemLink.setAttribute("href", navData[i].link);
    
    let listItem = document.createElement("li");
    listItem.appendChild(listItemLink);
    list.appendChild(listItem);
}

navElement.appendChild(list);