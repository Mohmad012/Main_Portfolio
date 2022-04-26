(function(){

  // Select DOM Items
  const menuBtn = allFunc.createQuerySelector('.menu-btn'),
        menu = allFunc.createQuerySelector('.menu'),
        menuNav = allFunc.createQuerySelector('.menu-nav'),
        menuBranding = allFunc.createQuerySelector('.menu-branding'),
        navItems = allFunc.createQuerySelector('.nav-item');

  // Body.style.display = "none"

  // if (typeof NodeList !== "undefined") {
    // invoke handleOverLay function
    // handleOverLay()
  // }

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
  let menuBx = allFunc.createQuerySelector(".menu-btn"),
      numBtn = new Array(3);

  // Create lines for menu Button
  for(let i = 0; i < numBtn.length ; i++){
    let btnLine = allFunc.createDiv()
    btnLine.className = "btn-line"
    menuBx.appendChild(btnLine)
  }

  function handleLinks() {

    dataOfPages.forEach((element) => {
      // define Vars of li list and link of page
      let navItem , navLink , namePage;

      // li box
      navItem = allFunc.liTag()

      // link page
      navLink = allFunc.createAnchor()

      // asign class for nav link
      allFunc.createAsignClass(navLink , "nav-link")

      // asign href for nav link
      allFunc.createAsignHref(navLink , element.path)

      // create name each link of page
      namePage = allFunc.createText(element.text)

      // append name each link of page to nav link
      allFunc.createAppendChild(navLink , namePage)

      // append nav link to list of link item
      allFunc.createAppendChild(navItem , navLink)

      // append list of link item to links box
      allFunc.createAppendChild(menuNav , navItem)
      
    })

  }

  // invoke handleLinks function
  handleLinks()

  function handleFooter () {
    // define Vars of footer and content footer
    let footer , text , Body;

    Body = allFunc.createQuerySelector(".Body")

    // create footer
    footer = allFunc.createFooter()

    // asign id to footer tag
    allFunc.createAsignId(footer , "main-footer")

    // create content of footer
    text = allFunc.createText("Copyright \u00A9 2022 By Mohmad Gamal")

    // append content to footer
    allFunc.createAppendChild(footer , text)

    // append footer to body
    allFunc.createAppendChild(Body , footer)
    
  }

  // invoke handleFooter function
  handleFooter()
})()