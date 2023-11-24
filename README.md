# QuestionGenerator

This repository contains the source code for a Question Paper Generator application. The application is designed to store a variety of questions in a Question Store and generate question papers based on specified criteria.

Features
Question Store: The application stores questions with attributes such as question text, subject, topic, difficulty, and marks.

Question Paper Generation: The Question Paper Generator can create a question paper based on the total marks and the distribution of marks according to difficulty levels.

Getting Started
Follow these steps to set up and run the Question Paper Generator application on your local computer.

Prerequisites
Node.js installed on your machine.
Installation
Download the Repository:

Click on the "Code" button on this repository's GitHub page.
Choose "Download ZIP" to download the repository to your local machine.
Extract the contents of the ZIP file to a location of your choice.
Open in Visual Studio Code:

Open Visual Studio Code (VS Code).
Navigate to "File" > "Open Folder" and select the folder where you extracted the repository.
Initialize NPM:

Open a new terminal in VS Code.
Run the following command to initialize the project and create a package.json file:
bash
Copy code
npm init
Install Dependencies:

While still in the terminal, run the following command to install the required dependencies (express):
bash
Copy code
npm install express
Run the Server:

After installing the dependencies, run the following command to start the server:
bash
Copy code
node server.js
Access the Application:

Open your web browser and navigate to http://localhost:3000 to access the Question Paper Generator application.
Usage
Use the Question Paper Generator to input questions into the Question Store.
Specify the total marks and the distribution of marks based on difficulty levels.
Generate a question paper based on the provided criteria.
