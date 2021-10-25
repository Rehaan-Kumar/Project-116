check = 0

function male() {
    check = 1
    next()
}

function female() {
    check = 2
    next()
}

function next() {
    if (check == 1) {
        window.location = "male.html"
        check = 0
    }

    if (check == 2) {
        window.location = "female.html"
        check = 0
    }
}
