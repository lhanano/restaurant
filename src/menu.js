class nav {
    static createDropDown() {
        const content = document.querySelector('#content');
        const mainDiv = document.createElement('div');
        const hamburger = document.createElement('div');
        const line1 = document.createElement('div');
        const line2 = document.createElement('div');
        const line3 = document.createElement('div');
        const dropDownDiv = document.createElement('div');
        const dropDownMenu = document.createElement('div');
        const dropDownContact = document.createElement('div');
        const aMenu = document.createElement('a');
        const aContact = document.createElement('a');
    
        mainDiv.classList.add('navMainDiv');
        hamburger.classList.add('hamburger');
        line1.classList.add('hamburgerLine');
        line2.classList.add('hamburgerLine');
        line3.classList.add('hamburgerLine');
        dropDownDiv.classList.add('dropDownDiv');
        dropDownMenu.classList.add('dropDownMenu');
        dropDownContact.classList.add('dropDownContact');
        
        aMenu.textContent = 'Menu';
        aMenu.href = '#menuAnchor';
    
        aContact.textContent = 'Contact';
        aContact.href = '#contactAnchor';

        dropDownMenu.appendChild(aMenu);
        dropDownContact.appendChild(aContact);
        dropDownDiv.appendChild(dropDownMenu);
        dropDownDiv.appendChild(dropDownContact);
        hamburger.appendChild(line1);
        hamburger.appendChild(line2);
        hamburger.appendChild(line3);
        mainDiv.appendChild(hamburger);
        mainDiv.appendChild(dropDownDiv);
        content.appendChild(mainDiv);
    } 

    static createAnchorIds() {
        const menuPage = document.querySelector('.menuPage');
        const contactPage = document.querySelector('.s5');

        menuPage.setAttribute('id', 'menuAnchor');
        contactPage.setAttribute('id', 'contactAnchor');
    }
    
}

nav.createAnchorIds();
nav.createDropDown();