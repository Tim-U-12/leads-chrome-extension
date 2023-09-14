let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById('input-btn')
const tabBtn = document.getElementById('tab-btn')
const deleteBtn = document.getElementById('delete-btn')
const ulEl = document.getElementById('ulEl')


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads, ulEl)
}

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads, ulEl)
})


tabBtn.addEventListener('click', function(){
    // chrome.tabs.query({active: true,lastFocusedWindow: true}, function(tabs) {
        
    // })
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads, ulEl)
    })
})



deleteBtn.addEventListener("dblclick", function () {
    localStorage.setItem('myLeads', JSON.stringify([]))
    myLeads = []
    renderLeads(myLeads, ulEl)
})

function renderLeads(leads, htmlElement) {
    let listItems = ""
    for (i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    htmlElement.innerHTML = listItems
}