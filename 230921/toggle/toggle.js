// toggle

const toggle = document.querySelector(".toggle")
console.log(toggle)

console.log(toggle.classList)

// toggle.classList.add('active')

// toggle.classList.remove('active')

// class "active" 가 존재하는지 유무
// console.log(toggle.classList.contains('active'))

toggle.addEventListener("click", () => {
    // 1.
    // if (toggle.classList.contains('active') === false) {
    //     toggle.classList.add('active')
    // } else {
    //     toggle.classList.remove('active')
    // }
    // 3. 
        toggle.classList.toggle('active')

    // 2. 3항 연산자
    /*
     toggle.classList.contains('active')  
    ? toggle.classList.remove('active') 
    : toggle.classList.add('active')
    */
})

