var peopleHolder = document.getElementById("people-holder");

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

function addPersonInfo(currentPersonInfo, currentPersonDiv) {

  var personTitleName = "<h2>" + currentPersonInfo.title + ": " + currentPersonInfo.name + "</h2>";
  var personLifeDeath = "<h4>Alive from: " + currentPersonInfo.lifespan.birth + " through " + currentPersonInfo.lifespan.death + "</h4>";
  var personBio = currentPersonInfo.bio;
  var personImg = currentPersonInfo.image;
  var personImgAlt = currentPersonInfo.name;

//Adds the title/name to the header of the person element
  currentPersonDiv.firstChild.innerHTML += (personTitleName);

//Adds the bio/image to the section of the person element
  currentPersonDiv.lastChild.previousSibling.firstChild.innerHTML = (personBio);
  currentPersonDiv.lastChild.previousSibling.lastChild.setAttribute("src", personImg);
  currentPersonDiv.lastChild.previousSibling.lastChild.setAttribute("alt", personImgAlt);

//Adds the lifespan to the footer of the person element
  currentPersonDiv.lastChild.innerHTML = personLifeDeath;

}

function createPersonDiv(currentPerson, currentCount) {

//Create the Individual Person Container and give it a class of yellow or blue depending on its number in the array
  var personHolder = document.createElement("person");
  personHolder.classList.add("person-element");
  if (currentCount % 2 === 0) {
    personHolder.classList.add("light-yellow");
  } else {
    personHolder.classList.add("light-blue");
  };
  peopleHolder.appendChild(personHolder);

//Creates the header element which holds the title and name of the person 
  var personHeader = document.createElement("header");
  personHeader.classList.add("person-text")
  personHolder.appendChild(personHeader);
  
//Creates the section element which holds the person's bio and img
  var personSection = document.createElement("section");
  personSection.classList.add("person-img")
  personHolder.appendChild(personSection);

//Creates the p for the bio and img for the image and adds it to the personSection

  var personPTag = document.createElement("p");
  personPTag.classList.add("person-bio");
  personHolder.lastChild.appendChild(personPTag);

//Creates the p for the bio and img for the image and adds it to the personSection

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

for (var i = 0; i < peopleArray.length; i++) {

  createPersonDiv(peopleArray[i], i);
}