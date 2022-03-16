function changFontSize() {
    let text = document.querySelector("p.mess-with-me").style.fontSize = '40px';
    let backGroundColor = document.querySelector("p.mess-with-me").style.backgroundColor = 'green'; 
    console.log(text); 
    console.log(backGroundColor); 
    
    } 

    changFontSize();

    function hideImage() {
        const image = document.querySelector("#hide-me").style.visibility = 'hidden'; 
        console.log(image); 
    }
    hideImage();

    function firstDinosaurImage() {
        const image = document.querySelector("#triceratops").style.width = '324px'; 
        console.log(image);
    
    }
    firstDinosaurImage();

    function textColorChangeClick() {
        const textColor = document.querySelector("span.mess-with-me"); 
        console.log(textColor); 
        textColor.addEventListener('click', function() {
            textColor.style.color = 'orange';
        })
    }
    textColorChangeClick();
    
    function dinoRedBorder() {
        const dino = document.querySelector("#triceratops"); 
        console.log(dino);
        dino.addEventListener('click', function() {
            dino.style.border = '1px solid red';
        })
    }
    dinoRedBorder();
    
    function featherDinoTransparency() {
        const featheryDino = document.querySelector("#feathers"); 
        console.log(featheryDino);
        featheryDino.addEventListener('click', function() {
            featheryDino.style.opacity = 0.5;
        }) 
    }
    featherDinoTransparency(); 
    
    let toggle = true;
    document.querySelector("#toggle").addEventListener("click", toggleBackground)
    function toggleBackground() {
        if(toggle){
            document.querySelector("#row").style.backgroundColor = "aqua";
        }else{
            document.querySelector("#row").style.backgroundColor = "";
        }
        console.log(toggle);
        toggle = !toggle;
    }
    toggleBackground();
    
    function hoverImage() {
        const big = document.querySelector("#biggify");
        console.log(big); 
        big.addEventListener('onmouseover', function() {
            big.style.onmouseover = 'width 200px';
        })
    }
    hoverImage();