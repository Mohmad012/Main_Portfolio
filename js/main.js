// Select DOM Items
const menuBtn = createQuerySelector('.menu-btn'),
      menu = createQuerySelector('.menu'),
      menuNav = createQuerySelector('.menu-nav'),
      menuBranding = createQuerySelector('.menu-branding'),
      navItems = createQuerySelector('.nav-item'),
      Body = createQuerySelector("body");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems && navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems && navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

// Select Menu button box
let menuBx = createQuerySelector(".menu-btn"),
    numBtn = new Array(3);

// Create lines for menu Button
for(let i = 0; i < numBtn.length ; i++){
  let btnLine = createDiv()
  btnLine.className = "btn-line"
  menuBx.appendChild(btnLine)
}

// Data related to pages
let dataOfPages = [
  {
    "path":"./index.html",
    "text":"Home"
  },
  {
    "path":"./about.html",
    "text":"About Me"
  },
  {
    "path":"./work.html",
    "text":"My Work"
  },
  {
    "path":"./contact.html",
    "text":"How To Reach Me"
  }
]

const handleLinks = () => {

  dataOfPages.forEach((element) => {
    // define Vars of li list and link of page
    let navItem , navLink , namePage;

    // li box
    navItem = liTag()

    // link page
    navLink = createAnchor()

    // asign class for nav link
    createAsignClass(navLink , "nav-link")

    // asign href for nav link
    createAsignHref(navLink , element.path)

    // create name each link of page
    namePage = createText(element.text)

    // append name each link of page to nav link
    createAppendChild(navLink , namePage)

    // append nav link to list of link item
    createAppendChild(navItem , navLink)

    // append list of link item to links box
    createAppendChild(menuNav , navItem)
    
  })

}

// invoke handleLinks function
handleLinks()

const handleFooter = () => {
  // define Vars of footer and content footer
  let footer , text;

  // create footer
  footer = createFooter()

  // asign id to footer tag
  createAsignId(footer , "main-footer")

  // create content of footer
  text = createText("Copyright \u00A9 2022 By Mohmad Gamal")

  // append content to footer
  createAppendChild(footer , text)

  // append footer to body
  createAppendChild(Body , footer)
  
}

// invoke handleFooter function
handleFooter()

const handleOverLay = () => {
  // define and initialize overlay div
  let overLay = createDiv();
  
  // asign class with value to overlay div
  createAsignClass(overLay , "overLay")
  
  // function to add hide overlay
  function addOverLay() {

    // asign class with value to overlay div
    createAsignClass(overLay , "overLay hide")
  }
  
  // append overlay div to body
  createAppendChild(Body , overLay)
  
  // after load page will invoke addOverLay() function
  window.onload = function(){
    addOverLay();
  }

}

// invoke handleOverLay function
handleOverLay()