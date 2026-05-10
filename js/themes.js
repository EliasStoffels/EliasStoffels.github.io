const response = await fetch("../css/themes.json");
const themes = await response.json();
const themeSelect = document.getElementById("theme-select");
const darkModeMql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

if (darkModeMql && darkModeMql.matches) {
  SetTheme("dark");
  themeSelect.value = "dark"
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    SetTheme(newColorScheme);
    themeSelect.value = newColorScheme;
});

for(const key in themes)
    themeSelect.innerHTML += ("<option>"+ key +"</option>")

function ChangeTheme(selectedObject)
{
    SetTheme(selectedObject.value);
}

function SetTheme(theme){
    const selectedTheme = themes[theme];
    if(theme === "random"){
        for(const key in selectedTheme){
            document.querySelector("html").style.setProperty(key,GetRandomColor());
        }
        return;
    }
    for(const key in selectedTheme){
        document.querySelector("html").style.setProperty(key,selectedTheme[key]);
    }
}

function GetRandomColor(){
    // Source - https://stackoverflow.com/a/5365036
    // Posted by ZPiDER, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-05-08, License - CC BY-SA 4.0

    return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
}

window.ChangeTheme = ChangeTheme;