let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
}

document.querySelector('#create-account-link').onclick = () => {
    document.querySelector('.signup-form-container').classList.toggle('active');
}

document.querySelector('#close-signup-form').onclick = () => {
    document.querySelector('.signup-form-container').classList.remove('active');
}


window.onscroll = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onload = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

document.querySelector('.home').onmousemove = (e) =>{
    document.querySelectorAll('.home-parallax').forEach(elm =>{
        let speed = elm.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed)/90;
        let y = (window.innerHeight - e.pageY * speed)/90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
    });
}

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    gradCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
        },
    });

    document.querySelectorAll('.checkout-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            const year = this.getAttribute('data-year');
            const cc = this.getAttribute('data-cc');
            const image = this.parentElement.parentElement.querySelector('img').src; // ดึง URL ของรูปภาพรถ
            window.location.href = `checkout.html?name=${name}&price=${price}&year=${year}&cc=${cc}&image=${encodeURIComponent(image)}`;
        });
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        const params = new URLSearchParams(window.location.search);
        const name = params.get('name');
        const price = params.get('price');
    
        // ถ้าอยู่ใน checkout.html ให้ตั้งค่าปุ่มชำระเงินให้ไปยัง payment.html
        if (document.getElementById("pay-btn")) {
            document.getElementById("pay-btn").addEventListener("click", function(event) {
                event.preventDefault();
                window.location.href = `payment.html?name=${name}&price=${price}`;
            });
        }
    });
    