let scenarios = [];
let isAdmin = false;

window.addEventListener("message", function(event) {

    if (event.data.action === "open") {
        document.getElementById("container").style.display = "block";
        scenarios = event.data.scenarios;
        isAdmin = event.data.admin;
        render();
    }

    if (event.data.action === "close") {
        document.getElementById("container").style.display = "none";
    }
});

function render() {
    const list = document.getElementById("list");
    list.innerHTML = "";

    scenarios.forEach(sc => {
        let div = document.createElement("div");
        div.className = "item";
        div.innerText = sc;

        div.onclick = () => {
            document.getElementById("scenarioInput").value = sc;
        };

        list.appendChild(div);
    });
}

function getScenario() {
    return document.getElementById("scenarioInput").value;
}

/* CORE */
function preview() {
    if (!isAdmin) return;

    fetch(`https://${GetParentResourceName()}/preview`, {
        method: "POST",
        body: JSON.stringify({ scenario: getScenario() })
    });
}

function stopScenario() {
    fetch(`https://${GetParentResourceName()}/stop`, {
        method: "POST"
    });
}

function copyScenario() {
    fetch(`https://${GetParentResourceName()}/copy`, {
        method: "POST",
        body: JSON.stringify({ scenario: getScenario() })
    });
}

function closeUI() {
    document.getElementById("container").style.display = "none";

    fetch(`https://${GetParentResourceName()}/close`, {
        method: "POST"
    });
}

/* ESC */
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeUI();
});

/* DRAG */
let panel = document.getElementById("panel");
let dragbar = document.getElementById("dragbar");

let dragging = false;
let offsetX = 0;
let offsetY = 0;

dragbar.addEventListener("mousedown", (e) => {
    dragging = true;
    offsetX = e.clientX - panel.offsetLeft;
    offsetY = e.clientY - panel.offsetTop;
});

document.addEventListener("mouseup", () => dragging = false);

document.addEventListener("mousemove", (e) => {
    if (!dragging) return;

    panel.style.position = "absolute";
    panel.style.left = (e.clientX - offsetX) + "px";
    panel.style.top = (e.clientY - offsetY) + "px";
});