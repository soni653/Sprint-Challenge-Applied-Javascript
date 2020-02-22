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
    const newHeader = document.createElement('div');
    const dateSpan = document.createElement('span');
    const title = document.createElement('h1');
    const temperature = document.createElement('span');

    dateSpan.textContent = "SMARCH 28, 2019";
    title.textContent = "Lambda Times";
    temperature.textContent = "98°";

    newHeader.classList.add('header');
    dateSpan.classList.add('date');
    title.classList.add('h1');
    temperature.classList.add('temp');

    newHeader.appendChild(dateSpan);
    newHeader.appendChild(title);
    newHeader.appendChild(temperature);

    return newHeader;

}

const mainHead = document.querySelector('.header-container');
let newHead = Header();

mainHead.appendChild(newHead);