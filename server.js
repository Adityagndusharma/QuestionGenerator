const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.static("public")); 

app.get("/questions", (req, res) => {
  const totalMarks = parseInt(req.query.marks);
  const easy = parseInt(req.query.easy);
  const medium = parseInt(req.query.medium);
  const hard = parseInt(req.query.hard);

  try {
    if (easy * 2 + medium * 5 + hard * 10 !== totalMarks) {
      throw new Error("Distribution not correct");
    }

    let selectedQuestions = [];
    let easyMarks = 0,
      mediumMarks = 0,
      hardMarks = 0;

    // Read easy questions
    fs.readFile("easyQuestions.json", (err, data) => {
      if (err) res.status(500).send("Error in reading easy questions file");
      let questions = JSON.parse(data).questions;
      // Easy Question -> 2 marks
      while (easyMarks < easy * 2) {
        let randomQuestion =
          questions[Math.floor(Math.random() * questions.length)];
        if (easyMarks + randomQuestion.marks <= easy * 2) {
          selectedQuestions.push(randomQuestion);
          easyMarks += randomQuestion.marks;
        }
      }

      // Read medium questions
      fs.readFile("mediumQuestions.json", (err, data) => {
        if (err) res.status(500).send("Error in reading medium questions file");
        questions = JSON.parse(data).questions;
        // Medium Question -> 5 marks
        while (mediumMarks < medium * 5) {
          let randomQuestion =
            questions[Math.floor(Math.random() * questions.length)];
          if (mediumMarks + randomQuestion.marks <= medium * 5) {
            selectedQuestions.push(randomQuestion);
            mediumMarks += randomQuestion.marks;
          }
        }

        // Read hard questions
        fs.readFile("hardQuestions.json", (err, data) => {
          if (err) res.status(500).send("Error in reading hard questions file");
          questions = JSON.parse(data).questions;
          // Hard Question -> 10 marks
          while (hardMarks < hard * 10) {
            let randomQuestion =
              questions[Math.floor(Math.random() * questions.length)];
            if (hardMarks + randomQuestion.marks <= hard * 10) {
              selectedQuestions.push(randomQuestion);
              hardMarks += randomQuestion.marks;
            }
          }

          res.json(selectedQuestions);
        });
      });
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));