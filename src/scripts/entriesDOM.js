const journalEntryContainer = document.querySelector("#entryLog");

let renderJournalEntry = (arrayJournalEntry) => {
  journalEntryContainer.innerHTML = ""
  arrayJournalEntry.forEach(function(journalEntry) {
    let newJournalEntry = journalEntryComponent(journalEntry);
    journalEntryContainer.innerHTML += newJournalEntry;
  });
};
