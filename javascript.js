const button = document.getElementById("button");
const balls = document.getElementById("balls");
const result= [];

const lottery = function() {

    if(result.length === 6) return;

    const numberLottery = document.createElement("div");
    numberLottery.setAttribute("class", "ball");
    const resultLottery = Math.floor(Math.random() * 49 + 1);
    
    for (let i=0; i < result.length; i++) {
        if(resultLottery === result[i]) {
            return lottery;
        }
    }
    
    numberLottery.textContent = resultLottery;

    result.push(resultLottery);
    balls.appendChild(numberLottery);
}

button.addEventListener("click", lottery);

