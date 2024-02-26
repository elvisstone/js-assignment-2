const text = document.getElementById("text");
const clickBtn = document.getElementById("clickBtn");
const overBtn = document.getElementById("overBtn");
const copyIcon = document.querySelector(".fa-copy");
const colorInput = document.querySelector("#colorInput");


const colorRange = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const randomColorCode = () => {
    let hexCode = "#";
    for(let x = 0; x < 6; x++){
        hexCode += colorRange[Math.floor(Math.random() * colorRange.length)];
    } 
    return hexCode
}

clickBtn.addEventListener("click", () => {
    const colorValue = randomColorCode();
    document.querySelector("body").style.backgroundColor = colorValue;
    text.textContent = colorValue;
    colorInput.value = text.textContent;
})

overBtn.addEventListener("mouseover", () => {
    const colorValue = randomColorCode();
    document.querySelector("body").style.backgroundColor = colorValue;
    text.textContent = colorValue;
    colorInput.value = text.textContent;
})

copyIcon.addEventListener("click", () => {
    const textToCopy = text.textContent;
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
  
    document.body.removeChild(tempTextArea);
    alert(`Copid : ${text.textContent}`)
})