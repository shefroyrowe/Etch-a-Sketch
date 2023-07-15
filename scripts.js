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

        //get random color toggle button
        const rainbow = document.querySelector('#rainbow');


        //get color picker element 
        let pickColor = document.querySelector('#color-pick');

        
        //get fade to black toggle button
        let fadeToBlack = document.querySelector('#shade');
        
          
        //get grid cells to apply canvas coloring
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
            pickColor.addEventListener('change', (e) => {
                newcolor = e.target.value;
            });

             //activate shade until black color mode on click
             let fade = false;
             fadeToBlack.addEventListener('click', ()=>{
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
                
                //(default) color picker color mode
                if (mouseDown) {
                    item.style.background = newcolor;
                }//...

                //shade grid items from light until black color mode
                if(fade === true && mouseDown === true){ 
                    item.style.background = "black";
                    item.style.opacity = (parseFloat(item.style.opacity) || 0) + 0.2;
                    } 

                //(randomized color) rainbow color mode
                /*
                while rainbow_On is true and mousedown is also true
                canvas color mode = random/rainbow color effect
                */
                if (rainbow_On === true && mouseDown === true) {
                    item.style.background = randomColor();
                }//...
            });//end coloring modes event  listener
        });//end drawing for...each logic
    });//end for each [button] event listener 
});//end canvas control logic 


//=======================//
//>>>features to add<<<//
//=======================//

//add eraser function





