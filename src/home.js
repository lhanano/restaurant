class UI {
    static addTitle(text) {
        const content = document.querySelector('#content');
        const newText = document.createElement('div');

        newText.textContent = text;
        newText.classList.add('title');
        content.appendChild(newText);
    }

    static addButton(text) {
        const content = document.querySelector('#content');
        const newText = document.createElement('div');

        newText.textContent = text;
        newText.classList.add('button');
        newText.classList.add(text);
        content.appendChild(newText);
    }
}

UI.addTitle('marrakech la');
UI.addButton('menu');
UI.addButton('contact');
UI.addButton('about');

