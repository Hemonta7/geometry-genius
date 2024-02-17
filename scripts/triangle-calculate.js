function triangleArea(){
    // traingleBase 
    const triangleBase=document.getElementById('triangle-base');
    const triangleBaseText=triangleBase.value;
    const base=parseFloat(triangleBaseText);
    console.log(base);

    // traingleHeight
    const triangleHeight=document.getElementById('triangle-height');
    const triangleHeightText=triangleHeight.value;
    const height=parseFloat(triangleHeightText);
    console.log(height);

    // area of traingle 
    const area=0.5*base*height;
    
    // display traingle area 
    const displayArea=document.getElementById('triangle-area');
    displayArea.innerText=area;
}