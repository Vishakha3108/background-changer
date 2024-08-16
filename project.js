const button = document.getElementById('btn');
const color = document.querySelector('.color');

const hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","F",]

//add eventlistner to the button 

// button.addEventListener('click' , vishakha)
/*function vishakha () {
    alert('clicked')
}

button.addEventListener('click', vishakha)*/

button.addEventListener('click',() => {
    // alert(' button cliced')

    const hexcolor = genratehexcolor();

    document.body.style.backgroundColor = hexcolor;
    color.textContent = hexcolor;
})

//function to genrate hex color

const genratehexcolor = () => {
    let hexcolor = '#';

    for (let i = 0; i < 6; i++){
        hexcolor += hex[getRandomNumber()]
    } 
    // alert(hexcolor)
    return hexcolor;
}

const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}
