// DOM
// const play = document.getElementsByTagName('h1');
// console.log(play[0]);
// play[0].style.backgroundColor = 'red'
// play[0].style.color = 'white'
// setTimeout(() =>{
//  play[0].style.backgroundColor = 'red';
//  play[0].style.color = 'white';
//  play[0].style.border = '4px solid green';
//  play[0].style.borderRadius = '20px';
 

// }, 8000)


console.log("////// DOM DOM DOM ////////");
// selecting html elements from DOM
// getElementByTagName,getElementById, getElementByClassName
// using querySelectors

// getElementByTagName
const play= document.getElementsByTagName('h1')
console.log(play);
// console.log(play[0]);
// console.log(play[1]);
for  (const h1 of play){
    h1.style.backgroundcolor = 'red';
    h1.style.color = 'white';
    // h1.innerHTML ='change by javascript';
}

// getElementById
const paraId= document.getElementById('paraId')
console.log(paraId);

// change the bg color of idpara and that should happen 5secs after page load
setTimeout(()=>{
    paraId.style.backgroundColor = 'blue';
    paraId.style.color = 'white';
    
}, 5000)

// getElementByClassName
const cls = document.getElementsByClassName('para')
console.log(cls);
console.log(cls[0].innerHTML = 'this innerHTML change by me');

// using query selectors
// querySelector- selects first of type element
// querySelectorAll - selects all elements of the type

const list = document.querySelectorAll('p');
console.log(list[2].style.backgroundcolor = 'pink');
console.log(list[3].style.backgroundcolor = 'black');