let insertButton = document.querySelector("#insertText");

let notesArray = [];

let clearNoteContainer = function () {
  let noteContainer = document.querySelector("#notes");
  while (noteContainer.firstChild) {
    noteContainer.removeChild(noteContainer.firstChild);
  }
};

insertButton.addEventListener("click", () => {
  let noteText = document.querySelector("#noteText").value;

  notesArray.push(noteText);

  clearNoteContainer();

  notesArray.forEach((value) => {
    let noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    let noteTextElement = document.createElement("h3");
    let noteDelete = document.createElement("button");

    noteTextElement.appendChild(document.createTextNode(`${value}`));
    noteDiv.appendChild(noteTextElement);

    let noteContainer = document.querySelector("#notes");
    noteContainer.prepend(noteDiv);
  });
});
