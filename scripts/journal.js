const objectsJournalEntry = {
  date: "",
  concepts_covered: "",
  long_form_contents: "",
  mood: ""
};

const DOMjournalEntry = {
  date: "6/4/2019",
  concepts_covered: "The DOM. Manipulating the DOM via JavaScript.",
  long_form_contents:
    "I thought my head was going to explode. During the instructional I thought I was grasping the concepts, but when it came time to practice, I was lost for about 20 minutes. I had to ask a lot of questions during this particular exercise.",
  mood: "Stressed"
};

const gitHubJournalEntry = {
  date: "5/31/2019",
  concepts_covered: "Using GitBash and GitHub to create repo's, branches, pushes, pulls, etc.",
  long_form_contents: "It took a day or so of messing around with this to grasp. Repeatedly using these programs during a group project helped immensly. It was the day of project presentation that I finally felt comfortable with these.",
  mood: "Hopeful"
};

const loopsJournalEntry = {
  date: "6/3/2019-6/4/2019",
  concepts_covered: "Looping through arrays, and objects. Old school for loops and using .forEach to make loops. Very good practice lessons.",
  long_form_contents: "I struggle(d) with these concepts. Creating the syntax structure has been confusing for me to grasp. One thing I kept doing was confusing functions with loops.",
  mood: "Learning"
};
const arrayJournalEntry = []
arrayJournalEntry.push(objectsJournalEntry, DOMjournalEntry, gitHubJournalEntry, loopsJournalEntry)

const makeJournalEntryComponent = (entry) => {
    return `
        <div class="journalEntrys">
        <h2>${entry.date}</h2>
        <h3>${entry.concepts_covered}</h3>
        <p>${entry.long_form_contents}</p>
        <p>${entry.mood}</p>
        </div>
    `
}

const journalEntryContainer = document.querySelector('#entryLog')

arrayJournalEntry.forEach( function(journalEntry){
    let allJournalEntries = makeJournalEntryComponent(journalEntry);
    journalEntryContainer.innerHTML += allJournalEntries;
});