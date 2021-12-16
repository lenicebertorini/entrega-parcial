let darkMode;

if(localStorage.getItem('dark-mode')) {
    darkMode = localStorage.getItem('dark-mode')
} else {
    darkMode = "light"
}

localStorage.setItem('dark-mode', darkMode)

$(() => {
    if(localStorage.getItem('dark-mode') == "dark") {
        $('body').addClass("dark")
        $('#boton-dark-mode').hide()
        $('#boton-light-mode').show()
    } else {
        $('#boton-light-mode').hide()
    }

    $('#boton-light-mode').click(() => {
        $('#boton-light-mode').hide()
        $('#boton-dark-mode').show()
        /*
        $('body').css({
            "background-color": "lightblue"
            "color": "black"
        })
        */
        $('body').removeClass("dark")

        localStorage.setItem('dark-mode', "light")
    })

    $('#boton-dark-mode').click(() => {
        $('#boton-light-mode').show()
        $('#boton-dark-mode').hide()
        $('body').addClass("dark")
        localStorage.setItem('dark-mode', "dark")
    })

    $('#boton1').click(function() {
        $('#box').animate({
            height: "200px",
            width: "200px",
            backgroundColor: '#082AD9'
        }, {
            duration: 1000,
            easing: "linear",
            complete: () => {
                console.log(this)
                $(this).after("<p>Probá un sabor inigualable!.</p>")
            }
        });
    })

    $('#p1').animate({
        "font-size": "40px",
        "padding": "30px",
        "color": "#1C34B0",
        "width": "140px"},
        "fast",
        function() {
            console.log("Animación terminada")
        }
    ).fadeOut(5000).delay(1000).fadeIn(5000)


    $('#p2').fadeOut('slow', () => {
        $('#p2').fadeIn(1000)
    })
})
