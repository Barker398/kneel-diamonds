import { getMetals, setMetals } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetals(parseInt(event.target.value))
        }
    }
)

const metals = getMetals()

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}
