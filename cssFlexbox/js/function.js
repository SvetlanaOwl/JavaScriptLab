function header() {
    const header = document.getElementById('header');
    header.innerHTML = '<h1>Header</h1>';
}

async function loadMenu() {
    try {
        const menuUrl = new URL('./menu.json', import.meta.url); 
        const response = await fetch(menuUrl);
        if (!response.ok)throw new Error(`'Failed to fetch ${menuUrl} - ${response.statusText}`); 
        const data = await response.json();
        const menuElement = document.getElementById('menu');
         if (!menuElement) return;
        menuElement.innerHTML = ''; 
        data.menuItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = item.name; 
            a.href = item.url; 
            li.appendChild(a);
            menuElement.appendChild(li);
        });
    } catch (error) {
        console.errror("Failed to load menu:", error);
        const menuElement = document.getElementById("menu");
        if (menuElement) menuElement.innerHTML = '<li> class="text-red-500">Menu failed to load</li>';
    }
}
document.addEventListener('DOMContentLoaded', loadMenu);

function content() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h3 class="text-2xl font-bold mb-4 text-orange-300">Осень</h3>
            <p class="text-gray-700">Очаровательная осень в сентябре, 
            задумчивая осень в октябре, печальным взглядом провожаем клин гусей, 
            а в ноябре холодными дождями смывает пыль с дорог и зиму ждёт. <br>
            А что для тебя осень?</p>
    `;
}

function footer() {
    const footer = document.getElementById('footer');
    footer.innerHTML = '<p>Footer</p>';
}

document.addEventListener("DOMContentLoaded", function () {
    header();
    content();
    footer();
});