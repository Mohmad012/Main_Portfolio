// Function to create Div Tag
const createDiv = () => {
    let div = document.createElement("div")
    return div
}

// Function to create anchor tag
const createAnchor = () => {
    let a = document.createElement("a")
    return a
}

// Function to create Img tag
const createImg = () => {
    let img = document.createElement("img")
    return img
}

// Function to create I tag
const createItag = () => {
    let i = document.createElement("i")
    return i
}

// Function to create text in tag
const createText = (text) => {
    let textTag = document.createTextNode(text)
    return textTag
}

// Function to asign class to tag
const createAsignClass = (tag , val) => {
    return tag.className = val
}

// Function to asign href to tag
const createAsignHref = (tag , val) => {
    return tag.href = val
}

// Function to asign target to tag
const createAsignTarget = (tag , val) => {
    return tag.target = val
}

// Function to asign src to tag
const createAsignSrc = (tag , val) => {
    return tag.src = val
}

// Function to asign alt to tag
const createAsignAlt = (tag , val) => {
    return tag.alt = val
}

// Function to append Child to tag
const createAppendChild = (parent , child) => {
    return parent.appendChild(child)
}

// Create Li Tag Function
const liTag = () => {
    let li = document.createElement("li")
    return li
}

// Function to append Child to tag
const createQuerySelector = (Selector) => {
    let s = document.querySelector(Selector)
    return s
}

// Function to create Footer tag
const createFooter = () => {
    let Footer = document.createElement("footer")
    return Footer
}

// Function to asign alt to tag
const createAsignId = (tag , val) => {
    return tag.id = val
}