console.log("Tourist Places")

const places={
    hyderabad: {
        element:document.querySelector(".hyderabad img"),
        images:["hyd1.jpg","hyd2.jpg","hyd3.jpg","hyd4.jpg","hyd5.jpg"],
        currentIndex:0
    },
    delhi:{
        element:document.querySelector(".delhi img"),
        images:["del1.jpg","del2.jpg","del3.jpg","del4.jpg","del5.jpg"],
        currentIndex:0
    },
    kolkata:{
        element:document.querySelector(".kolkata img"),
        images:["kol1.jpg","kol2.jpg","kol3.jpg","kol4.jpg","kol5.jpg"],
        currentIndex:0
    },
    chennai:{
        element:document.querySelector(".chennai img"),
        images:["chen1.jpg","chen2.jpg","chen3.jpg","chen4.jpg","chen5.jpg"],
        currentIndex:0
    }
}
function updateImage(place,direction){
    const placeData = places[place];
    console.log(placeData)
    if(direction === 'next'){
        placeData.currentIndex=(placeData.currentIndex + 1)%placeData.images.length;
        console.log(placeData.currentIndex)
    }else if(direction === 'prev'){
        placeData.currentIndex=(placeData.currentIndex - 1+placeData.images.length)%placeData.images.length;
    }
    placeData.element.src=placeData.images[placeData.currentIndex];
}
document.querySelectorAll(".next").forEach(button=>{
    button.addEventListener("click",()=>{
        const place = button.dataset.place
        updateImage(place,'next')
    })
})
document.querySelectorAll(".prev").forEach(button=>{
    button.addEventListener("click",()=>{
        const place = button.dataset.place;
        updateImage(place,'prev')
    })
})
