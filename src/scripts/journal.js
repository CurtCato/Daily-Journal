API.getJournalEntries().then(renderJournalEntry);

document.getElementById("saveBtn").addEventListener("click", createEntryObj);

function createEntryObj() {
  let journalDate = document.getElementById("journalDate").value;
  let conceptsCovered = document.getElementById("conceptsCovered").value;
  let longFormContents = document.getElementById("longFormContents").value;
  let mood = document.getElementById("mood").value
  let entryObj = {
    date: "",
    conceptsCovered: "",
    longFormContents: "",
    mood: "",
  };
  entryObj.date = journalDate;
  entryObj.conceptsCovered = conceptsCovered;
  entryObj.longFormContents = longFormContents;
  entryObj.mood = mood;
  console.log(entryObj);
  postEntry(entryObj)
  .then(post => {
    // journalEntryContainer.innerHTMl = ""
    console.log(journalEntryContainer);
    API.getJournalEntries().then(renderJournalEntry);
  });
}

// Invoke the factory function, passing along the form field values


let radioBtn = document.getElementsByName("mood")
radioBtn.forEach(radio => {
  radio.addEventListener("click", event => {
    let radio = event.target.value
    console.log(radio)
    API.getJournalEntries().then(placeholder => {
      let moodString = placeholder.filter(entry => entry.mood === `${radio}`)
      renderJournalEntry(moodString)
    })
  })
})


