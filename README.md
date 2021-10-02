# Task Scheduler (Console)

---
## Downloads
[Repository Link](https://github.com/realFearrr/task-scheduler.git)

---
## General Information
* Dependencies
* * [NodeJS](https://nodejs.org/)

---

## Setup Process
* [Clone or Download this Repository](https://github.com/realFearrr/task-scheduler.git)
* [Download NodeJS](https://nodejs.org)
* Running the Tool
* * Open a terminal
* * Naviage to the directory of the download
* * Execute `npm install`
* * Afterwards, execute `node .` 

---

## FAQ

> I found a bug/I have a suggestion! Where should I put it?

If you found a bug, please open an issue on the GitHub, describe what the bug is, and add
what severity you think the bug is. For suggestions, the process
is similar to that of bugs, however do not add the severity.

> How do I create a task?

You need to be able to edit the code for this.
* Open your IDE of choice
* Edit the `index.js` file.
* * Find the place where it shows:
* * {
* *       time: `13:21`,
* *       day: 3,
* *       TZ: "GMT+7",
* * }
* Simply edit what time, day (numeric), and timezone you want everything to be

> How do I change the task? 
* Open your IDE of choice
* Edit the `index.js` file.
* * Find the lines:
* * "openURL = ``https://youtube.com;"``
* * "cp.spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', ['-new-tab', openURL]);"
* Either remove these lines entirely and remake it yourself OR change the link.
