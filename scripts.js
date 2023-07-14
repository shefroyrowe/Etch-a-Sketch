//generator grid cells
function makeGrid(sqrs) {
    let i = 0;
    while (i < sqrs) {
        const wrapper = document.querySelector('.grid-wrap');
        const cell = document.createElement('div');
        cell.classList.add('item');
        wrapper.appendChild(cell);
        i++;
    }
}//...

//get layout selecting buttons
const buttons = document.querySelectorAll('.controls');

//begin canvas control logic 
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnId = e.target.id;

        //get grid cell container
        const wrapper = document.querySelector('.grid-wrap');

        //remove grid cells > 1/2 parts
        function removeGrid() {
            while (wrapper.firstChild) {
                wrapper.firstChild.remove()
            }
        }
        //call to remove grid cells 2/2 parts
        if (btnId !== '') {
            removeGrid();
        }

        //change grid layout
        if (btnId === 'grid16') {
            makeGrid(16 * 16);
        }
        if (btnId === 'grid32') {
            makeGrid(32 * 32);
        }
        if (btnId === 'grid64') {
            makeGrid(64 * 64);
        }
        if (btnId === 'grid80') {
            makeGrid(80 * 80);
        }
        if (btnId === 'grid100') {
            makeGrid(100 * 100);
        }//...


        //get grid cells for css appending
        const boxes = document.querySelectorAll('.item');

        //append css to normalize grid cell sizes
        boxes.forEach(box => {
            if (btnId === 'grid16') {
                box.style.cssText = 'height: 28px; width: 28px;';
            }
            if (btnId === 'grid32') {
                box.style.cssText = 'height: 13px; width: 13px;';
            }
            if (btnId === 'grid64') {
                box.style.cssText = 'height: 5.5px; width: 5.5px;';
            }
            if (btnId === 'grid80') {
                box.style.cssText = 'height: 4px; width: 4px;';
            }
            if (btnId === 'grid100') {
                box.style.cssText = 'height: 2.8px; width: 2.8px;';
            }
        });//...

        //generate random background color
        function randomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.round(Math.random() * 15)];
            }
            return color;
        }//...

        //get rainbow toggle button
        const rainbow = document.querySelector('#rainbow');

        //get grid cells to apply canvas coloring
        const items = document.querySelectorAll('.item');

        //keydown and drag > logic to draw on canvas
        //begin for...each
        items.forEach(item => {
            let rainbow_On = false;
            rainbow.addEventListener('click', () => {
                rainbow_On = true;
            });

            let mouseDown = false;
            addEventListener('mousedown', () => {
                mouseDown = true;
            });
            addEventListener('mouseup', () => {
                mouseDown = false;
            });

            //background color event listener
            item.addEventListener('mouseenter', () => {

                //default color
                if(mouseDown){
                item.style.background = 'salmon';
                }

                //while rainbow_On is true and mousedown is also true
                //canvas color mode = random/rainbow color effect
                if (rainbow_On === true && mouseDown === true) {
                    item.style.background = randomColor();
                }
            });
        });//end for...each
        //...
    });//end canvas control for...each
});//end canvas control logic 


//=======================//
//>>>features to add<<<//
//=======================//

//add eraser function
//add color picker...
//method to remove grid lines
//method to gradually increase color opacity from light to fully dark
//feature to save drawing

//[method to click and drag to draw (complete)]...
//[add randomized color option (complete)]...




