# Button-Ripple-Effect

    <!-- Hager Abdel Rahman -->

<!DOCTYPE html>   <!--Meaning we use Virgin 5--> 
<html lang="en">  <!--Meaning we will make the website in English-->
<head>
    <meta charset="UTF-8"> <!--Its value is the type of encryption that the browser will use to read the codes. Meaning we will use our language  -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!--it opens on internet explorer-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  <!--viewport=>I have to use it for the site to be--> 
    <title>Button Ripple Effect</title>  
    <link rel="stylesheet" href="style.css">
</head>
<body>   <!---look it to the first body--> 

   <a  href="#" class="putton"><span>Button</span></a> 
   <!-- a= link-->
   <!--span=span is typed to display text inside the button  -->
   <!-- href=>the link the outfit is written -->
   <!--class= Atrebiot -->

   <script src="main.js"></script>
 </body>  <!---look it to the end body--> 
</html>    <!---look it to the end html-->


body{
    margin: 0;   /*  Internal displacement*/
    display: flex;  /* Horizontal Flexible */ 
    justify-content: center;  /* Up in the middle */
    height: 100vh;   /*Website height  */
    align-items: center;  /*center Vertical */
    background-color: aliceblue; /*Website body color*/
    font-family: sans-serif;  /*Website body font-family*/
}


.putton{
    background-color: pink;  /*the background color of the putton*/
    padding: 20px 40px; /* External displacement*/
    border-radius: 5px; /*It controls the properties of the shape and accepts four directions from you*/ 
    box-shadow: 0 4px 8px rgba(0,0,0,.3);  
    text-decoration: none; /*remove inline*/
    color: black; /*Add color putton*/
    position: relative; /*Add that the buttons are the father*/ 
    overflow: hidden; /*hide the increase*/
} 

.putton span{
    position: relative; /*Add that the buttons are the father*/ 
    z-index: 1;  /*To make the item the last one*/
}


.putton::before{ 
    content: ""; /*To invoke a theme written in html*/
    position: absolute; /*Add that the buttons are the Son*/
    background-color: orangered; /*the background color of the putton before*/
    width: 0; /*width putton before  they pressed*/
    height: 0;  /*height putton before they pressed*/
    left:var(--xPos) ;   /*left putton before they pressed*/
    top:var(--yPos);   /*top putton before they pressed*/
    transform: translate(-50%, -50%); 
    border-radius: 50%;  /*border-radius:its size 50%*/
    transition: width .5s, height 0.5s; /*transition width,height*/ 
}

.putton:hover::before{
    width: 300px;   /*width putton hover before they pressed*/
    height: 300px;  /*height putton hover before they pressed*/
}



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
 
