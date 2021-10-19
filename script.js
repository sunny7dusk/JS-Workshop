/**
 * document.querySelector(id/class) => Selects ONE elements with id/class name/css selector
 * document.getElementById(id) => Selects ONE element with id
 * document.getElementsByClassName(class) =>
 */
let insertButton = document.querySelector("#insertText");

let notesArray = [];

let deleteNote = function (noteToRemove, currNode) {
  let currNoteText = noteToRemove;
  notesArray = notesArray.filter((value) => {
    return value === currNoteText;
  });
  currNode.parentNode.remove();
};

let clearNoteContainer = function () {
  let noteContainer = document.querySelector("#notes");
  while (noteContainer.firstChild) {
    noteContainer.removeChild(noteContainer.firstChild);
  }
};

insertButton.addEventListener("click", () => {
  let noteText = document.querySelector("#noteText").value;
  notesArray.push(noteText);

  let noteContainer = document.querySelector("#notes");
  clearNoteContainer();

  notesArray.forEach((value) => {
    let noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    let noteElement = document.createElement("h1");
    let noteDelete = document.createElement("button");

    // Add text
    noteElement.appendChild(document.createTextNode(`${value}`));
    noteDiv.appendChild(noteElement);

    // Delete button
    noteDelete.textContent = "Delete";
    noteDelete.addEventListener("click", () => {
      let currNoteText = noteDelete.parentNode.childNodes[0].textContent;
      deleteNote(currNoteText, noteDelete);
    });
    noteDiv.appendChild(noteDelete);

    noteContainer.prepend(noteDiv);
  });
});
