class Header {
    handlerOpenShoppingPage () {
        shoppingPage.render();
    }

    render(count) { //отображение данных на экран + добовляем переменную count для подсчета кол-ва товаров
        const html = `
                <span onclick="headerPage.handlerOpenShoppingPage();">
                    🛒 ${count}
                </span>
        `;

        ROOT_HEADER.innerHTML = html; //значение innerHTML удаляет всё содержимое элемента и заменяет его на узлы, которые были разобраны как HTML, указанными в строке html
    }
    
};

const headerPage = new Header (); //экземпляр класса

// const productsStore = localStorageUtil.getProducts(); //заключаем в переменную для отображения кол-ва вызываем экземплял класса и метод
// headerPage.render(productsStore.length); //вызов метода render + отображение кол-ва выбранных товаров (длинну массива))

