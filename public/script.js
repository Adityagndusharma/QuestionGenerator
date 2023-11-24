function generatePaper() {
  let marks = document.getElementById("marksInput").value;
  let easy = document.getElementById("easy").value;
  let medium = document.getElementById("medium").value;
  let hard = document.getElementById("hard").value;

  fetch(`/questions?marks=${marks}&easy=${easy}&medium=${medium}&hard=${hard}`)
    .then((response) => response.json())
    .then((questions) => {
      let questionsHtml = questions
        .map((q, index) => `<p>${index + 1}. ${q.text} [${q.marks} Marks]</p>`)
        .join("");
      document.getElementById("questions").innerHTML = questionsHtml;
    })
    .catch((error) => {
      displayError(error);
    });
}

function displayError(error) {
  // Create a new HTML element to display the error message
  let errorElement = document.createElement("div");
  errorElement.style.color = "red";
  errorElement.innerHTML = `<p>Error: ${error}</p>`;

  // Append the error element to the body or any specific container you want
  document.body.appendChild(errorElement);

  // You may want to remove the error message after a certain period or on a user action
  setTimeout(() => {
    document.body.removeChild(errorElement);
  }, 5000); // Remove error message after 5 seconds (adjust as needed)
}

function printQuestions() {
  window.print();
}
