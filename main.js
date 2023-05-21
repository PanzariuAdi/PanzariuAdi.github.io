const inputElement = document.getElementById('commandInput');
const terminal = document.getElementById('responses');
const userElement = document.getElementById('user');
const pathElement = document.getElementById('path');
const branchElement = document.getElementById('branch');
const VALID_COMMANDS = ['help', 'clear', 'pwd', 'cd', 'ls', 'about', 'cv', 'banner'];
const ENTER_KEY = 13;
const ARROW_UP = 38;
const ASCII_NAME = `
    ██████╗░░█████╗░███╗░░██╗███████╗░█████╗░██████╗░██╗██╗░░░██╗  ░█████╗░██████╗░██╗
    ██╔══██╗██╔══██╗████╗░██║╚════██║██╔══██╗██╔══██╗██║██║░░░██║  ██╔══██╗██╔══██╗██║
    ██████╔╝███████║██╔██╗██║░░███╔═╝███████║██████╔╝██║██║░░░██║  ███████║██║░░██║██║
    ██╔═══╝░██╔══██║██║╚████║██╔══╝░░██╔══██║██╔══██╗██║██║░░░██║  ██╔══██║██║░░██║██║
    ██║░░░░░██║░░██║██║░╚███║███████╗██║░░██║██║░░██║██║╚██████╔╝  ██║░░██║██████╔╝██║
    ╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚══╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░╚═════╝░  ╚═╝░░╚═╝╚═════╝░╚═╝ v1.2
`;
const NAME = "# Panzariu Ionut-Adrian";
const ABOUT_MSG = "Welcome to my portfolio website! I am a passionate Software Developer with two years of experience.";
const CONNECT_MSG = "Let's connect and discuss potential collaborations!";
const TO_BE_IMPLEMENTED = "To be implemented ...";

let user = userElement.innerText;
let path = pathElement.innerText;
let branch = branchElement.innerText;
let commands = [];

inputElement.addEventListener("input", isValidCommand);
inputElement.addEventListener('keypress', handleKeyPress);
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('mouseup', handleClick);
document.scrollIntoView = false;
 
executeCommand("banner");

function isValidCommand() {
    if (VALID_COMMANDS.includes(inputElement.value)) {
        inputElement.style.color = "green";
    } else {
        inputElement.style.color = "red";
    }
}

function handleKeyPress(event) {
    if (event.keyCode === ENTER_KEY) {
        const command = inputElement.value.trim();
        executeCommand(command);
        if (command != '') {
            commands.push(command);
        }
    }
}

function handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'l') {
        event.preventDefault();
        clear();
    }

    if (event.keyCode === ARROW_UP) {
        if (commands.length === 0)
            return;
        inputElement.value = commands[commands.length - 1];
        inputElement.setSelectionRange(inputElement.value.length, inputElement.value.length);
        inputElement.focus();
    }
}

function handleClick() {
    inputElement.focus();
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
        case 'banner':
            banner();
            break;
    }

    terminal.scrollTo(0, terminal.scrollHeight);
}

function addInfoLine(command) {
    let result = document.createElement("div");
    result.setAttribute("class", "command");

    addParagraphToComponent(result, user, "infoLine user");
    addParagraphToComponent(result, path, "infoLine path");
    addParagraphToComponent(result, branch, "infoLine branch");
    addParagraphToComponent(result, command, "infoLine");

    terminal.appendChild(result);
}

function banner() {
    let result = document.createElement("pre");
    result.style.height = "25%";

    result.innerHTML += ASCII_NAME;
    result.innerHTML += "<br>"
    result.innerHTML += "    Type <i>help</i> and hit enter to see all the commands."
    terminal.appendChild(result);
}

function clear() {
    terminal.innerHTML = '';
}

function pwd() {
    let result = document.createElement("div");
    let description = document.createElement("p");
    description.innerHTML = path;
    result.appendChild(description);
    terminal.appendChild(result);
}

function help() {
    const result = document.createElement("div");
    result.innerText += "Available commands: "
    const description = document.createElement("p");

    VALID_COMMANDS.forEach((cmd, index) => {
        description.innerText += cmd;
        if (index != VALID_COMMANDS.length - 1) {
            description.innerText += ", ";
        }
    });

    result.appendChild(description);
    terminal.appendChild(result);
}

function about() {
    let result = document.createElement("div");
    result.setAttribute("class", "response");
    result.setAttribute("id", "about");

    addParagraphToComponent(result, NAME, "info");
    addParagraphToComponent(result, ABOUT_MSG, "info");
    addParagraphToComponent(result, CONNECT_MSG, "info");
}

function cv() {
    addDivAndParagraphToTerminal(TO_BE_IMPLEMENTED);
}

function cd() {
    addDivAndParagraphToTerminal(TO_BE_IMPLEMENTED);
}

function ls() {
    addDivAndParagraphToTerminal(TO_BE_IMPLEMENTED);
}

function addDivAndParagraphToTerminal(message) {
    let result = document.createElement("div");
    result.setAttribute("class", "response");

    let description = document.createElement("p");
    description.innerText = message;

    result.appendChild(description);
    terminal.appendChild(result);
}

function addParagraphToComponent(component, message, className) {
    let description = document.createElement("p");

    description.innerText = message;
    description.setAttribute("class", className);

    component.appendChild(description);
    terminal.appendChild(component);
}

