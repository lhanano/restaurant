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
        const newImage4 = document.createElement('img');
        const newImage3 = document.createElement('img');

        newDiv.classList.add('menuPage');
        newDiv2.classList.add('menuText');
        newP.textContent = text;
        newImage4.src = '../dist/images/img4.jpg';
        newImage4.classList.add('img4');
        newImage3.src = '../dist/images/img2.jpg';
        newImage3.classList.add('img3');
        newDiv.appendChild(newImage4);
        newDiv2.appendChild(newP);
        newDiv.appendChild(newDiv2);
        /*
        content.appendChild(newImage1);
        content.appendChild(newImage2);
        */
        newDiv.appendChild(newImage3);
        content.appendChild(newDiv);
        
    }

}

UI.addTitlePage();
UI.addSection('s1', 'the best eating in morocco happens at home');
UI.addSection('s2', 'we welcome you to ours');
UI.addDiv('d');
UI.addDiv('d1', 'a garden of eden in the city');
UI.addSection('s3', 'traditional moroccan cooking techniques applied to locally sourced ingredients');
UI.addDiv('cookingImg');
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
 UI.addDiv('dd');
UI.addDiv('d2', 'experience the true welcome of morocco');
UI.addSection('s5', ` monday closed
 tuesday and wednesday 11am-10pm
 thursday-saturday 11am-2am
 sunday 9am-4pm
 
 700 sunset blvd, los angeles, CA 90210
 tel: 310 700 7000 - info@marrakechla.com`);
