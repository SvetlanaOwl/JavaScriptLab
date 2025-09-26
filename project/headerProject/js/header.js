function generateMenu() {
    const menu = document.getElementById("headerContent"); //ID должен совпадать с тем что в HTML
    menu.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 class="text-xl font-bold text-blue-600">My Website</h1>
            <ul class="flex space-x-6">
                <li><a href="main.html" class="text-gray-700 hover:text-blue-500">Home</a></li>
                <li><a href="about.html" class="text-gray-700 hover:text-blue-500">About</a></li>
                <li><a href="contact.html" class="text-gray-700 hover:text-blue-500">Contact</a></li>
            </ul>
        </div>
    `;
};