// import allData from "./projectData.json"

const allData = [
    {
        "img":"./img/projects/amazon.jpg",
        "linkLive":"https://amazon-app-self.vercel.app/",
        "linkGithub":"https://github.com/Mohmad012/Amazon_App",
        "name":"Amazon App",
        "frontBack":false
    },
    {
        "img":"./img/projects/Crypto.png",
        "linkLive":"https://mohmad012.github.io/Template_Deme_App/",
        "linkGithub":"https://github.com/Mohmad012/Template_Deme_App",
        "name":"Crypto App",
        "frontBack":false
    },
    {
        "img":"./img/projects/eth.jpg",
        "linkLive":"https://mohmad012.github.io/profile_template/",
        "linkGithub":"https://github.com/Mohmad012/profile_template",
        "name":"ETH App",
        "frontBack":false
    },
    {
        "img":"./img/projects/ntf.png",
        "linkLive":"https://mohmad012.github.io/template_react/",
        "linkGithub":"https://github.com/Mohmad012/template_react",
        "name":"NTF App",
        "frontBack":false
    },
    {
        "img":"./img/projects/chatNow.png",
        "linkLive":"https://mohmad012.github.io/ChatNow/",
        "frontGithub":"https://github.com/Mohmad012/ChatNow",
        "backGithub":"https://github.com/Mohmad012/ChatNow_Backend",
        "name":"Chat App",
        "frontBack":true
    },
    {
        "img":"./img/projects/car.jpg",
        "linkLive":"https://mohmad012.github.io/car-site/",
        "linkGithub":"https://github.com/Mohmad012/car-site",
        "name":"Car Site",
        "frontBack":false
    },
    {
        "img":"./img/projects/landing2.jpg",
        "linkLive":"https://mohmad012.github.io/web_pure_Javascript/",
        "linkGithub":"https://github.com/Mohmad012/web_pure_Javascript",
        "name":"Special Design",
        "frontBack":false
    },
    {
        "img":"./img/projects/slide1.jpg",
        "linkLive":"https://mohmad012.github.io/Bootstrap4/",
        "linkGithub":"https://github.com/Mohmad012/Bootstrap4",
        "name":"Elite Corp Site",
        "frontBack":false
    },
    {
        "img":"./img/projects/landing7.png",
        "linkLive":"https://mohmad012.github.io/bootstrap3-2/",
        "linkGithub":"https://github.com/Mohmad012/bootstrap3-2",
        "name":"Prototypes Site",
        "frontBack":false
    },
    {
        "img":"./img/projects/home.jpg",
        "linkLive":"https://mohmad012.github.io/Real-Estate-Site/",
        "linkGithub":"https://github.com/Mohmad012/Real-Estate-Site",
        "name":"Home Design Site",
        "frontBack":false
    },
    {
        "img":"./img/projects/tec.jpg",
        "linkLive":"https://mohmad012.github.io/bootstrap3-1/",
        "linkGithub":"https://github.com/Mohmad012/bootstrap3-1",
        "name":"Tech Site",
        "frontBack":false
    },
    {
        "img":"./img/projects/memory.png",
        "linkLive":"https://mohmad012.github.io/Memory_Game/",
        "linkGithub":"https://github.com/Mohmad012/Memory_Game",
        "name":"Memory Game",
        "frontBack":false
    },

    {
        "img":"./img/projects/store.png",
        "linkLive":"https://store-shop-phi.vercel.app/",
        "linkGithub":"https://github.com/Mohmad012/Store_Shop",
        "name":"Shop Store",
        "frontBack":false
    },
    {
        "img":"./img/projects/logoFlix.png",
        "linkLive":"https://mohmad012.github.io/TV_Search_Flix/",
        "linkGithub":"https://github.com/Mohmad012/TV_Search_Flix",
        "name":"TV Search Flims",
        "frontBack":false
    },
    {
        "img":"./img/projects/todo.png",
        "linkLive":"https://mohmad012.github.io/TodoList/",
        "linkGithub":"https://github.com/Mohmad012/TodoList",
        "name":"Todo List",
        "frontBack":false
    },
    {
        "img":"./img/projects/illustration-features-tab-2.svg",
        "linkLive":"./Projects/Bookmark/index.html",
        "linkGithub":"https://github.com/Mohmad012/Portfolio/tree/main/Projects/Bookmark",
        "name":"Bookmark Site",
        "frontBack":false
    },
    {
        "img":"./img/projects/developer.jpg",
        "linkLive":"https://mohmad012.github.io/Sass_Pugjs_Project/",
        "linkGithub":"https://github.com/Mohmad012/Sass_Pugjs_Project",
        "name":"Composition Site",
        "frontBack":false
    },
    {
        "img":"./img/projects/tiktok.png",
        "linkLive":"https://tiktok-f8fc2.web.app/",
        "frontGithub":"https://github.com/Mohmad012/TikTok_frontend",
        "backGithub":"https://github.com/Mohmad012/TikTok_backend",
        "name":"TikTok App",
        "frontBack":true
    },
    {
        "img":"./img/projects/tinder.png",
        "linkLive":"https://mohmad012.github.io/Tinder_frontend/",
        "frontGithub":"https://github.com/Mohmad012/Tinder_frontend",
        "backGithub":"https://github.com/Mohmad012/Tinder_backend",
        "name":"Tinder App",
        "frontBack":true
    }
]

