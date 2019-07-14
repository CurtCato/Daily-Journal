const renderJournalEntry = entryArr => {
  let journalDisplay = document.querySelector("#entryLog");
  journalDisplay.innerHTML = "";
  entryArr.forEach(journalEntry => {
    journalDisplay.appendChild(displayJournalEntries(journalEntry));
    // editBtnListener(journalEntry);
  });
};

function saveChangesListener(entry) {
  let saveChangesBtn = document.querySelector(`#saveChanges-${entry.id}`);
  saveChangesBtn.addEventListener("click", () => {
    let id = event.target.id.split("-")[1];
    let newDate = document.querySelector("#editedJournalDate").value;
    let newConcepts = document.querySelector("#editedConceptsCovered").value;
    let newlongForm = document.querySelector("#longFormConcepts").value;
    let newMood = document.querySelector("#editedMood").value;
    let newJE = entriesFactory(newDate, newConcepts, newlongForm, newMood);
    console.log(newJE);
    editEntry(newJE, id).then(() => {
      API.getJournalEntries().then(entries => renderJournalEntry(entries));
    });
  });
}

function createCancelEditBtn(entry) {
  let cancelBtn = document.querySelector(`#cancelEdit-${entry.id}`);
  cancelBtn.addEventListener("click", () => {
    let clearEditField = document.querySelector(`#editDiv-${entry.id}`);
    clearEditField.innerHTML = "";
  });
}

function editBtnListener(entry) {
  let editBtn = document.querySelectorAll(".editBtns");
  editBtn.forEach(button => {
    button.addEventListener("click", event => {
    let id = event.target.id.split("-")[1];
    fetch(`http://localhost:3000/entries/${id}`).then(response =>
    response.json()).then(createEditForm)
    console.log(id);
  });
})
}

function deleteBtnListener() {
  let deleteBtns = document.querySelectorAll(".deleteBtns");
  deleteBtns.forEach(button => {
    button.addEventListener("click", event => {
      deleteEntry(event.target.id).then( () => {
        API.getJournalEntries().then(renderJournalEntry);
      });
    });
  });
}
