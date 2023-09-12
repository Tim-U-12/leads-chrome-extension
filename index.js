let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ulEl')

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    renderLeads(inputEl.value)
})

function renderLeads(value) {
    // ulEl.innerHtml += "<li>" + value + "</li>"
    const li = document.createElement('li')
    li.textContent = value
    ulEl.append(li)
}


