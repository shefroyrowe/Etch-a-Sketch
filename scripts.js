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
        //if (btnId !== '') {
            removeGrid();
        //}//...


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
        if (btnId === 'grid4') {
            makeGrid(4 * 4);
        }
        if (btnId === 'grid8') {
            makeGrid(8 * 8);
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
            if (btnId === 'grid4') {
                box.style.cssText = 'height: 6.7rem; width: 6.7rem;';
            }
            if (btnId === 'grid8') {
                box.style.cssText = 'height: 3.293rem; width: 3.293rem;';
            }
        });//...


        //generate random color
        function randomColor() {
            let letters = '0123456789ABCDEF'.split('');
            let color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.round(Math.random() * 15)];
            }
            return color;
        }//...

        //get random color toggle button
        const rainbow = document.querySelector('#rainbow');


        //get color picker element 
        const pickColor = document.querySelector('#color-pick');


        //get fade to black toggle button
        const fadeToBlack = document.querySelector('#shade');


        //get eraser toggle button
        const eraser = document.querySelector('#eraser');


        //get all grid cell elements
        const items = document.querySelectorAll('.item');


        //keydown and drag > logic to draw on canvas
        items.forEach(item => {

            //activate (random color) rainbow color mode on click
            let rainbow_On = false;
            rainbow.addEventListener('click', () => {
                rainbow_On = true;
            });

            //activate color picker mode on change of color palette
            let newcolor;
            let color_On = false;
            pickColor.addEventListener('change', (e) => {
                newcolor = e.target.value;
                color_On = true;
            });

            //activate eraser
            let erase = false;
            eraser.addEventListener('click', ()=>{
                erase = true;
            });

            //activate fade until black color mode on click
            let fade = false;
            fadeToBlack.addEventListener('click', () => {
                fade = true;

            });

            //mouse down event switch to control coloring logic
            let mouseDown = false;
            addEventListener('mousedown', () => {
                mouseDown = true;
            });
            addEventListener('mouseup', () => {
                mouseDown = false;
            });

            //coloring modes event listener 
            item.addEventListener('mouseenter', () => {
                //color eraser mode
                if(erase === true && mouseDown === true){
                    item.style.backgroundColor ='white';
                    item.style.opacity= (parseFloat(item.style.opacity) || 1.0) + 1.0;
                    //stop other color options//
                    color_On = false;
                    fade = false;
                    rainbow_On = false;
                }

                //(default) color picker color mode
                if (color_On === true && mouseDown === true) {
                    item.style.backgroundColor = newcolor;
                    item.style.opacity= (parseFloat(item.style.opacity) || 1.0) + 1.0;
                    //stop other color options//
                    erase = false;
                    fade = false;
                    rainbow_On = false;
                }//...

                //shade grid items from light until black color mode
              if (fade === true && mouseDown === true) {
                    item.style.backgroundColor = "black";
                    item.style.opacity = (parseFloat(item.style.opacity) || 0) + 0.2;
                    //stop other color options//
                    erase = false;
                    color_On = false;
                    rainbow_On = false;
                }

                //(randomized color) rainbow color mode
               if (rainbow_On === true && mouseDown === true) {
                    item.style.backgroundColor = randomColor();
                    item.style.opacity= (parseFloat(item.style.opacity) || 1.0) + 1.0;                  
                    //stop other color options//
                    erase = false;
                    color_On = false;
                    fade = false;
                }//...

            });//end coloring modes event  listener
        });//end drawing for...each logic
    });//end for each [button] event listener 
});//end canvas control logic 