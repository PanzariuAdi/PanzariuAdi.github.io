const inputElement = document.getElementById('commandInput');
const terminal = document.getElementById('response');
const userElement = document.getElementById('user');
const pathElement = document.getElementById('path');
const branchElement = document.getElementById('branch');
const ENTER_KEY = 13;
const ASCII_NAME = `
    ██████╗░░█████╗░███╗░░██╗███████╗░█████╗░██████╗░██╗██╗░░░██╗  ░█████╗░██████╗░██╗
    ██╔══██╗██╔══██╗████╗░██║╚════██║██╔══██╗██╔══██╗██║██║░░░██║  ██╔══██╗██╔══██╗██║
    ██████╔╝███████║██╔██╗██║░░███╔═╝███████║██████╔╝██║██║░░░██║  ███████║██║░░██║██║
    ██╔═══╝░██╔══██║██║╚████║██╔══╝░░██╔══██║██╔══██╗██║██║░░░██║  ██╔══██║██║░░██║██║
    ██║░░░░░██║░░██║██║░╚███║███████╗██║░░██║██║░░██║██║╚██████╔╝  ██║░░██║██████╔╝██║
    ╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚══╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░╚═════╝░  ╚═╝░░╚═╝╚═════╝░╚═╝
`;

let user = userElement.innerText;
let path = pathElement.innerText;
let branch = branchElement.innerText;

let validCommands = ['help', 'clear', 'pwd', 'cd', 'ls', 'about', 'cv', 'init'];


inputElement.addEventListener("input", isValidCommand);
inputElement.addEventListener('keypress', handleKeyPress);


function handleKeyPress(event) {
    if (event.keyCode === ENTER_KEY) {
        const command = inputElement.value.trim();
        executeCommand(command);
    }
}

function executeCommand(command) {
    addInfoLine(command);
    inputElement.value = '';

    switch (command) {
        case 'clear':
            clear();
            break;
        case 'pwd':
            pwd();
            break;
        case 'help':
            help();
            break;
        case 'about':
            about();
            break;
        case 'cv':
            cv();
            break;
        case 'cd':
            cd();
            break;
        case 'ls':
            ls();
            break;
        case 'init':
            showInitialMessage();
            break;
    }

    terminal.scrollIntoView(false);
    window.scrollTo(0, terminal.height);
}

function addInfoLine(command) {
    let result = document.createElement("div");
    result.setAttribute("class", "command");

    let localUser = document.createElement("p");
    localUser.setAttribute("class", "infoLine user");
    localUser.innerHTML += user;
    result.appendChild(localUser);


    let localPath = document.createElement("p");
    localPath.setAttribute("class", "infoLine path");
    localPath.innerHTML += path;
    result.appendChild(localPath);

    let localBranch = document.createElement("p");
    localBranch.setAttribute("class", "infoLine branch");
    localBranch.innerHTML += branch;
    result.appendChild(localBranch);

    let cmd = document.createElement("p");
    cmd.setAttribute("class", "infoLine");
    cmd.innerHTML += command;
    result.appendChild(cmd);

    terminal.appendChild(result);
}

function showInitialMessage() {
    let result = document.createElement("pre");
    result.style.height = "25%";

    result.innerHTML += ASCII_NAME;
    result.innerHTML += "<br>"
    result.innerHTML += "    Type help and hit enter to see all the commands."
    terminal.appendChild(result);
}

showInitialMessage();

function isValidCommand() {
    if (validCommands.includes(inputElement.value)) {
        inputElement.style.color = "green";
    } else {
        inputElement.style.color = "red";
    }
}


function clear() {
    terminal.innerHTML = '';
}

function pwd() {
    let result = document.createElement("div");

    result.innerHTML += "Currently in working...";
    terminal.appendChild(result);
}

function help() {
    const result = document.createElement("div");
    const ul = document.createElement("ul");
    ul.style.listStyle = "none";

    validCommands.forEach(cmd => {
        const li = document.createElement("li");
        li.innerHTML = cmd;
        ul.appendChild(li);
    });

    result.appendChild(ul);
    terminal.appendChild(result);
}

function about() {
    let result = document.createElement("div");
    let description = document.createElement("p");
    description.innerHTML = "Hi, my name is Panzariu Ionut-Adrian and I am currently working as a Software Developer at Endava.";
    result.appendChild(description);

    terminal.appendChild(result);
}

function cv() {
    let result = document.createElement("div");
    result.innerHTML += "<p>Here is my CV</p>";
    terminal.appendChild(result);
}

function cd() {
    path += "/folder";
    document.getElementById("path").innerText = path;
}

function ls() {
    let result = document.createElement("div");
    result.innerHTML += "<p>TO BE IMPLEMENTED. DO NOT KNOW WHAT TO DO WITH THIS YET.</p>";
    terminal.appendChild(result);
}

