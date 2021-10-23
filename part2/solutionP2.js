/**
 * document.querySelector(id/class) => Selects ONE elements with id/class name/css selector
 * document.getElementById(id) => Selects ONE element with id
 * document.getElementsByClassName(class) =>
 */
// let date = new Date();
let insertButton = document.querySelector("#insertText");

let notesArray = [];

// add value.note if extra features
let deleteNote = function (noteToRemove, noteTime, currNode) {
  notesArray = notesArray.filter((value) => {
    // false to remove
    return value.note !== noteToRemove && value.time !== noteTime;
  });
  console.log(notesArray);
  currNode.parentNode.remove();
};

let clearNoteContainer = function () {
  let noteContainer = document.querySelector("#notes");
  while (noteContainer.firstChild) {
    noteContainer.removeChild(noteContainer.firstChild);
  }
};

// first thing to do
insertButton.addEventListener("click", () => {
  let noteText = document.querySelector("#noteText").value;
  // notesArray.push(noteText);
  // 👇if got time to add quality improvements else 👆
  notesArray.push({
    note: noteText,
    time: new Date().toUTCString(),
  });

  let noteContainer = document.querySelector("#notes");
  clearNoteContainer();

  notesArray.forEach((value) => {
    // Initialize variables we need
    let noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    let noteTextElement = document.createElement("h3");
    let noteDelete = document.createElement("button");
    // 👇if got time to add quality improvements
    let noteTimeElement = document.createElement("p");

    // 👇if got time to add quality improvements
    // Add text to p (time)
    noteTimeElement.appendChild(document.createTextNode(value.time));
    noteDiv.appendChild(noteTimeElement);

    // Add text to h1 (the note)
    // value by default
    noteTextElement.appendChild(document.createTextNode(`${value.note}`));
    noteDiv.appendChild(noteTextElement);

    // Delete button
    noteDelete.textContent = "❌";
    // Can be done with event delegation
    noteDelete.addEventListener("click", () => {
      // if implement time, change below to [1], [0] originally
      let currNoteText = noteDelete.parentNode.childNodes[1].textContent;
      let currNoteTime = noteDelete.parentNode.childNodes[0].textContent;
      deleteNote(currNoteText, currNoteTime, noteDelete);
    });
    noteDiv.appendChild(noteDelete);

    // Adds the note item to the beginning of the div
    noteContainer.prepend(noteDiv);
  });
});

let textArea = document.querySelector("#noteText");
textArea.addEventListener("keyup", (key) => {
  if (key.keyCode === 13) {
    document.querySelector("#insertText").click();
  }
});
