
let counter = 0

let saveEl = document.getElementById("save-el")

function increment() {
    counter += 1
    document.getElementById("count-el").innerText = counter
}

function refresh()  {
    counter = 0
    document.getElementById("count-el").innerText = 0

}


function save() {
    let entryHistory = counter + "-"
    saveEl.innerText += " " + entryHistory

    
}

