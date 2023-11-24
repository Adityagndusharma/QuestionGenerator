# Question Paper Generator Application

This repository contains the source code for a user-friendly Question Paper Generator application. The application is designed to store a variety of questions in a Question Store and generate question papers based on specified criteria. Even non-technical users can easily add questions to the system.

## Features

- **Question Store:** The application stores questions with attributes such as question text, subject, topic, difficulty, and marks.

- **User-Friendly Design:** The code is structured to be easily accessible for non-technical users, allowing them to add questions effortlessly.

- **Question Paper Generation:** The Question Paper Generator can create a question paper based on the total marks and the distribution of marks according to difficulty levels.

## Getting Started

Follow these steps to set up and run the Question Paper Generator application on your local computer.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Download the Repository:**
   - Click on the "Code" button on this repository's GitHub page.
   - Choose "Download ZIP" to download the repository to your local machine.
   - Extract the contents of the ZIP file to a location of your choice.

2. **Open in Visual Studio Code:**
   - Open Visual Studio Code (VS Code).
   - Navigate to "File" > "Open Folder" and select the folder where you extracted the repository.

3. **Initialize NPM:**
   - Open a new terminal in VS Code.
   - Run the following command to initialize the project and create a `package.json` file:
     ```bash
     npm init
     ```

4. **Install Dependencies:**
   - While still in the terminal, run the following command to install the required dependencies (express):
     ```bash
     npm install express
     ```

5. **Run the Server:**
   - After installing the dependencies, run the following command to start the server:
     ```bash
     node server.js
     ```

6. **Access the Application:**
   - Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to access the Question Paper Generator application.

## Screenshots

![Screenshot (170)](https://github.com/Adityagndusharma/QuestionGenerator/assets/96620736/3725c6ee-d9cd-42aa-82e8-feb21479161e)

![Screenshot (171)](https://github.com/Adityagndusharma/QuestionGenerator/assets/96620736/3d234bd7-907e-4299-84dc-9e9a43b9be1d)


## Usage

- Use the Question Paper Generator to input questions into the Question Store.
- Specify the total marks and the distribution of marks based on difficulty levels.
- Easy questions are worth 2 marks, medium questions are worth 5 marks, and hard questions are worth 10 marks.

