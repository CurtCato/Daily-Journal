const journalEntryContainer = document.querySelector("#entryLog");

let renderJournalEntry = (arrayJournalEntry) => {
  arrayJournalEntry.forEach(function(journalEntry) {
    let allJournalEntries = journalEntryComponent(journalEntry);
    journalEntryContainer.innerHTML += allJournalEntries;
  });
};
