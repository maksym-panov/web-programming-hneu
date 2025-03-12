// 4. Створити та підключити файл .js у якому вказати
//    параметри для коректної роботи кнопки
const showText = (btn) => {
    const s = btn.previousElementSibling.style
    if (s.height === 'fit-content') {
        s.height = '80px';
        btn.innerHTML = 'Show more...';
    } else {
        s.height = 'fit-content';
        btn.innerHTML = 'Show less...';
    }
};

/*
    5. Змінити стиль обраних власноруч елементів по натисканні кнопки
    «Змінити стиль», використавши звернення до елементів зa id, класом,
    тегом та до всіх елементів, що відповідають селектору.
*/
// Перемикає темну/світлу теми
const changeStyle = () => {
    const body = document.getElementsByTagName('body')[0];
    const footer = document.getElementsByTagName('footer')[0];
    const header = document.getElementById('page-start');
    const cards = document.querySelectorAll('.collection_item');
    const h1s = document.querySelectorAll('h1');
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';

        header.style.backgroundColor = 'rgb(165, 204, 79)';
        header.style.color = 'rgb(192, 251, 92)';

        footer.style.backgroundColor = 'rgb(165, 204, 79)';
        footer.childNodes[1].style.color = 'rgb(236, 254, 169)';
        
        cards.forEach((c) => {
            c.style.backgroundColor = 'white';
            c.style.borderColor = 'black';
            c.style.color = 'black';
        });

        h1s.forEach((h1) => {
            if (h1.parentElement.id !== 'page-start') {
                h1.style.color = 'black';
            }
        });
    } else {
        body.style.backgroundColor = 'black';
        
        header.style.backgroundColor = 'black';
        header.style.color = 'white';
        
        footer.style.backgroundColor = 'black';
        footer.childNodes[1].style.color = 'white';
        
        cards.forEach((c) => {
            c.style.backgroundColor = 'black';
            c.style.borderColor = 'white';
            c.style.color = 'white';
        });
        
        h1s.forEach((h1) => {
            if (h1.parentElement.id !== 'page-start') {
                h1.style.color = 'white'
            }
        });
    }

};

/*
    6. Додайте функції з подіями на сторінці для обрани на власний розсуд
    елементів click, mouseover / mouseout, onchange (для форми вводу) У
    цю частину коду додати коментарі.
*/
// Підсвічує картки синім кольором, коли курсор знаходиться над ними
document.addEventListener('mouseover', (event) => {
    document.querySelectorAll('.collection_item').forEach((i) => {
        i.style.boxShadow = '0 0 0 #9ecaed';
    });
    if (
        event.target.parentElement?.attributes[0]?.nodeValue === 'collection_item'
            || event.target.parentElement?.parentElement?.attributes[0]?.nodeValue === 'collection_item'
            || event.target.attributes[0]?.nodeValue === 'collection_item'
    ) {
        event.target.closest('.collection_item').style.boxShadow = '0 0 50px #9ecaed';
    }
});