// select projects place 
let projects = document.querySelector(".projects")

// loop on All data
allData.forEach(element => {
    // create main vars
    let workItem , viewsLink , btnLight , btnDark , imgViews , eyeIcon ,
        githubIcon , title;

    // create constants parent elements
    workItem = createDiv()
    viewsLink = createAnchor()
    btnLight = createAnchor()
    

    // create constants child elements
    imgViews = createImg()
    eyeIcon = createItag()

    // create constants parent attributes
    createAsignClass(workItem , "item")
    createAsignClass(viewsLink , "views")

    createAsignHref(viewsLink , element.linkLive)
    createAsignTarget(viewsLink , "_blank")

    createAsignClass(btnLight , "btn-light")

    createAsignHref(btnLight , element.linkLive)
    createAsignTarget(btnLight , "_blank")

    // create constants child attributes
    createAsignSrc(imgViews , element.img)
    createAsignAlt(imgViews , "Project")

    createAsignClass(eyeIcon , "fas fa-eye")

    title = createText(` ${element.name}`)

    // asign constants child elements to parent elements
    createAppendChild(viewsLink , imgViews)
    createAppendChild(btnLight , eyeIcon)
    createAppendChild(btnLight , title)

    if(!element.frontBack){

        // define Github word
        let titleGithub;

        // Create dark anchor link Tag
        btnDark = createAnchor()

        // Create I Tag
        githubIcon = createItag()

        // Add value to class in dark anchor link
        createAsignClass(btnDark , "btn-dark")

        // Add path to href in dark anchor link
        createAsignHref(btnDark , element.linkGithub)

        // Add blank to target in dark anchor link
        createAsignTarget(btnDark , "_blank")

        // Add class with value to I Tag to display Icon Github
        createAsignClass(githubIcon , "fab fa-github")

        // Create Github word
        titleGithub = createText(" Github")

        // Append Icon Github to anchor link
        createAppendChild(btnDark , githubIcon)

        // Append Text Github to anchor link
        createAppendChild(btnDark , titleGithub)

        // Append Box Img to parent Item
        createAppendChild(workItem , viewsLink)

        // Append white anchor link to parent Item
        createAppendChild(workItem , btnLight)

        // Append dark anchor link to parent Item
        createAppendChild(workItem , btnDark)
    
    }else{
        /**
         * define:
         * link for Backend github
         * link for Frontend github
         * Icon Github for Backend github
         * Icon Github for Frontend github
         * Text Github for Backend github
         * Text Github for Frontend github
         */
        let linkBack , linkFront , githubIconBack , githubItem, githubIconFront , titleBack , titleFront;

        // Create Box have front and back end github link
        githubItem = createDiv()

        // Create BackEnd github link
        linkBack = createAnchor()

        // Create FrontEnd github link
        linkFront = createAnchor()

        // Create BackEnd github Icon
        githubIconBack = createItag()

        // Create FrontEnd github Icon
        githubIconFront = createItag()

        // asign class have value to git box
        createAsignClass(githubItem , "item_Git")

        // asign class have value to backend github link
        createAsignClass(linkBack , "btn-dark")

        // asign href have value to backend github link
        createAsignHref(linkBack , element.linkGithub)

        // asign target have value to backend github link
        createAsignTarget(linkBack , "_blank")

        // asign class have value to I Tag to display github icon
        createAsignClass(githubIconBack , "fab fa-github")

        // Create Backend word
        titleBack = createText(" Backend")

        // asign class have value to frontend github link
        createAsignClass(linkFront , "btn-dark")

        // asign href have value to frontend github link
        createAsignHref(linkFront , "https://store-shop-phi.vercel.app/")

        // asign target have value to frontend github link
        createAsignTarget(linkFront , "_blank")

        // asign class have value to I Tag to display github icon
        createAsignClass(githubIconFront , "fab fa-github")

        // Create Frontend word
        titleFront = createText(" Frontend")

        // Append Box Img to parent Item
        createAppendChild(workItem , viewsLink)

        // Append white anchor link to parent Item
        createAppendChild(workItem , btnLight)

        // Append github icon Tag to backend github link
        createAppendChild(linkBack , githubIconBack)

        // Append Backend word to backend github link
        createAppendChild(linkBack , titleBack)

        // Append github icon Tag to frontend github link
        createAppendChild(linkFront , githubIconFront)

        // Append Frontend word to backend github link
        createAppendChild(linkFront , titleFront)

        // Append backend github link to Box Github
        createAppendChild(githubItem , linkBack)

        // Append frontend github link to Box Github
        createAppendChild(githubItem , linkFront)

        // Append Box Img to parent Item
        createAppendChild(workItem , githubItem)
    }

    // Append work Item to parent projects
    createAppendChild(projects , workItem)
    
});

console.log(projects)