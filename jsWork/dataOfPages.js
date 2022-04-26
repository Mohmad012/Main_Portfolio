(function(){
    // the data for all of project
    const dataOfPages = function(){
        
        // Data related to pages
        let data = [
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

        return data
    }

    if(!window.dataOfPages){
        return window.dataOfPages = dataOfPages()
    }
})()