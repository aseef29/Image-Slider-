    let counter = 1;
    setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 5){
        counter = 1;
    }

    },5000); 

/*     let firstIndex=0;
    function imageSlider(){
        setTimeout(imageSlider, 5000);
        const img=document.querySelectorAll('img');
        for( let pics=0; pics<img.length; pics++){
            img[pics].style.display="none";
        }
    firstIndex ++;
    if(firstIndex > img.length){
        firstIndex = 1;
    }
    img[firstIndex -1].style.display="block";

    }
    imageSlider();   */
    