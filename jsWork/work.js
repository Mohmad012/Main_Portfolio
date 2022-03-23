
// select projects place 
let projects = document.querySelector(".projects")

// loop on All data
allData.forEach(element => {
    /** define:
     * work Item that have all of info about the work
     * link that have img of the work
     * button that have name of work and href for it also
     * button that have link of github for the work
     * img of work
     * eye icon for name of work
     * github icon
     * name of work
     */
    let workItem , viewsLink , btnLight , btnDark , imgViews , eyeIcon ,
        githubIcon , title;

    // create work Item
    workItem = createDiv()

    // create link have img of the work
    viewsLink = createAnchor()

    // create button have name of work and href for it also
    btnLight = createAnchor()
    
    // create img of work
    imgViews = createImg()
    
    // create eye icon for name of work
    eyeIcon = createItag()

    // asign class to work Item with value
    createAsignClass(workItem , "item")

    // asign class to link have img of the work with value
    createAsignClass(viewsLink , "views")

    // asign href to link have img of the work with value
    createAsignHref(viewsLink , element.linkLive)

    // asign target to link have img of the work with value
    createAsignTarget(viewsLink , "_blank")

    // asign class to button have name of work and href for it with value
    createAsignClass(btnLight , "btn-light")

    // asign href to button have name of work and href for it with value
    createAsignHref(btnLight , element.linkLive)

    // asign target to button have name of work and href for it with value
    createAsignTarget(btnLight , "_blank")

    // asign src to img of the work with value
    createAsignSrc(imgViews , element.img)

    // asign alt to img of the work with value
    createAsignAlt(imgViews , "Project")

    // asign class to eye icon for name of work with value
    createAsignClass(eyeIcon , "fas fa-eye")

    // create text for name of the work
    title = createText(` ${element.name}`)

    // append img of work to the link of work
    createAppendChild(viewsLink , imgViews)

    // append eye icon for name of work to the link of work
    createAppendChild(btnLight , eyeIcon)

    // append text for name of the work to the link of work
    createAppendChild(btnLight , title)

    // check if there is github link for each frontend and backend or not!
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