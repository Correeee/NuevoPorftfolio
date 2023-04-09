let progressNumber = document.getElementById('progressNumber') 
let count = 0
const finalCount = 50

const html = document.getElementById('html')
const css = document.getElementById('css')
const javascript = document.getElementById('javascript')
const bootstrap = document.getElementById('bootstrap')
const react = document.getElementById('react')

setTimeout(() => {
    const interval = setInterval(() => {
        count += 1
        progressNumber.innerText = count
        if(count == finalCount){
            clearInterval(interval)
        }
        if(count == 10){
            html.style.display = 'flex'
        }
        if(count == 15){
            css.style.display = 'flex'
        }
        if(count == 20){
            bootstrap.style.display = 'flex'
        }
        if(count == 30){
            javascript.style.display = 'flex'
        }
        if(count == 45){
            react.style.display = 'flex'
        }

    }, 60);
    
}, 1000);
