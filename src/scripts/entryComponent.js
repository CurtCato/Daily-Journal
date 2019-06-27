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
    `;
};

function createDeleteBtn() {
  let deletePhantom = document.querySelectorAll(".deleteBtn");
  console.log(deletePhantom);
  deletePhantom.forEach(button => {
    button.addEventListener("click", event => {
      //   console.log(event.target.id)
      deleteEntry(event.target.id)
      .then(word =>{
        API.getJournalEntries().then(renderJournalEntry)
      })
      //   console.log("clicked", event);
    });
  });
}
