tn = document.getElementsByClassName('btn btn-outline-success')

function function1() {
    alert("Muje ni pata! le google se puch")
    window.location.href = 'https://www.google.com/'
}

var l = document.getElementById("left_btn")
var r = document.getElementById("right_btn")

r.style.display = 'none'

l.addEventListener('mouseover', function () {
    let namee = document.getElementById("exampleInputEmail1").value;
    let psw = document.getElementById("exampleInputPassword1").value;
    let checkbox = document.getElementById("exampleCheck1").value;
    if (checkbox) {
        console.log(1)
    }
    if (!namee || !psw) {
        l.style.display = 'none'
        r.style.display = 'block'
    }
})

r.addEventListener('mouseover', function () {
    let namee = document.getElementById("exampleInputEmail1").value;
    let psw = document.getElementById("exampleInputPassword1").value;
    if (!namee || !psw) {
        r.style.display = 'none'
        l.style.display = 'block'
    }
})

