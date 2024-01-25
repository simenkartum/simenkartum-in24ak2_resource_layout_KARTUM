const ressursNav = document.getElementById('ressursNav')
const ressursContent = document.getElementById('ressursContent')

function fyllNav() {
    resources.forEach(resource => {
        const listItem = document.createElement('li')
        listItem.textContent = resource.category
        listItem.addEventListener('click', () => visRessursNav(resource))
        ressursNav.appendChild(listItem)
    })

    if (resources.length > 0) {
        visRessursNav(resources[0])
    }
}

function visRessursNav(resource) {
    const sourcesListItems = resource.sources.map(source => `
        <li><a href="${source.url}" target="_blank">${source.title}</a></li>
    `).join('') 

    ressursContent.innerHTML = `
        <div class="resource-container">
            <h2>${resource.category}</h2>
            <p>${resource.text}</p>
            
            <ul class="sources-list">
                ${sourcesListItems}
            </ul>
        </div>
    `
}
fyllNav()