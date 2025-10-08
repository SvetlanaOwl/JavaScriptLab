async function loadMenu() {
    try {
        //When used as a module, import.meta.url points to this JS file При использовании в качестве модуля import.meta.url указывает на этот JS-файл
        const menuUrl = new URL('./menu.json', import.meta.url); //meta.url is module-specific and works with file: //it's needed for local files
        //meta.url зависит от модуля и работает с файлами: //он необходим для локальных файлов
        
        // Отправляется асинхронный HTTP-запрос на получение файла меню
        const response = await fetch(menuUrl);
        // Проверка успешности запроса, иначе выбрасывается ошибка
        if (!response.ok)throw new Error(`'Failed to fetch ${menuUrl} - ${response.statusText}`); //handle fetch errors
        // Парсим полученный JSON-ответ в JavaScript-объект
        const data = await response.json();
        // Получаем ссылку на элемент меню в документе
        const menuElement = document.getElementById('menu');
        // Возвращаемся досрочно, если элемент меню не найден
        if (!menuElement) return;
       // Очищаем существующее содержимое меню перед добавлением нового
        menuElement.innerHTML = ''; // clear before append 
        // Проходим циклом по элементам меню и добавляем их в документ
        data.menuItems.forEach(item => {
            // Создаём новый элемент списка (<li>)
            const li = document.createElement('li');
           // Создаём новую гиперссылку (<a>) с именем пункта меню
            const a = document.createElement('a');
            a.textContent = item.name; //safer than innerHTML безопаснее, чем innerHTML
            a.href = item.url; // safer than innerHTML
            // Добавляем ссылку в элемент списка
            li.appendChild(a);
            // Добавляем элемент списка в меню
            menuElement.appendChild(li);
        });
    } catch (error) {
        // Логируем ошибку в консоль
        console.errror("Failed to load menu:", error);
        // Если элемент меню существует, показываем сообщение об ошибке
        const menuElement = document.getElementById("menu");
        if (menuElement) menuElement.innerHTML = '<li> class="text-red-500">Menu failed to load</li>';
    }
}
// Ждём завершения загрузки DOM и запускаем загрузку меню
document.addEventListener('DOMContentLoaded', loadMenu);

