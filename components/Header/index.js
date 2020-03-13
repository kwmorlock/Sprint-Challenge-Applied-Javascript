// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

const meowheader = document.createElement('div')
const meowdate = document.createElement('span')
const meowhone = document.createElement('h1')
const meowtemp = document.createElement('span')

meowheader.appendChild(meowdate);
meowheader.appendChild(meowhone);
meowheader.appendChild(meowtemp);

meowheader.classList.add('header');
meowheader.classList.add('date');
meowheader.classList.add('temp');

meowdate.textContent = 'Smarch 28, 2019';
meowhone.textContent = 'Lambda Times';
meowtemp.textContent = '98°';

return meowheader;

}

const meowthing = document.querySelector('.header-container');
meowthing.prepend(Header());