# What You See Is What You Get

This exercise uses event bubbling to capture click events and manipulate the DOM view.

## Instructions

1. Create an array of objects that represents famous people (see structure below).
1. Create a text input in your DOM.
1. Beneath that, create a container, block element in your DOM.
1. Create a DOM element for each of the objects inside the container. Style your person elements however you like.
1. For every even numbered element, have a light yellow background.
1. For every odd numbered element, have a light blue background.
1. Each element's DOM structure should be as shown below.
1. When you click on one of the person elements, a dotted border should appear around it.
1. When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
1. When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
1. When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.


##### Person element structure

```html
<!-- person element? what??? -->
<person>
  <header>Name and title go here</header>
  <section>Bio and image go here</section>
  <footer>Lifespan info goes here</footer>
</person>
```

##### Object structure

```js
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
  lifespan: {
    birth: 1747,
    death: 1797
  }
}
```

