const inputElement = document.getElementById('commandInput');
const lineCommand = document.getElementById('lineCommand');
const terminal = document.getElementById('response');
const userElement = document.getElementById('user');
const pathElement = document.getElementById('path');
const branchElement = document.getElementById('branch');

let user = userElement.innerText;
let path = pathElement.innerText;
let branch = branchElement.innerText;

const ENTER_KEY = 13;

let validCommands = ['help', 'clear', 'pwd', 'about', 'cv'];

function showInitialMessage() {
    let result = document.createElement("pre");
    result.style.height = "150px";

    result.innerHTML += `
        
        ██████╗░░█████╗░███╗░░██╗███████╗░█████╗░██████╗░██╗██╗░░░██╗  ░█████╗░██████╗░██╗
        ██╔══██╗██╔══██╗████╗░██║╚════██║██╔══██╗██╔══██╗██║██║░░░██║  ██╔══██╗██╔══██╗██║
        ██████╔╝███████║██╔██╗██║░░███╔═╝███████║██████╔╝██║██║░░░██║  ███████║██║░░██║██║
        ██╔═══╝░██╔══██║██║╚████║██╔══╝░░██╔══██║██╔══██╗██║██║░░░██║  ██╔══██║██║░░██║██║
        ██║░░░░░██║░░██║██║░╚███║███████╗██║░░██║██║░░██║██║╚██████╔╝  ██║░░██║██████╔╝██║
        ╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚══╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░╚═════╝░  ╚═╝░░╚═╝╚═════╝░╚═╝
    `;
    terminal.appendChild(result);

}

showInitialMessage();

inputElement.addEventListener("input", isValidCommand);

function isValidCommand() {
    if (validCommands.includes(inputElement.value)) {
        inputElement.style.color = "green";
    } else {
        inputElement.style.color = "red";
    }
}

function addInfoLine(command) {
    let result = document.createElement("div");
    let info = document.createElement("p");

    info.innerHTML += user + " :: ";
    info.innerHTML += path + " |";
    info.innerHTML += branch + "|";
    info.innerHTML += ` ^ ${command}`;
    result.appendChild(info);
    terminal.appendChild(result);
    
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
    }


    window.scrollTo(0, document.body.scrollHeight);
}

function clear() {
    terminal.innerHTML = '';
}

function pwd() {
    let result = document.createElement("div");

    result.innerHTML += "BA DA CE PLM VREI";
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

function handleKeyPress(event) {
    if (event.keyCode === ENTER_KEY) {
        const command = inputElement.value.trim();
        executeCommand(command);
    }
}

inputElement.addEventListener('keypress', handleKeyPress);
