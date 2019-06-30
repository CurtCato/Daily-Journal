const journalEntryComponent = entry => {
  return `
        <div class="journalEntrys">
        <h2>${entry.date}</h2>
        <h3>${entry.conceptsCovered}</h3>
        <p>${entry.longFormContents}</p>
        <p>${entry.mood}</p>
        </div>
        <button id="${
          entry.id
        }" class="deleteBtn" type="Button">Delete entry</button>
        <button id="${
          entry.id
        }" class="editBtn" type="Button">Edit entry</button>
        `;
};

function createDeleteBtn() {
  let deletePhantom = document.querySelectorAll(".deleteBtn");
  console.log(deletePhantom);
  deletePhantom.forEach(button => {
    button.addEventListener("click", event => {
      //   console.log(event.target.id)
      deleteEntry(event.target.id).then(word => {
        API.getJournalEntries().then(renderJournalEntry);
      });
    });
  });
}

function createEditForm(entry) {
  console.log("yippie");
  return `
        <h1>HI</h1>
        <button id="entry-edit-btn">Save</button>
      `;
}

function createEditBtn(edit) {
  let editThing = document.querySelectorAll(".editBtn");
  let editForm = createEditForm();
  editThing.forEach(editButton => {
    editButton.addEventListener("click", event => {
      let target = event.target.id
      let thing = createEditForm(target)
      console.log(thing);
    });
  });
}


{
  /* <input id="entry-edit" name="entry-editor" type="text" value=${entry}> */
}
// <input type="hidden" id="entry-id" value=${entry.id}></input>

