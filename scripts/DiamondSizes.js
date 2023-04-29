import { getSizes, setSizes } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSizes(parseInt(event.target.value))
        }
    }
)

const sizes = getSizes()

//Look at this it should be similar to what you would do for the metals and 
export const Sizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

