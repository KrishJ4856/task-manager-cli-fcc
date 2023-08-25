# Task Manager CLI Tool
This is a task manager CLI tool built using NodeJS and CommanderJS.

## Setting up the tool
To set up this tool directly from this repository, you need to follow these steps:
- After cloning it, run `npm install` command to install all dependencies
- Next, create a `.env` file in the root directory of the project and add a variable called `MONGO_URI=` in the file and assign your MongoDB connection string to it
- The last step is to install it globally in your system using the following command: `npm i -g .`

## Supported Commands
You can create CRUD (Create, Read, Update and Delete) Operations using this cli tool. Here are a list of commands supported by the tool:
1. `todo add` - To create one or multiple new task,
2. `todo read` - To read all the existing tasks,
3. `todo update` - To update a specific task, and
4. `todo delete` - To delete a specific task.

Note:
- To check for the version number, run this command: `todo -V` or `todo --version`.
- For help, run this command: `todo -h` or `todo --help`.

## How to use the tool - Video Tutorials

### Add Tasks
https://github.com/KrishJ4856/task-manager-cli-fcc/assets/114345816/6239511b-3012-4f44-87ed-da78a4630111

### Read Tasks
https://github.com/KrishJ4856/task-manager-cli-fcc/assets/114345816/bdb035ff-339e-4371-8eab-6754b1404015

### Update Tasks
https://github.com/KrishJ4856/task-manager-cli-fcc/assets/114345816/40846098-fd0f-4b83-8d95-ee32d7db76ee

### Delete Tasks
https://github.com/KrishJ4856/task-manager-cli-fcc/assets/114345816/3b745d2c-2dda-483e-a946-6b7d80e1f25d

> **Note:** Both update and delete operations require you to enter the **Todo code** of the task you want to update or delete.
