const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries").then(response =>
      response.json()
    );
  }
};

function postEntry(newJournalEntry) {
  return fetch("http://localhost:3000/entries", {
    // Replace "url" with your API's URL
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
  }).then(entry => entry.json());
}

function deleteEntry(id) {
  return fetch(`http://localhost:3000/entries/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

function editEntry(newData, id) {
  return fetch(`http://localhost:3000/entries/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newData)
  })
}
