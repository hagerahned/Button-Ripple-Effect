
const puttonEL = document.querySelector(".putton");

puttonEL.addEventListener("mouseover",(event)=>{               
    const x = (event.pageX - puttonEL.offsetLeft);  
    const y = (event.pageY - puttonEL.offsetTop);  
    
    puttonEL.style.setProperty("--xPos", x + "px")
    puttonEL.style.setProperty("--yPos", y + "px")
})


//   step1:-
//   document page HTML 
//   querySelector :- you summon an element using its class, id,or tag itself
//   step1: A variable identifier and a writer inside the class name  

//   step2:-
//   addEventListener :-you add function with action
//   useing condation
//   offsetLeft,offsetTop :- a property that returns the element in pixels OR the value returned 
//   includes top and left, position and margin of the element, top and left padding, scrollbar,borders, and parents
//  event الحدث
  