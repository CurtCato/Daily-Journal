const entriesContainer = document.querySelector("#entryLog");

const formatJournalEntries = taco => {
  return `
  <article>
    <h1>${taco.date}</h1>
    <h2>${taco.concepts_covered}</h2>
    <p>${taco.long_form_contents}</p>
    <p>${taco.mood}</p>
  </article>`;
};

fetch("http://localhost:3000/entries") // Fetch from the API
  .then(entries => entries.json()) // Parse as JSON
  .then(parsedEntries => {
    parsedEntries.forEach(entries => {
      // console.log(entries)
      const entriesAsHTML = formatJournalEntries(entries);
      entriesContainer.innerHTML += entriesAsHTML;
    });
  });
