// rightArrow
var arrowDiv = document.getElementsByClassName('rightArrow')[0];

document.getElementsByClassName('rightArrowBtn')[0].onclick = function() {
    console.log(arrowDiv);

    if(this.innerHTML === 'Play') 
    { 
        this.innerHTML = 'Pause';
        arrowDiv.classList.add('horizTranslate');
    } 
    else {
        this.innerHTML = 'Play';
        var computedStyle = window.getComputedStyle(arrowDiv),
            marginLeft = computedStyle.getPropertyValue('margin-left');
        arrowDiv.style.marginLeft = marginLeft;
        arrowDiv.classList.remove('horizTranslate');
    }  
}
// end rightArrow

// transitionSquare2
var transitionSquare2 = document.getElementsByClassName('transitionSquare2')[0];

document.getElementsByClassName('transitionSquare2Btn')[0].onclick = function() {
    if(this.innerHTML === 'Grow')
    {
        this.innerHTML = 'Shrink';
        transitionSquare2.classList.add('transitionSquare2-active');
    }
    else {
        this.innerHTML = 'Grow';
        transitionSquare2.classList.remove('transitionSquare2-active');
    }
}
// end transitionSquare2