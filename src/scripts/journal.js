API.getJournalEntries().then(renderJournalEntry);

document.getElementById("saveBtn").addEventListener("click", () => {
  createEntryObj()
  clearEntryFields()
})

function entriesFactory(date, conceptsCovered, longFormConcepts, mood){
  return {
    date: date,
    conceptsCovered: conceptsCovered,
    longFormConcepts: longFormConcepts,
    mood: mood
  }
}

// Invoke the factory function, passing along the form field values
function createEntryObj() {
  let journalDate = document.getElementById("journalDate").value;
  let conceptsCovered = document.getElementById("conceptsCovered").value;
  let longFormContents = document.getElementById("longFormContents").value;
  let mood = document.getElementById("mood").value
  let newEntries = entriesFactory(journalDate, conceptsCovered, longFormContents, mood)
  postEntry(newEntries).then(() => {
    API.getJournalEntries().then(entries => renderJournalEntry(entries));
  });
}

function clearEntryFields () {
  document.getElementById("journalDate").value = ""
  document.getElementById("conceptsCovered").value = ""
  document.getElementById("longFormContents").value = ""
  document.getElementById("mood").value = "Happy"
}

let radioBtn = document.getElementsByName("mood")
radioBtn.forEach(radio => {
  radio.addEventListener("click", event => {
    let radio = event.target.value
    API.getJournalEntries().then(placeholder => {
      let moodString = placeholder.filter(entry => entry.mood === `${radio}`)
      renderJournalEntry(moodString)
    })
  })
})


