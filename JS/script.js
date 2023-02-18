
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

    const base = parseFloat(baseString);
    const height = parseFloat(heightString);

    const area =  multiplyWithHalf(base, height);

    console.log(area);
});

// Rectangle area
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangle = document.getElementById('rectangle');
    
    const widthString = triangle.childNodes[1].value;
    const lengthString = triangle.childNodes[3].value;

    const width = parseFloat(widthString);
    const length = parseFloat(lengthString);

    const area =  multiply(width, length);

    console.log(area);
});





// Show Outpu in Calculation Area

const calculationArea =  document.getElementById('calculation-area');