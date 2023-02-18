
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











// Show Output in Calculation Area

function showOutput(a, name){
    const calculationArea =  document.getElementById('calculation-area');
    
    const area = document.createElement('div');
    let i = 1;
    area.innerHTML = `
    
            <div class="md:flex justify-around md:space-y-0 space-y-2">
                <h2> ${i} . ${name}</h2>
                <h3>${a}cm<sup>2</sup></h3>
                <button class="bg-sky-500 hover:bg-sky-700 md:text-sm text-xs text-white py-1 px-2 rounded-sm">Convert to m<sup>2</sup></button>
            </div>`;
    
    calculationArea.appendChild(area);

}

