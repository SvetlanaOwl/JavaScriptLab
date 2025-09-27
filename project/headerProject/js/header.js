function generateMenu() {
    const menu = document.getElementById("headerContent"); //ID должен совпадать с тем что в HTML
    menu.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 class="text-xl font-bold text-blue-600">My Website</h1>
            <ul class="flex space-x-6">
                <li><a href="main.html" class="text-gray-700 hover:text-blue-500">Home</a></li>
                <li><a href="about.html" class="text-gray-700 hover:text-blue-500">About</a></li>
                <li><a href="contact.html" class="text-gray-700 hover:text-blue-500">Contact</a></li>
                <button onclick="loginMassage()" class="bd-blue-500 text white px-4 py-2 rounded hover:bd-blue-600">Log in</button>
            </ul>
        </div>
    `;
};

function contactMenu() {
    const menuContact = document.getElementById("contact"); 
    menuContact.innerHTML = `
        <h2 class="text-2xl font-semibold mb-4">Welcome to My Website</h2>
        <p class="text-gray-600">Address: Lesnaya Skazochnaya Street, building No. 13, 
            Dubovaya Roshcha, Magic Land.<br>
            Phone number: 8 11-010-567-83-45<br>
            Email: lesnayaSirena@gmail.com</p>
    `;
};

function aboutMenu() {
    const menuAbout = document.getElementById("about"); 
    menuAbout.innerHTML = `
        <h2 class="text-2xl font-semibold mb-4">Welcome to My Website</h2>
        <p class="text-gray-600">He sky was breathing by the autumn<br>
        The sun was shining not so often,<br>
        And shorter had become the day, <br>
        The groves were getting dull and bare. <br>
        It makes you sad, calms down feelings. <br>
        The fog laid on the bottom lands, <br>
        And in the sky geese caravans <br>
        With cries flied south. Summer’s leaving. <br>
        A boring season at threshold; 	<br>
        November brought first snow and cold..</p>
    `;
};

//Styled modal utilities (uses Tailwind classes - Tailwind is already loaded in your page)
function escapeHtml(str) { //Simple HTML escape to prevent XSS
    return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function showModal(title = "Notice", message = "", options = { html: false}) {
    //Remove any existing modal
    const existing = document.getElementById("customModal");
    if (existing) existing.remove(); //Ensure only one modal at a time

    //Create modal elements
    const modal = document.getElementById("div");
    modal.id = "customModal";
    modal.className = "Fixed inset-0 z-50 flex items-center justify-center";

    modal.innerHTML = `
    <div class="absolute inset-0 bg-black opasity-50"></div>
    <div class="bg-white rounded-lg shadow-lg z-10 nx-w-lg w-full mx-4 overflow-hidden">
        <div class="px-6 py-4 border-b flex justify-between items-center">
            <h3 class="teat-lg font-semibold text-gray-800">${escapeHtml(title)}</h3>
            <button id="modalClose" class="text-grau-500 hover:text-gray-800 text2xl leading-none">&times;</button>
        </div>
        <div class="px-6 py-6 text-sm text-gray-700">${options.html ? message : escapeHtml(message)}</div>
        <div class="px-6 py-4 flex justify-end space-x-2 border-t">
            <button id="modalOk" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">OK</button>
        </div>
    </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("modalClose").addEventListener("click", closeModal);
    document.getElementById("modalOk").addEventListener("click", closeModal);

    function closeModal() {
        const el = document.getElementById("customModal");
        if (el) el.remove();
    }
}
