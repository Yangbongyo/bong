// console.log('test')

const item = document.querySelector('.item')
const bokeh = document.createElement('span')
bokeh.classList.add('bokeh')

const randomGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
};

for(let i = 0; i < 10; i++) {
    // 추가
    bokeh.style.left = `${randomGenerator(0, 100)}%`
    bokeh.style.top = `${randomGenerator(0, 100)}%`

    let size = randomGenerator(50, 200)
    // bokeh.style.animationDuration = `${randomGenerator(10, 30)}s`
    // bokeh.style.animationDelay = `${randomGenerator(1, 10)}s`
    // const randomColor = `rgb(${randomGenerator(0, 255)}, ${randomGenerator(0, 255)}, ${randomGenerator(0, 255)})`
    bokeh.style.width = `${size}px`
    bokeh.style.height = `${size}px`
    // bokeh.style.backgroundColor = randomColor


    item.append(bokeh)

}

    // 다른 형식
// const addBokeh = () => {
//     bokeh.style.left = `${randomGenerator(0, 100)}%`
//     bokeh.style.top = `${randomGenerator(0, 100)}%`

//     let size = randomGenerator(50, 200)
//     bokeh.style.animationDuration = `${randomGenerator(10, 30)}s`
//     bokeh.style.animationDelay = `${randomGenerator(1, 10)}s`
//     const randomColor = `rgb(${randomGenerator(0, 255)}, ${randomGenerator(0, 255)}, ${randomGenerator(0, 255)})`
//     bokeh.style.width = `${size}px`
//     bokeh.style.height = `${size}px`
//     bokeh.style.backgroundColor = randomColor
// }
// for(let i = 0; i < 100; i++) {
//     addBokeh()

// }