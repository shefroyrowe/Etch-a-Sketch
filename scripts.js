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

        //remove grid cells
        function removeGrid() {
            while (wrapper.firstChild) {
                wrapper.firstChild.remove()
            }
        }//...
        //call to remove grid cells
        if (btnId !== '') {
            removeGrid();
        }//...


        //change grid layout logic
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


        //generate random color
        function randomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.round(Math.random() * 15)];
            }
            return color;
        }//...

        //get raandom color toggle button
        const rainbow = document.querySelector('#rainbow');


        //get color picker element
        let pickColor = document.querySelector('#color-pick');


        //get grid cells to apply canvas coloring
        const items = document.querySelectorAll('.item');
        //keydown and drag > logic to draw on canvas
        items.forEach(item => {
            //random color event listener for each item
            let rainbow_On = false;
            rainbow.addEventListener('click', () => {
                rainbow_On = true;
            });

            //color picker event listener for each item
            let newcolor;
            pickColor.addEventListener('change', (e) => {
                newcolor = e.target.value;
            });

            //mouse down event switch to control drawing logic
            let mouseDown = false;
            addEventListener('mousedown', () => {
                mouseDown = true;
            });
            addEventListener('mouseup', () => {
                mouseDown = false;
            });

            //background coloring event listener for each item
            item.addEventListener('mouseenter', () => {
                //default color
                if (mouseDown) {
                    item.style.background = newcolor;
                }//...

                //rainbow color scheme
                /*
                while rainbow_On is true and mousedown is also true
                canvas color mode = random/rainbow color effect
                */
                if (rainbow_On === true && mouseDown === true) {
                    item.style.background = randomColor();
                }//...
            });
        });//end drawing for...each logic
    });
});//end canvas control logic 


//=======================//
//>>>features to add<<<//
//=======================//

//add eraser function
//add tab icon to index page
//method to gradually increase color opacity from light to fully dark

//[add color picker(complete)]...
//[method to click and drag to draw (complete)]...
//[add randomized color option (complete)]...




