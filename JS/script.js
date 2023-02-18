
// function which is multiply by 0.5 with user's two input;
function multiplyWithHalf(a, b){
    return 0.5 * a * b;
};

// function who multiply by user's two value
function multiply(a,b){
    return a * b;
};

// Triangle area
document.getElementById('triangle-btn').addEventListener('click', function(){
    const triangle = document.getElementById('triangle');
    
    const baseString = triangle.childNodes[1].value;
    const heightString = triangle.childNodes[3].value;

    if(baseString=='' || heightString==''){
        alert('please fill the value');
    }
    else if(isNaN(baseString)==true || isNaN(heightString)==true) {
        alert('please type a number');
    }
    else if(baseString<0 || heightString<0){
        alert('negative input not accept')
    }
    else{
        const base = parseFloat(baseString);
        const height = parseFloat(heightString);
        const area =  multiplyWithHalf(base, height);
    
        showOutput(area.toFixed(2), 'Triangle');
    }   
});

// Rectangle area
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangle = document.getElementById('rectangle');
    
    const widthString = rectangle.childNodes[1].value;
    const lengthString = rectangle.childNodes[3].value;

    if(widthString=='' || lengthString==''){
        alert('please fill the value');
    }
    else if(isNaN(widthString)==true || isNaN(lengthString)==true) {
        alert('please type a number');
    }
    else if(widthString<0 || lengthString<0){
        alert('negative input not accept')
    }
    else{
        const width = parseFloat(widthString);
        const length = parseFloat(lengthString);
        const area =  multiply(width, length);
    
        showOutput(area.toFixed(2),'Rectangle');
    }
});


// Parallelogram area
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogram = document.getElementById('parallelogram');
    
    const baseString = parallelogram.childNodes[1].value;
    const heightString = parallelogram.childNodes[3].value;

    if(baseString=='' || heightString==''){
        alert('please fill the value');
    }
    else if(isNaN(baseString)==true || isNaN(heightString)==true) {
        alert('please type a number');
    }
    else if(baseString<0 || heightString<0){
        alert('negative input not accept')
    }
    else{
        const base = parseFloat(baseString);
        const height = parseFloat(heightString);
        const area =  multiply(base, height);
    
        showOutput(area.toFixed(2), 'Parallelogram');
    }  
});

// Rhombus area
document.getElementById('rhombus-btn').addEventListener('click', function(){
    
    const rhombus = document.getElementById('rhombus');
    
    const d1String = rhombus.childNodes[1].value;
    const d2String = rhombus.childNodes[3].value;

    if(d1String=='' || d2String==''){
        alert('please fill the value');
    }
    else if(isNaN(d1String)==true || isNaN(d2String)==true) {
        alert('please type a number');
    }
    else if(d1String<0 || d2String<0){
        alert('negative input not accept')
    }
    else{
        const d1 = parseFloat(d1String);
        const d2 = parseFloat(d2String);
        const area =  multiplyWithHalf(d1, d2);
    
        showOutput(area.toFixed(2), 'Rhombus');
    }   
});

// Pentagon area
document.getElementById('pentagon-btn').addEventListener('click', function(){
    
    const pentagon = document.getElementById('pentagon');
    
    const string1 = pentagon.childNodes[1].value;
    const string2 = pentagon.childNodes[3].value;

    if(string1=='' || string2==''){
        alert('please fill the value');
    }
    else if(isNaN(string1)==true || isNaN(string2)==true) {
        alert('please type a number');
    }
    else if(string1<0 || string2<0){
        alert('negative input not accept')
    }
    else{
        const p = parseFloat(string1);
        const b = parseFloat(string2);
        const area =  multiplyWithHalf(p, b);
    
        showOutput(area.toFixed(2), 'Pentagon');
    }   
});

// Ellipse area
document.getElementById('ellipse-btn').addEventListener('click', function(){
    
    const ellipse = document.getElementById('ellipse');
    
    const string1 = ellipse.childNodes[1].value;
    const string2 = ellipse.childNodes[3].value;

    if(string1=='' || string2==''){
        alert('please fill the value');
    }
    else if(isNaN(string1)==true || isNaN(string2)==true) {
        alert('please type a number');
    }
    else if(string1<0 || string2<0){
        alert('negative input not accept')
    }
    else{
        const a = parseFloat(string1);
        const b = parseFloat(string2);
        const area = a * b * 3.14 ;
    
        showOutput(area.toFixed(2), 'Ellipse');
    }   
});



// random color generator
var menuBoxes = document.getElementsByClassName('randomColor');
for (var i = 0; i < menuBoxes.length; i++) {
    menuBoxes[i].onmouseenter = function(e) {
        var color = '#'+Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = color;
        this.style.borderRadius = '20px';
    }
    menuBoxes[i].onmouseleave = function(e) {

        this.style.backgroundColor = '';
        this.style.borderRadius = '0px';
    }
}


// increament index number of Area calculation
var increment = (function(n) {
    return function() {
      n += 1;
      return n;
    }
  }(0));

// Show Output in Calculation Area

function showOutput(a, name){
    const calculationArea =  document.getElementById('calculation-area');
    
    // Create Elements
    const area = document.createElement('div');
    area.innerHTML = `
    
            <div class="md:flex justify-around md:space-y-0 space-y-2 md:text-sm text-lg">
                <h2> ${increment()} . ${name}</h2>
                <h3><span>${a}</span><span>cm</span><sup>2</sup></h3>
                <button class="convert-btn bg-sky-500 hover:bg-sky-700 text-white py-1 px-2 rounded-sm" title="convert to meter">Convert to m<sup>2</sup></button>
                <button class="remove-btn text-red-500 md:text-lg text-2xl md:pl-0 pl-3" title="remove"><i class="fa-solid fa-xmark"></i></button>
            </div>`;
    
    calculationArea.appendChild(area);







    /*----------------------- Bonus Section ----------------------- */


    
    // Remove each Area calculation
    const remove = document.querySelectorAll('.remove-btn');

        for(const item of remove){
        
            item.addEventListener('click', function (event){
                event.target.parentNode.parentNode.remove(event.target);
            });
        };



        
    // Convert each area value from cm to m
    const convert = document.querySelectorAll('.convert-btn');
    for(const item of convert){
        
        item.addEventListener('click', function (event){
            const cmValue = event.target.parentNode.childNodes[3].childNodes[0].innerText;
            const cm = parseFloat(cmValue);
            const m = cm * 0.01;

            
            const cm_m = event.target.parentNode.childNodes[3].childNodes[1].innerText;

            const m_cm = m * 100 * 100;

            console.log( event.target.parentNode.childNodes[5].innerText)

            if(cm_m == 'cm'){
                event.target.parentNode.childNodes[3].innerHTML=`<span>${m}</span><span>m</span><sup>2</sup>`;
                event.target.parentNode.childNodes[5].innerHTML = `Convert to cm<sup>2</sup>`;
            }
            else{
                event.target.parentNode.childNodes[3].innerHTML=`<span>${m_cm}</span><span>cm</span><sup>2</sup>`;
                event.target.parentNode.childNodes[5].innerHTML = `Convert to m<sup>2</sup>`;
            }

        });
    };
    
}





