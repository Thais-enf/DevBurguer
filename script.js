document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('ul');
    const buttonShowAll = document.querySelector('.show-all');
    const buttonMapAll = document.querySelector('.map-all');
    const sumAll = document.querySelector('.sum-all');
     const filterAll = document.querySelector('.filter-all');

    function formatCurrency(value){
        return value.toLocaleString('pt-br', {
            style: 'currency', 
            currency: 'BRL'
        });
    }

    function showAll(productsArray){
        let myLi = '';
        productsArray.forEach((product) => {
            myLi += `
        <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price">R$ ${formatCurrency(product.price)}</p>
            </li>`;
        });

        list.innerHTML = myLi;
    }

    function hideBebidas() {
        const bebidas = document.querySelectorAll('.bebida');
        bebidas.forEach(bebida => {
            bebida.classList.add('hidden');
        });
    }
    
    function mapAllItems() {
        hideBebidas(); // Oculta as bebidas
        const newPrices = menuOptions.map((product) => ({
            ...product,
            price: product.price * 0.9, // dar 10% de desconto
        }));
    
        showAll(newPrices);
    }
    
    function sumAllItems() {
        hideBebidas(); // Oculta as bebidas
        const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);
    
        list.innerHTML = `
        <li>
        <p> O Valor total dos itens é R$ ${formatCurrency(totalValue)}</p>
        <li>
        `;
        console.log(totalValue);
    }
    
    function filterAllItems() {
        hideBebidas(); // Oculta as bebidas
        const filterJustVegan = menuOptions.filter((product) => product.vegan);
    
        showAll(filterJustVegan);
    }
    

    buttonShowAll.addEventListener('click', () => showAll(menuOptions));
    buttonMapAll.addEventListener('click', mapAllItems);
    sumAll.addEventListener('click', sumAllItems);
    filterAll.addEventListener('click', filterAllItems);
});
