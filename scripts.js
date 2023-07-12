//grid generator
function makeGrid(sqrs){
    for(i = 0; i < sqrs; i++){
        const wrapper = document.querySelector('.grid-wrap');
        const cell = document.createElement('div');
        cell.classList.add('item');
        wrapper.appendChild(cell);
    }
}

//grid generator call
makeGrid(256); 

//drawing event
let items = document.querySelectorAll('.item');
items.forEach(item =>{
    item.addEventListener('mouseover', ()=>{
        item.style.cssText = 'background-color: yellow';
    });
});


