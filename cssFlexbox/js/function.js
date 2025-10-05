function header() {
    const header = document.getElementById('header');
    header.innerHTML = '<h1>Header</h1>';
}

function menu() {
    const menu = document.getElementById('menu');
    menu.innerHTML = `
    <ul class="space-y-4"> 
        <li><a href="#Зима" class="text-gray-700 font-semibold hover:text-blue-600">Зима</a></li>
        <li><a href="#Лето" class="text-gray-700 font-semibold hover:text-blue-600">Лето</a></li>
        <li><a href="#Весна" class="text-gray-700 font-semibold hover:text-blue-600">Весна</a></li>
        <li><a href="#Осень" class="text-gray-700 font-semibold hover:text-blue-600">Осень</a></li>
    </ul>`
}

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
    menu();
    content();
    footer();
});