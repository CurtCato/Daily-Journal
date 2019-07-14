function displayJournalEntries(entry) {
  let el = document.createElement("div");
  let entriesContainer = document.querySelector("#entryLog");
  entriesContainer.innerHTML += `
        <div class="journalEntrys">
        <h2>${entry.date}</h2>
        <h3>${entry.conceptsCovered}</h3>
        <p>${entry.longFormConcepts}</p>
        <p>${entry.mood}</p>
        </div>
        <button id="${entry.id}"
          class="deleteBtns" type="Button">Delete entry</button>
        <button id="editBtn-${entry.id}"
          class="editBtns" type="Button">Edit entry</button>
        <div id="editDiv-${entry.id}"></div>
        `;
  deleteBtnListener();
  editBtnListener(entry);
  return el;
}

function createEditForm(entry) {
  let entriesContainer = document.querySelector(`#editDiv-${entry.id}`);
  entriesContainer.innerHTML = `
  <fieldset>
    <label for="journalsDate">Date of entry</label>
    <input type="date" name="journalsDate" id="editedJournalDate"
    value="${entry.date}"></input>
  </fieldset>

  <fieldset>
    <label for="conceptCovered">Concepts covered</label>
    <input type="text" name="conceptCovered" id="editedConceptsCovered"
    value= "${entry.conceptsCovered}"></input>
  </fieldset>

  <fieldset>
    <label for="journalEntry">Journal entry</label>
    <input type="text" name="journalEntry" id="longFormConcepts"
    value="${entry.longFormConcepts}"></input>
  </fieldset>
  <fieldset>
  <label for="currentMood">Mood for the day</label>
  <select name="currentMood" id="editedMood" value="${entry.mood}">
    <option value="Happy">Happy</option>
    <option value="Sad">Sad</option>
    <option value="Ok">Ok</option>
  </select>
</fieldset>
    <button id="saveChanges-${entry.id}">Save Changes</button>
    <button id="cancelEdit-${entry.id}" type="button">Cancel Changes</button>

        `;
  saveChangesListener(entry);
  createCancelEditBtn(entry);
}
