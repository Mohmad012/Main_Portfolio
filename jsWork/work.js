
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
    workItem = allFunc.createDiv()

    // create link have img of the work
    viewsLink = allFunc.createAnchor()

    // create button have name of work and href for it also
    btnLight = allFunc.createAnchor()
    
    // create img of work
    imgViews = allFunc.createImg()
    
    // create eye icon for name of work
    eyeIcon = allFunc.createItag()

    // asign class to work Item with value
    allFunc.createAsignClass(workItem , "item")

    // asign class to link have img of the work with value
    allFunc.createAsignClass(viewsLink , "views")

    // asign href to link have img of the work with value
    allFunc.createAsignHref(viewsLink , element.linkLive)

    // asign target to link have img of the work with value
    allFunc.createAsignTarget(viewsLink , "_blank")

    // asign class to button have name of work and href for it with value
    allFunc.createAsignClass(btnLight , "btn-light")

    // asign href to button have name of work and href for it with value
    allFunc.createAsignHref(btnLight , element.linkLive)

    // asign target to button have name of work and href for it with value
    allFunc.createAsignTarget(btnLight , "_blank")

    // asign src to img of the work with value
    allFunc.createAsignSrc(imgViews , element.img)

    // asign alt to img of the work with value
    allFunc.createAsignAlt(imgViews , "Project")

    // asign class to eye icon for name of work with value
    allFunc.createAsignClass(eyeIcon , "fas fa-eye")

    // create text for name of the work
    title = allFunc.createText(` ${element.name}`)

    // append img of work to the link of work
    allFunc.createAppendChild(viewsLink , imgViews)

    // append eye icon for name of work to the link of work
    allFunc.createAppendChild(btnLight , eyeIcon)

    // append text for name of the work to the link of work
    allFunc.createAppendChild(btnLight , title)

    // check if there is github link for each frontend and backend or not!
    if(!element.frontBack){

        // define Github word
        let titleGithub;

        // Create dark anchor link Tag
        btnDark = allFunc.createAnchor()

        // Create I Tag
        githubIcon = allFunc.createItag()

        // Add value to class in dark anchor link
        allFunc.createAsignClass(btnDark , "btn-dark")

        // Add path to href in dark anchor link
        allFunc.createAsignHref(btnDark , element.linkGithub)

        // Add blank to target in dark anchor link
        allFunc.createAsignTarget(btnDark , "_blank")

        // Add class with value to I Tag to display Icon Github
        allFunc.createAsignClass(githubIcon , "fab fa-github")

        // Create Github word
        titleGithub = allFunc.createText(" Github")

        // Append Icon Github to anchor link
        allFunc.createAppendChild(btnDark , githubIcon)

        // Append Text Github to anchor link
        allFunc.createAppendChild(btnDark , titleGithub)

        // Append Box Img to parent Item
        allFunc.createAppendChild(workItem , viewsLink)

        // Append white anchor link to parent Item
        allFunc.createAppendChild(workItem , btnLight)

        // Append dark anchor link to parent Item
        !element.rmGithub && allFunc.createAppendChild(workItem , btnDark)
    
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
        githubItem = allFunc.createDiv()

        // Create BackEnd github link
        linkBack = allFunc.createAnchor()

        // Create FrontEnd github link
        linkFront = allFunc.createAnchor()

        // Create BackEnd github Icon
        githubIconBack = allFunc.createItag()

        // Create FrontEnd github Icon
        githubIconFront = allFunc.createItag()

        // asign class have value to git box
        allFunc.createAsignClass(githubItem , "item_Git")

        // asign class have value to backend github link
        allFunc.createAsignClass(linkBack , "btn-dark")

        // asign href have value to backend github link
        allFunc.createAsignHref(linkBack , element.backGithub)

        // asign target have value to backend github link
        allFunc.createAsignTarget(linkBack , "_blank")

        // asign class have value to I Tag to display github icon
        allFunc.createAsignClass(githubIconBack , "fab fa-github")

        // Create Backend word
        titleBack = allFunc.createText(" Backend")

        // asign class have value to frontend github link
        allFunc.createAsignClass(linkFront , "btn-dark")

        // asign href have value to frontend github link
        allFunc.createAsignHref(linkFront , element.frontGithub)

        // asign target have value to frontend github link
        allFunc.createAsignTarget(linkFront , "_blank")

        // asign class have value to I Tag to display github icon
        allFunc.createAsignClass(githubIconFront , "fab fa-github")

        // Create Frontend word
        titleFront = allFunc.createText(" Frontend")

        // Append Box Img to parent Item
        allFunc.createAppendChild(workItem , viewsLink)

        // Append white anchor link to parent Item
        allFunc.createAppendChild(workItem , btnLight)

        // Append github icon Tag to backend github link
        allFunc.createAppendChild(linkBack , githubIconBack)

        // Append Backend word to backend github link
        allFunc.createAppendChild(linkBack , titleBack)

        // Append github icon Tag to frontend github link
        allFunc.createAppendChild(linkFront , githubIconFront)

        // Append Frontend word to backend github link
        allFunc.createAppendChild(linkFront , titleFront)

        // Append backend github link to Box Github
        allFunc.createAppendChild(githubItem , linkBack)

        // Append frontend github link to Box Github
        allFunc.createAppendChild(githubItem , linkFront)

        // Append Box Img to parent Item
        allFunc.createAppendChild(workItem , githubItem)
    }

    // Append work Item to parent projects
    allFunc.createAppendChild(projects , workItem)
    
});