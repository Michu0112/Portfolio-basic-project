window.scrollTo(0,0)

const li = document.getElementById('drop-list');
const dropList = document.getElementById('drop-list-sub');
li.addEventListener('mouseenter', () =>{
    dropList.style.display = 'flex';
    setTimeout(() =>{
        dropList.style.opacity = '1';
    },1)
})
li.addEventListener('mouseleave', () =>{
    dropList.style.opacity = '0';
    setTimeout(() =>{
        dropList.style.display = 'none';
    },300) 
})
const banerText = document.getElementById('banner-first-text');
const newCollectionBtn = document.getElementById('pseudo-btn');
const startAnimation = (element) =>{
    let delay = 0;
    if(element === newCollectionBtn){
        delay = 200;
    }
    setTimeout(() =>{
        element.style.transform = 'translateY(-50px)';
        element.style.opacity = '1';
    },delay)
}
startAnimation(banerText);
startAnimation(newCollectionBtn);



let i = 0;

const newCollectionArticles = document.querySelectorAll('.first-page-product');

function callbackFunc(entries, observer)
{
  entries.forEach( (el) => {
    i++;
    if(i>3){
    el.target.style.transform = `translateY(-50px)`;
    el.target.style.opacity = `1`;
    }
  });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

let observer = new IntersectionObserver(callbackFunc, options);

newCollectionArticles.forEach( el =>{
    observer.observe(el);
})