let progressNumber = document.getElementById('progressNumber') 
let count = 0
const finalCount = 50

setTimeout(() => {
    const interval = setInterval(() => {
        count += 1
        progressNumber.innerText = count
        if(count == finalCount){
            clearInterval(interval)
        }
        if(count == 10){
            console.log('Desarrollo Web')
        }
        if(count == 25){
            console.log('Javacript')
        }
        if(count == 50){
            console.log('React JS')
        }

    }, 60);
    
}, 1000);
