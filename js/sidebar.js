const sideBar = document.querySelector(".side-bar");

for(const header of document.querySelectorAll('h1')) {
    sideBar.innerHTML += '<a href="#' + header.id + '" onclick="toggleSideBar()">' + header.innerHTML + '</a>';
}

function toggleSideBar() {
    const sideBar = document.querySelector(".side-bar");
    sideBar.classList.toggle("hidden");
    const sideBarButton = document.querySelector(".side-bar-icon");
    sideBarButton.classList.toggle("active");
}

window.toggleSideBar = toggleSideBar;