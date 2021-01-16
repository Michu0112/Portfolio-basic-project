const img = document.getElementById('img-bg');
const content = document.getElementById('content');

const fadeInAnimation = (el) =>{
    setTimeout(() =>{
        el.style.opacity = '1';
        el.style.transform = 'translateY(-50px)';
    },200);
}

fadeInAnimation(img);
fadeInAnimation(content);