const getColor = () => {
    // first we will generate a random number to represent the color number
    // By using random() function in math 
    // hex code= = hexadecimal number (16)
    const randonNum = Math.floor(Math.random()*16777215);
    // to convert the number into string i.e. color name
    const ranCode = "#"+ randonNum.toString(16);
    console.log(randonNum, ranCode);
    // go to document and then to body of the html and then go into style page then change
    // background color to = ranCode
    document.body.style.backgroundColor = ranCode;
    // to add color to h2 tag
    document.getElementById('color_code').innerText = ranCode;
}
// event call
document.getElementById("btn").addEventListener(
    "click",
     getColor
)
// initial call
getColor();