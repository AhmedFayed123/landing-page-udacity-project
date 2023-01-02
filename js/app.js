/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const secs=Array.from(document.querySelectorAll("section"));
const navlist=document.getElementById("navbar__list");
let container=document.querySelector('html');
/**
 * End Global Variables
 * Start Functions
 * 
*/
function build_nav(){
    //loop
    for(section of secs){
        sname=section.getAttribute('data-nav');
        sid=section.getAttribute('id');
        //create an item for each one
        listItem=document.createElement('li');
        //append all ellements to the listItem
        listItem.innerHTML=`<a class='menu__link' href='#${sid}'>${sname}</a>`;
        //add listItem to the navlist
           navlist.appendChild(listItem);
    }}

  
const setoff = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove active 
const rem_active = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(200,200,250,.2) 0%, rgba(250,200,250,.2) 100%)";
};
// adding active
const add_active = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: gray;";
    };
};

//implementating the actual function

const sec_activation = () => {
    secs.forEach(section => {
        const elemsetoff = setoff(section);

        inviewport = () => elemsetoff < 150 && elemsetoff >= -150;

        rem_active(section);
        add_active(inviewport(),section);
    });
};

window.addEventListener('scroll' ,sec_activation);

/**
 * End  Functions
 * 
*/

// build navbar and scroll
build_nav();
container.style.scrollBehavior='smooth';

// Set sections as active