const content = document.getElementById('content');
const animFunc = () =>{
    setTimeout(() =>{
        content.style.transform = 'translateY(-10px)';
        content.style.opacity = '1';
    },200);
}
animFunc();