//Assign the div that holds all the person elements
var peopleHolder = document.getElementById("people-holder");

//Assign the input box that the user will use to search
var searchData = document.getElementById("search-data");

//The array of people objects
var peopleArray = [
  {
    title: "Superhero",
    name: "Kal-El",
    bio: "Superman is a fictional superhero appearing in American comic books published by DC Comics. He was created by writer Jerry Siegel and artist Joe Shuster and first appeared in Action Comics #1 (cover-dated June 1938) and subsequently appeared in various radio serials, newspaper strips, television programs, films, and video games.",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/SupermanRoss.png/250px-SupermanRoss.png",
    lifespan: {
      birth: 1938,
      death: "NA"
    }
  },
  {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
  },
  {
    title: "President",
    name: "Abraham Lincoln",
    bio: "Abraham Lincoln was the 16th President of the United States, serving from March 1861 until his assassination in April 1865. Lincoln led the United States through its Civil War—its bloodiest war and its greatest moral, constitutional, and political crisis.[1][2] In doing so, he preserved the Union, abolished slavery, strengthened the federal government, and modernized the economy.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Abraham_Lincoln_November_1863.jpg/220px-Abraham_Lincoln_November_1863.jpg",
    lifespan: {
      birth: 1809,
      death: 1865
    }
  },
  {
    title: "Singer/Songwriter",
    name: "Mick Jagger",
    bio: "Sir Michael Philip Jagger is an English singer, songwriter and actor, best known as the lead vocalist and a co-founder of The Rolling Stones.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Mick_Jagger_Deauville_2014.jpg/220px-Mick_Jagger_Deauville_2014.jpg",
    lifespan: {
      birth: 1943,
      death: "NA"
    }
  }
];

//This function add all the person text/img from the person array objects to the elements 
//  created in the DOM.
function addPersonInfo(currentPersonInfo, currentPersonDiv) {

//Assign all the textual data to variables
  var personTitleName = "<h2>" + currentPersonInfo.title + ": " + currentPersonInfo.name + "</h2>";
  var personLifeDeath = "<h4>Alive from: " + currentPersonInfo.lifespan.birth + " through " + currentPersonInfo.lifespan.death + "</h4>";
  var personBio = currentPersonInfo.bio;
  var personImg = currentPersonInfo.image;
  var personImgAlt = currentPersonInfo.name;

//Adds the title/name to the header of the person element
  currentPersonDiv.firstChild.innerHTML += (personTitleName);

//Adds the bio text and image pic to the section of the person element
  currentPersonDiv.lastChild.previousSibling.firstChild.innerHTML = (personBio);
  currentPersonDiv.lastChild.previousSibling.lastChild.setAttribute("src", personImg);
  currentPersonDiv.lastChild.previousSibling.lastChild.setAttribute("alt", personImgAlt);

//Adds the lifespan to the footer of the person element
  currentPersonDiv.lastChild.innerHTML = personLifeDeath;
}

//This function builds the person element that holds the header, section and footer 
// data elements.
function createPersonDiv(currentPerson, currentCount) {

//Create the Individual Person Container and give it a class of yellow or blue depending on its number in the array
  var personHolder = document.createElement("person");
  personHolder.classList.add("person-person");
  if (currentCount % 2 === 0) {
    personHolder.classList.add("light-yellow");
  } else {
    personHolder.classList.add("light-blue");
  };
  peopleHolder.appendChild(personHolder);
  personHolder.addEventListener("click", selectPerson);

//Creates the header element which holds the title and name of the person 
  var personHeader = document.createElement("header");
  personHeader.classList.add("person-header")
  personHolder.appendChild(personHeader);
  
//Creates the section element which holds the person's bio and img
  var personSection = document.createElement("section");
  personSection.classList.add("person-section")
  personHolder.appendChild(personSection);

//Creates the p for the bio and adds it to the person Section
  var personPTag = document.createElement("p");
  personPTag.classList.add("person-bio");
  personHolder.lastChild.appendChild(personPTag);

//Creates the img for the image and adds it to the person Section
  var personImgTag = document.createElement("img");
  personImgTag.classList.add("person-img");
  personHolder.lastChild.appendChild(personImgTag);

//Creates the footer element which holds the person's lifespan
  var personFooter = document.createElement("footer");
  personFooter.classList.add("person-footer")
  personHolder.appendChild(personFooter);

//Calls the function to add the info to the elements
  addPersonInfo(currentPerson, personHolder);
}

//When clicked selects the person element and gives it a css class styled with a border
//  It's also looks to see if an element already is selected and if so removes the border
//  Lastly, it gives focus to the text/input element.
function selectPerson(personSelected) {
  personSelected.stopPropagation();
  var classPersonSelected = document.querySelector(".person-selected");

  if (classPersonSelected === null) {
  } else {
    classPersonSelected.classList.remove("person-selected");
  };

  personSelected.currentTarget.classList.add("person-selected");
  searchData.focus();
}

//Function gets the "selected" person element and takes the data entered into the text box 
//  and adds it directly to the persons bio description.
function inputBio(inputElement) {
  var classPersonSelected = document.querySelector(".person-selected");

//Checks to see if the no one is selected, if true the textbox is cleared after each keypress
  if (classPersonSelected === null) {
    searchData.value = "";
//Checks to see if the enter key is press, if true the textbok is cleared and blurred
  } else if (inputElement.keyCode === 13) {
    searchData.value = "";
    searchData.blur();
//If no errors and a person is selected, their bios are over written from the text input
  } else {
    bioElement = classPersonSelected.childNodes[1].childNodes[0];
    bioElement.textContent = searchData.value;
  };
}

//Build the page based on the number of people in the person object array
for (var i = 0; i < peopleArray.length; i++) {
  createPersonDiv(peopleArray[i], i);
}

//Check to see if someone is typing in the input textbox
searchData.addEventListener("keyup", inputBio);

