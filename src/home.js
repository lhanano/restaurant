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

    static addTitlePage() {
        const content = document.querySelector('#content');
        const newDiv = document.createElement('div');
        const newSpan = document.createElement('span');

        newDiv.classList.add('welcome');
        newSpan.classList.add('title');
        newSpan.textContent = 'marrakech la';
        newDiv.appendChild(newSpan);
        content.appendChild(newDiv);
    }

    static addSection(order, text) {
        const content = document.querySelector('#content');
        const newSection = document.createElement('section');
        const newP = document.createElement('p');

        newSection.classList.add('section');
        newSection.classList.add(order);
        newP.textContent = text;
        newSection.appendChild(newP);
        content.appendChild(newSection);
    }

    static addDiv(order, text) {
        const content = document.querySelector('#content');
        const newDiv = document.createElement('div');
        const newDiv2 = document.createElement('div');
        const newSpan = document.createElement('span');

        newDiv.classList.add('image');
        newDiv.classList.add(order);
        newDiv2.classList.add('divText');
        newSpan.textContent = text;
        newDiv2.appendChild(newSpan);
        newDiv.appendChild(newDiv2);
        content.appendChild(newDiv);
    }

    static addMenu(text) {
        const content = document.querySelector('#content');
        const newDiv = document.createElement('div');
        const newDiv2 = document.createElement('div');
        const newP = document.createElement('p');
        const newImage1 = document.createElement('img');
        const newImage2 = document.createElement('img');
        const newImage3 = document.createElement('img');

        newDiv.classList.add('menuPage');
        newDiv2.classList.add('menuText');
        newP.textContent = text;
        newImage1.src = '../dist/images/img3.jpg';
        newImage1.classList.add('img1');
        newImage2.src = '../dist/images/img1.jpg';
        newImage2.classList.add('img2');
        newImage3.src = '../dist/images/img2.jpg';
        newImage3.classList.add('img3');
        newDiv2.appendChild(newP);
        newDiv.appendChild(newDiv2);
        content.appendChild(newImage1);
        content.appendChild(newImage2);
        content.appendChild(newDiv);
        content.appendChild(newImage3);
    }

}

UI.addTitlePage();
UI.addSection('s1', 'the best eating in morocco happens at home');
UI.addSection('s2', 'we welcome you to ours');
UI.addDiv('d');
UI.addDiv('d1', 'a garden of eden in the city');
UI.addDiv('d');
UI.addSection('s3', 'moroccan cooking techniques applied to locally sourced food grown in la');
UI.addMenu(` ---seasonal menu--- \n
 mediteranian chopped salad \n couscous with seven vegetables \n khubz - flat bread \n stewed lentils \n kalinti - chickpea quiche
 seffa medfouna - vermicelli, saffron, almonds, raisins
 zalouk - whole roasted eggplants, tomatoes, garlic
 makouda - deep-fried potato balls with spicy sauce
 brochettes - chicken or lamb skewers \n fish chermoula - grilled fish in mix of herbs and spices
 tagine with dried apricots - stew with vegetables and traditional spices
 chicken tagine - stew with vegetables and traditional spices
 bastilla - chicken pie
 chicken rfissa - stew with saffron, ras el hanout, fenugreek \n mechoui - lamb slow cooked over fire pit`);
UI.addDiv('d2', 'experience the true welcome of morocco');
UI.addSection('s5', 'located in west la, email us, hours: mon-sun 4pm-2am');
