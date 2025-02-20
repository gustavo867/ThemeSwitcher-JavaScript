const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme")

const getStyle = (element, style) =>
 window
 .getComputedStyle(element)
 .getPropertyValue(style)

const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    ColorsHeadings: getStyle(html, "--color-headings"),
    ColorText: getStyle(html, "--color-text")
}

const darkMode= {
    bg: "#333333",
    bgPanel: "#434343",
    ColorsHeadings: "#3664FF",
    ColorText:  "#B5B5B5"
}

const transformKey = key => 
"--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
   Object.keys(colors).map(key => {
    html.style.setProperty(transformKey(key), colors[key])
   })
}

 checkbox.addEventListener("change", ({ target }) => {
    target.checked ?  changeColors(darkMode) : changeColors(initialColors)
 })