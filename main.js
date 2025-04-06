
'use strict'

function slider(){
    const sliderDiv = document.getElementById("slider")
    const sliderImages = sliderDiv.querySelectorAll('img')
    sliderImages.forEach( img => img.onclick = moveSlide )

    const slideAnimationTimeout = 400 // длительность CSS-перехода

    function moveSlide(event) {
        event.target.classList.add('move-left')
        setTimeout( movSlideBack, slideAnimationTimeout, event.target )
    }
    function movSlideBack(slide) {
        slide.remove() // удаляем слайд
        sliderDiv.prepend(slide) // перемещаем в начало (так как виден при наложении блоков последний)
        slide.classList.remove('move-left') // убираем класс, что бы слайд вернулся на место
    }
    let slideindex = sliderImages.length
    const autosliding = 5000
    setInterval(nextslide, autosliding)

    function updateslideindex(){
        slideindex--
        if(slideindex < 0) slideindex = sliderImages.length - 1
    }
    function nextslide(){
        updateslideindex()
        sliderImages[slideindex].classList.add('move-left')
        setTimeout(movSlideBack, slideAnimationTimeout, sliderImages[slideindex])
    }
}
slider()
function timer() {
        const minuteMilliseconds = 1000 * 60
        const hourMilliseconds = minuteMilliseconds * 60
        const dayMilliseconds = hourMilliseconds * 24
        const startsaletime = 1743930274733
        const endSaleTime = startsaletime + dayMilliseconds * 7
    function updateSaleDate() {
        let rest = endSaleTime - Date.now()
        let days = Math.floor(rest / dayMilliseconds)
        rest -= days * dayMilliseconds
        let hours = Math.floor(rest / hourMilliseconds)
        rest -= hours * hourMilliseconds
        let minutes = Math.floor(rest / minuteMilliseconds)
        rest -= minutes * minuteMilliseconds
        let seconds = Math.ceil(rest / 1000)

        saleDaysSpan.innerText = days
        saleHoursSpan.innerText = hours
        saleMinutesSpan.innerText = formatTo00(minutes)
        saleSecondsSpan.innerText = formatTo00(seconds)
    }

    function formatTo00(number) {
        if (number < 10) return '0' + number
        return number
    }
}
timer()
function popUp(){
const popUp = document.getElementById('popUp')
popUp.onclick = () => popUp.style.display = 'none'}
