window.scrollTo(0,0)


//animate droplist
const li = document.getElementById('drop-list');
const dropList = document.getElementById('drop-list-sub');


if(window.innerWidth < 963){
    dropList.style.display = 'flex';
    dropList.style.opacity = '1';
    dropList.style.position = 'relative';
    li.style.flexDirection = 'column';
}

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



//animate baner text
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



//animation fade in of products
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
});



//hide nav-bar while scroll
const navBar = document.querySelector('.nav-bar');

const listenEnter = () =>{
    if(window.innerWidth < 963){
        return;
    }
    else{
        navBar.style.opacity = '1';
    }
}

const listenLeave = () => {
    if(window.innerWidth < 963){
        return;
    }
    else{
        setTimeout(() =>{
            navBar.style.opacity = '0';
        },5000)
    }
}

let howMuchListeners = 0;

window.addEventListener('scroll', () =>{
    if(window.innerWidth > 963){
        if(window.pageYOffset === 0){
            howMuchListeners = 0;
            navBar.removeEventListener('mouseover', listenEnter);
            navBar.removeEventListener('mouseleave', listenLeave);
            navBar.style.opacity = '1';
        }
        else if(window.pageYOffset > 300){

            howMuchListeners++;

            if(howMuchListeners > 1){
                return;
            }
            else{
                setTimeout(() =>{
                    navBar.style.opacity = '0';
                    navBar.addEventListener('mouseover', listenEnter);
                    navBar.addEventListener('mouseleave', listenLeave);
                },1000)
            }
        }
    }
});

