const journalEntryComponent = (entry) => {
    return `
        <div class="journalEntrys">
        <h2>${entry.date}</h2>
        <h3>${entry.conceptsCovered}</h3>
        <p>${entry.longFormContents}</p>
        <p>${entry.mood}</p>
        </div>
    `
}



