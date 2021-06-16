// Code your solutions in this file
const writeCards = (anArr, eventName) => {
    let newArr = [];
    for (let i = 0; i < anArr.length; i++) {
        newArr.push(`Thank you, ${anArr[i]}, for the wonderful ${eventName} gift!`);
    } return newArr;
}

const countDown = (num) => {
    while (num >= 0) {
        console.log(num);
        num--
    }
}