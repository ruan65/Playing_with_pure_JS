var pageCounter = 1
var btn = document.getElementById("btn")
var jsonContainer = document.getElementById("animal_info")

btn.addEventListener("click", function () {

    var animalsUrl = "https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json"


    var request = new XMLHttpRequest()

    request.open('GET', animalsUrl)

    request.onload = function (ev) {

        var responseJson = JSON.parse(request.responseText)

        console.log(responseJson[0])

        renderHTML(responseJson)
    }

    request.send()

    pageCounter++

    if(pageCounter > 3) {
        btn.classList.add("hide-me")
    }
})

function renderHTML(json) {

    var htmlString = ""

    for (i = 0; i < json.length; i++) {

        htmlString += "<p>" + json[i].name + "</p>"
    }

    jsonContainer.insertAdjacentHTML('beforeend', htmlString)

}