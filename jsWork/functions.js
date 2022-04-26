(function(){
    const allFunc = function(){
        // Function to create Div Tag
        function createDiv() {
            let div = document.createElement("div")
            return div
        }

        // Function to create anchor tag
        function createAnchor() {
            let a = document.createElement("a")
            return a
        }

        // Function to create Img tag
        function createImg() {
            let img = document.createElement("img")
            return img
        }

        // Function to create I tag
        function createItag() {
            let i = document.createElement("i")
            return i
        }

        // Function to create text in tag
        function createText(text) {
            let textTag = document.createTextNode(text)
            return textTag
        }

        // Function to asign class to tag
        function createAsignClass(tag , val) {
            return tag.className = val
        }

        // Function to asign href to tag
        function createAsignHref(tag , val) {
            return tag.href = val
        }

        // Function to asign target to tag
        function createAsignTarget(tag , val) {
            return tag.target = val
        }

        // Function to asign src to tag
        function createAsignSrc(tag , val) {
            return tag.src = val
        }

        // Function to asign alt to tag
        function createAsignAlt(tag , val) {
            return tag.alt = val
        }

        // Function to append Child to tag
        function createAppendChild(parent , child) {
            parent && parent.appendChild(child)
        }

        // Create Li Tag Function
        function liTag() {
            let li = document.createElement("li")
            return li
        }

        // Function to append Child to tag
        function createQuerySelector(Selector) {
            let s = document.querySelector(Selector)
            return s
        }

        // Function to create Footer tag
        function createFooter() {
            let Footer = document.createElement("footer")
            return Footer
        }

        // Function to asign alt to tag
        function createAsignId(tag , val) {
            return tag.id = val
        }

        function handleOverLay() {

            // function to add hide overlay
            function addOverLay() {
        
                let overLay = createQuerySelector('.overLay');
            
                // asign class with value to overlay div
                createAsignClass(overLay , "overLay hide")
            }
            
                // after load page will invoke addOverLay() function
                window.onload = function(){
                addOverLay();
            }
        
        }

        return{
            createDiv,
            createAnchor,
            createImg,
            createItag,
            createText,
            createAsignClass,
            createAsignHref,
            createAsignTarget,
            createAsignSrc,
            createAsignAlt,
            createAppendChild,
            liTag,
            createQuerySelector,
            createFooter,
            createAsignId,
            handleOverLay
        }
    }

    // invoke handleOverLay function
    allFunc().handleOverLay()

    if(!window.allFunc){
        return window.allFunc = allFunc()
    }
})()