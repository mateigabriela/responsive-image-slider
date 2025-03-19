const slideTabs = document.querySelectorAll(".slide-tab");
const slideIndicator = document.querySelector(".slide-indicator");
const slideControls = document.querySelector(".slide-controls");
const updateIndicator = (tab,index) => {
    slideIndicator.style.transform = `translateX(${tab.offsetLeft - 20}px)`;
    slideIndicator.style.width = `${tab.getBoundingClientRect().width}px`;
    const scrollLeft = slideTabs[index].offsetLeft - slideControls.offsetWidth /2 + slideTabs[index].offsetWidth/2;
    slideControls.scrollTo({left: scrollLeft, behavior: "smooth"});
};

const swiper = new Swiper(".slide-container", {
    effect: "fade",
    speed: 1300,
    // autoplay: {delay: 400}
    navigation: {
        prevEl: "#slide-prev",
        nextEl: "#slide-next"
    },
    on: {
        slideChange: () => {
            const currentTabIndex = [...slideTabs].indexOf(slideTabs[swiper.activeIndex]);
            updateIndicator(slideTabs[swiper.activeIndex],currentTabIndex);
        }
    }
});

//updateaza slide-ul in functie de tab-ul pe care dam click
slideTabs.forEach((tab,index) => { //iteram prin fiecare element din slideTabs(tab), avand si indexul fiecaruia
    tab.addEventListener("click", ()=>{ 
        swiper.slideTo(index); //cand facem click pe un tab, ne va duce la poza cu index-u; corespunzator tab-ului cu ajutorul functiei swiper
        updateIndicator(tab,index);
    });
});


updateIndicator(slideTabs[0], 0);
window.addEventListener("resize", () => updateIndicator(slideTabs[swiper.activeIndex], 0));



