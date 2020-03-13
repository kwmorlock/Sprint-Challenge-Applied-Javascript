// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicmeow =document.querySelector('.topics')
//.topics found on line 6

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
  console.log(response.data);
  response.data.topics.forEach(thing => {
topicmeow.appendChild(Meowmeow (thing));
 })
})
  .catch(error => {
  console.log("Meow meow meow meow meow", error)
})

function Meowmeow(meowdy){
    const meowy = document.createElement('div');
    meowy.classList.add('tab');
    //tab found on line 9 (div class)
    meowy.textContent = meowdy
    return meowy
}