let display = document.getElementById("display")
let buttons = document.getElementsByClassName("buttons")

function clicktodisplay(x) {
    display.value+=x
}

function tocalculate() {
    display.value=eval(display.value)
}
function toclear() {
    try {
        display.value = ""
    }
    catch (error) {
        display.value="Error"
    }
}