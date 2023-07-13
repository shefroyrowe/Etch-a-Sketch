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
        }
        if(btnId === 'grid32'){
            makeGrid(32 * 32);
        }
        if(btnId === 'grid64'){
            makeGrid(64 * 64);
        }
        if(btnId === 'grid80'){
            makeGrid(80 * 80);
        }
        if(btnId === 'grid100'){
            makeGrid(100 * 100);
        }

//add css to normalize grid squares 
const boxes = document.querySelectorAll('.item');
boxes.forEach(box => {
        
    if (btnId === 'grid16') {
        box.style.cssText = 'height: 28px; width: 28px;';
    }
    if(btnId === 'grid32'){
        box.style.cssText = 'height: 13px; width: 13px;';
    }
    if(btnId === 'grid64'){
        box.style.cssText = 'height: 5.5px; width: 5.5px;';
    }
    if(btnId === 'grid80'){
        box.style.cssText = 'height: 4px; width: 4px;';
    }
    if(btnId === 'grid100'){
        box.style.cssText = 'height: 2.8px; width: 2.8px;';
    }
});

//drawing event
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
            item.addEventListener('mousemove', () => {
            item.style.backgroundColor = 'red';
            });//end drawing event 
        });//end drawing for...each

    });//end buttons event 
});//end bttons for...each

//>>>featurs to add<<<//
//=======================//
//add eraser function
//add randomized color option
//add color picker
//add method to clear entire grid without removing cells
//method to remove grid lines 
//method to gradually increase color opacity
//method to click and drag to draw






