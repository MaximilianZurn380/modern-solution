let farge = document.body;

let typer = document.getElementById("typebox");
let container = document.getElementById("container");
let textAdd = document.getElementById("linetext");

let hideMenu = document.getElementById("hidemenu");
let toggleMenu = document.getElementById("togglemenu");

let configMenu = document.getElementById("textmenu");
let changeMenu = document.getElementById("changemenu");

document.getElementById("mainbutton").addEventListener("click", function ()
{
    let mainMenu = document.getElementById("mainmenu");
    if (mainMenu.style.display === "none")
    {
        mainMenu.style.display = "block";
        document.getElementById("mainbutton").textContent = "Close menu";
    } else {
        mainMenu.style.display = "none";
        document.getElementById("mainbutton").textContent = "Open menu";
    }
});

document.getElementById("choose").addEventListener("click", function ()
{
    let chosen = typer.value;
    farge.style.backgroundColor = chosen;
});

toggleMenu.addEventListener("click", function ()
{
    if (hideMenu.style.display === "none")
    {
        hideMenu.style.display = "block";
        toggleMenu.textContent = "Cose line menu";
    } else {
        hideMenu.style.display = "none";
        toggleMenu.textContent = "Make a new line";
    }
});

changeMenu.addEventListener("click", function ()
{
    if (configMenu.style.display === "none")
    {
        configMenu.style.display = "block";
        changeMenu.textContent = "Close configuration menu";
    } else {
        configMenu.style.display = "none";
        changeMenu.textContent = "Text configuration";
    }
});

document.getElementById("addtext").addEventListener("click", function ()
{
    let userText = textAdd.value;
    let selectedType = document.getElementById("texttype").value;
    if (userText != "") {
        let newText = document.createElement(selectedType);
        newText.textContent = userText;
        container.appendChild(newText);
        textAdd.value = "";
    }
});

document.getElementById("opencolor").addEventListener("click", function ()
{
    let colorMenu = document.getElementById("colormenu");
    if (colorMenu.style.display === "none")
    {
        colorMenu.style.display = "block";
        document.getElementById("opencolor").textContent = "Close color menu";
    } else {
        colorMenu.style.display = "none";
        document.getElementById("opencolor").textContent = "Change color";
    }
});

document.getElementById("changecolor").addEventListener("click", function ()
{
    let chosenColor = document.getElementById("textcolor").value;
    let textElements = document.getElementById("container").children;

    for (let i = 0; i < textElements.length; i++)
    {
        textElements[i].style.color = chosenColor;
    }
});

document.getElementById("openfont").addEventListener("click", function ()
{
    let fontMenu = document.getElementById("fontmenu");
    if (fontMenu.style.display === "none")
    {
        fontMenu.style.display = "block"
        document.getElementById("openfont").textContent = "Close font menu";
    } else {
        fontMenu.style.display = "none";
        document.getElementById("openfont").textContent = "Font menu";
    }
});

document.getElementById("changefont").addEventListener("click", function ()
{
    let selectedFont = document.getElementById("fontselect").value;
    let textElements = document.getElementById("container").children;

    for (let i = 0; i < textElements.length; i++)
    {
        textElements[i].style.fontFamily = selectedFont;
    }
});