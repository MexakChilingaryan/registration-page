
let text = document.getElementById("text")
let text1 = document.getElementById("text2")
let but = document.getElementById('text1')
let p = document.getElementById('p')
let x;
let y;
but.addEventListener("click", function (e) {
    e.preventDefault();
    x = text.value
    y = text1.value

    if ((x.length > 7 && x.length < 16) && (y.length > 7 && y.length < 16)) {
        text.value = null
        text1.value = null
    } else {
        setTimeout(() => {
            p.style.opacity = '1'
        }, 0);


    }

})

text.addEventListener('click', function () {
    setTimeout(() => {
        p.style.opacity = '0'
    }, 100);
})

text1.addEventListener('click', function () {
    setTimeout(() => {
        p.style.opacity = '0'
    }, 100);
})

