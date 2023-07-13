//grid generator
function makeGrid(sqrs) {
    let i = 0;
    while (i < sqrs) {
        const wrapper = document.querySelector('.grid-wrap');
        const cell = document.createElement('div');
        cell.classList.add('item');
        wrapper.appendChild(cell);
        i++;
    }
}

//buttons click event 
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnId = e.target.id;

//reference grid items
        const wrapper = document.querySelector('.grid-wrap');

//remove grid function
function removeGrid(){
        while (wrapper.firstChild) {
        wrapper.firstChild.remove()
      }
    }
//call to remove grid
    if(btnId !== ''){
    removeGrid();
    }

//change grid layout
        if (btnId === 'grid16') {
            makeGrid(16 * 16);
        }if(btnId === 'grid32'){
            makeGrid(32 * 32);
        }if(btnId === 'grid64'){
            makeGrid(64 * 64);
        }if(btnId === 'grid80'){
            makeGrid(80 * 80);
        }if(btnId === 'grid100'){
            makeGrid(100 * 100);
        }

//drawing event
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
            item.addEventListener('mousemove', () => {
            item.style.cssText = 'background-color: orangered';
            });
        });
    });//end event listener
});//end for...Each





