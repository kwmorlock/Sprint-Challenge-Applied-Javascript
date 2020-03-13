// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createComponent(obj){
    const carddivone = document.createElement('div');
    const carddivtwo = document.createElement('div');
    const carddivthree = document.createElement('div');
    const carddivfour = document.createElement('div');
    const cardimg = document.createElement('img');
    const cardspan = document.createElement('span');

    const cards = document.querySelector('.cards-container')
     cards.appendChild(carddivone);
     carddivone.appendChild(carddivtwo);
     carddivone.appendChild(carddivthree);
     carddivthree.appendChild(carddivfour);
     carddivthree.appendChild(cardspan);
     //author name goes in div for author etc
     carddivfour.appendChild(cardimg);
     //img goes in image container

     carddivone.classList.add('card');
     carddivtwo.classList.add('headline');
     carddivthree.classList.add('author');
     carddivfour.classList.add('img-container');
    

     carddivtwo.textContent = obj.headline;
     cardspan.textContent = obj.authorName;
     cardimg.src = obj.authorPhoto;


    return carddivone;
}

//use loop and .forEach?

// const cards =document.querySelector('.cards-container')

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(response => {
  console.log(response.data);


const meow = Object.keys(response.data.articles)
for (let i = 0; i < meow.length; i++) {
    const wow = meow[i];
    response.data.articles[`${wow}`].forEach(event => {
        createComponent(event)
        console.log(event, "ughhhhhhh")
    });
}
   console.log(meow)

// axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
//   .then(response => {
//   console.log(response.data);

 })
  .catch(error => {
  console.log("the data was not returned", error)
})
