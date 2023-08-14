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
const LINKEDIN_PROFILE = "https://www.linkedin.com/in/adipnz";
const GITHUB_PROFILE = "https://github.com/PanzariuAdi";
const CV_GITHUB = "https://github.com/PanzariuAdi/CV/blob/main/Panzariu_Ionut_Adrian.pdf";
const NAME = "# Panzariu Ionut-Adrian";
const IMAGE = "./images/me.jpg"
const ABOUT_MSG = "Java Software Developer since June 2022 based in Iasi, Romania.";
const CONNECT_MSG = "Let's connect and discuss potential collaborations!";
const OPEN_LINKEDIN = "Type open linkedin to see my linkedin profile.";
const OPEN_GITHUB = "Type open github to see my github profile.";
const TO_BE_IMPLEMENTED = "To be implemented ...";
const SOCIAL_MEDIA_MSG = "Write linkedin/github/cv to see my profiles.";
const inputElement = document.getElementById('commandInput');
const terminal = document.getElementById('responses');
const userElement = document.getElementById('user');
const pathElement = document.getElementById('path');
const branchElement = document.getElementById('branch');
const command = document.getElementById('command');
const VALID_COMMANDS = ['help', 'clear', 'about', 'banner', 'github', 'linkedin', 'cv', 'pwd', 'cd', 'ls', 'whoami', 'date'];


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
    let value = inputElement.value.trim();

    if (VALID_COMMANDS.includes(value)) {
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
        case 'cd':
            cd();
            break;
        case 'ls':
            ls();
            break;
        case 'banner':
            banner();
            break;
        case 'linkedin':
            openUrl('linkedin');
            break;
        case 'github':
            openUrl('github');
            break;
        case 'cv':
            openUrl('cv');
            break;
        case 'whoami':
            whoami();
            break;
        case 'date':
            getDate();
            break;
    }

    inputElement.value = '';
    terminal.scrollIntoView(false);
}

async function getIp() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.log(`Error fetching IP:`, error);
    }
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

    let cmds = '';
    VALID_COMMANDS.forEach((cmd, index) => {
        cmds += cmd;
        if (index != VALID_COMMANDS.length - 1) {
            cmds += ", ";
        }
    });

    addParagraphToComponent(result, cmds, "");
    addParagraphToComponent(result, "[ctrl + l] clear screen\n[tab] autocomplete", "");
    terminal.appendChild(result);
}

function about() {
    let result = document.createElement("div");
    result.setAttribute("class", "response");
    result.setAttribute("id", "about");

    addParagraphToComponent(result, NAME, "info");
    addImageToComponent(result, IMAGE, "info");
    addParagraphToComponent(result, ABOUT_MSG, "info");
    addParagraphToComponent(result, CONNECT_MSG, "info");
    addParagraphToComponent(result, SOCIAL_MEDIA_MSG, "info");

}

function openUrl(parameter) {
    if (parameter == 'github') {
        window.open(GITHUB_PROFILE);
    }

    if (parameter == 'linkedin') {
        window.open(LINKEDIN_PROFILE);
    }

    if (parameter == 'cv') {
        window.open(CV_GITHUB);
    }
    
}


function whoami() {
    getIp()
        .then((data) => {
            let result = document.createElement("div");
            result.setAttribute("class", "response");

            let description = document.createElement("p");
            description.innerText = data;

            result.appendChild(description);
            terminal.appendChild(result);
        })
        .catch((reason) => console.log("Message : " + reason.message));
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

function getDate() {
    const date = new Date();
    addDivAndParagraphToTerminal(date);
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

function addImageToComponent(component, message, className) {
    let image = document.createElement("img");

    image.src = message;
    image.setAttribute("class", className);
    image.setAttribute("width", 300);
    image.setAttribute("height", 300);
    image.style['border-radius'] = "25px";
    image.style['object-fit'] = "cover";

    component.appendChild(image);
    terminal.appendChild(component);

}