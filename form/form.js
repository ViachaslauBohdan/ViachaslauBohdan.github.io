
const handleForm = function (event) {
    // event.preventDefault()

    const name = $(".name").val()
    const wishes = $("textarea").val()

    const allNames = window.localStorage.getItem('name')
    const allWishes = window.localStorage.getItem('wishes')

    if (!allNames) {
        localStorage.setItem('name', `${name.replace(';', '')}`)
        localStorage.setItem('wishes', `${wishes.replace(';', '')}`)
    } else {
        localStorage.setItem('name', `${allNames};${name.replace(';', '')}`)
        localStorage.setItem('wishes', `${allWishes};${wishes.replace(';', '')}`)
    }

    console.log('items', window.localStorage.getItem('name'), window.localStorage.getItem('wishes'))
}

const insertHTML = function () {
    const allNames = window.localStorage.getItem('name')
    const allWishes = window.localStorage.getItem('wishes')
    if (!allNames || !allWishes) {
        console.warn('No greetings step 1')
        return
    }
    console.log('allNames',allNames)
    const allNamesSplited = allNames.split(";")
    const allWishesSplited = allWishes.split(";")

    if (!allNamesSplited || !allWishesSplited || !allNamesSplited.length || !allWishesSplited.length) {
        console.error('insertHTML ERROR step 2')
        return
    }
    console.log(allNamesSplited)
    let dom = ``
    for (let i = 0; i < allNamesSplited.length; i++) {
        dom = `
        ${dom}
        <div class="row">
            <div class="col" style="word-break: break-word">
            Гость: ${allNamesSplited[i]}, Текст: ${allWishesSplited[i]}
            </div>
        </div>
        `
    }
    console.log(dom)

    $(".greets").html(dom)
}

$(document).ready(function () {
    console.log('READY')
    insertHTML()
    $("#form").submit(handleForm)
}
)