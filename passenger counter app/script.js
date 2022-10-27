
let counter = 0

function increment() {
    counter = counter + 1
    document.getElementById("count-el").innerText = counter
}

function refresh()  {
    counter = 0
    document.getElementById("count-el").innerText = 0

}

