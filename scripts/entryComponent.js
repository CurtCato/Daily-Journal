const journalEntryComponent = (entry) => {
    return `
        <div class="journalEntrys">
        <h2>${entry.date}</h2>
        <h3>${entry.concepts_covered}</h3>
        <p>${entry.long_form_contents}</p>
        <p>${entry.mood}</p>
        </div>
    `
}



