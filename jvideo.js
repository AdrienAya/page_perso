            
               
var i = 0;
var pos = ["translateY(-0%)","translateY(-100%)","translateY(-200%)","translateY(-300%)"];                          
var a = 0;
var transition_1 = document.getElementById('transition');
var bouton =  document.getElementById("next");
var bouton_2 =  document.getElementById("previous");
var bouton_3 = document.getElementById('reload_button');
var scrolling_2 = document.getElementById('scroll_jv');
var translate = ["translateY(0%)" , "translateY(-100%)" , "translateY(-200%)" , "translateY(-300%)"];
var point_one = document.getElementById("point");
var point_two = document.getElementById("point2" );
var point_three = document.getElementById("point3" );
var point_four = document.getElementById("point4" );
var point_jor=[point_one , point_two , point_three , point_four ];
var button_nav_1 = document.getElementById('nav_1');
var button_nav_2 = document.getElementById('nav_2');
var button_nav_3 = document.getElementById('nav_3');
var background_color = [background_color_btc, background_color_btc_2 , background_color_btc_3, background_color_btc_4];
var lecture_2 = document.getElementById("content_lecture_2");
var lecture_1 = document.getElementById("content_lecture");
var transition_2 = document.getElementById('transition_page_1');
var transition_3 = document.getElementById('transition_page_2');    

            
      window.onload = function(){
            
             button_nav_1.style.transform = "translateY(-120%)"; 
            button_nav_2.style.transform = "translateY(-120%)"; 
            button_nav_3.style.transform = "translateY(-120%)"; 
            bouton_3.style.transform = "translateY(-160%)";
             button_nav_1.style.transition = "none"; 
            button_nav_2.style.transition = "none"; 
            button_nav_3.style.transition = "none"; 
            bouton_3.style.transition = "none";
            point_one.style.transform = "translateY(1000%)"; 
            point_two.style.transform = "translateY(1000%)"; 
            point_three.style.transform = "translateY(1000%)"; 
            point_four.style.transform = "translateY(1000%)"; 
            bouton.style.transform = "translateY(200%)"; 
            bouton_2.style.transform = "translateY(200%)";
            point_one.style.transition = "none"; 
            point_two.style.transition = "none"; 
            point_three.style.transition = "none"; 
            point_four.style.transition = "none"; 
            bouton.style.transition = "none"; 
            bouton_2.style.transition = "none"; 
              transition_1.style.transition="0.2s";
            
             setTimeout(function(){ 
             transition_1.style.opacity="0";
             transition_1.style.zIndex="0";
            
                         },150);
            
            
            
                     setTimeout(function(){
                         button_nav_1.style.transform = "translateY(0%)"; 
            button_nav_2.style.transform = "translateY(0%)"; 
            button_nav_3.style.transform = "translateY(0%)"; 
            bouton_3.style.transform = "translateY(0%)";
            button_nav_1.style.transition = "0.8s"; 
            button_nav_2.style.transition = "0.8s"; 
            button_nav_3.style.transition = "0.8s"; 
            bouton_3.style.transition = "0.8s"; 
            point_one.style.transform = "translateY(1000%)";
             point_one.style.transform = "translateY(0%)";              
            point_two.style.transform = "translateY(0%)"; 
            point_three.style.transform = "translateY(0%)"; 
            point_four.style.transform = "translateY(0%)"; 
            bouton.style.transform = "translateY(0%)"; 
            bouton_2.style.transform = "translateY(0%)";
            point_one.style.transition = "0.8s"; 
            point_two.style.transition = "0.8s"; 
            point_three.style.transition = "0.8s"; 
            point_four.style.transition = "0.8s"; 
            bouton.style.transition = "0.8s"; 
            bouton_2.style.transition = "0.8s"; 
             
                      
                          },1300);
              
                setTimeout(function(){
              
         transition_2.style.boxShadow = "0px 0px 5px #03e9f4,0px 0px 15px #03e9f4";
            transition_3.style.boxShadow = "0px 0px 5px #03e9f4,0px 0px 15px #03e9f4" ;    
                      
                          },700);
          
                setTimeout(function(){
              
            transition_2.style.transform = "translateX(-105%)";
            transition_3.style.transform = "translateX(105%)" ;    
                      
                          },1000);
            
        };
    
            
             button_nav_1.addEventListener('click', function (){
                 
                          button_nav_1.style.transform = "translateY(-120%)"; 
                          button_nav_2.style.transform = "translateY(-120%)"; 
                          button_nav_3.style.transform = "translateY(-120%)"; 
                          bouton_3.style.transform = "translateY(-150%)";
                          point_one.style.transform = "translatey(1000%)";
                          point_two.style.transform = "translatey(1000%)";
                          point_three.style.transform = "translatey(1000%)";
                          point_four.style.transform = "translatey(1000%)";
                          bouton.style.transform = "translatey(200%)";
                          bouton_2.style.transform = "translatey(200%)";
                          transition_1.style.zIndex="1000";
                          
                     
                          
                 
                           setTimeout(function(){
                           
                            transition_1.style.opacity="1";
                               
                           },550);
                         
                               
                        setTimeout(function(){
                                     
                                     window.location= "index.html";                                     
                                         
                                        },1000);
                
             
             });
            
             button_nav_2.addEventListener('click', function (){
                 
                           button_nav_1.style.transform = "translateY(-120%)"; 
                          button_nav_2.style.transform = "translateY(-120%)"; 
                          button_nav_3.style.transform = "translateY(-120%)"; 
                          bouton_3.style.transform = "translateY(-150%)";
                          point_one.style.transform = "translatey(1000%)";
                          point_two.style.transform = "translatey(1000%)";
                          point_three.style.transform = "translatey(1000%)";
                          point_four.style.transform = "translatey(1000%)";
                          bouton.style.transform = "translatey(200%)";
                          bouton_2.style.transform = "translatey(200%)";
                          transition_1.style.zIndex="1000";
                          
                     
                          
                 
                           setTimeout(function(){
                           
                            transition_1.style.opacity="1";
                               
                           },550);
                         
                 
                   setTimeout(function(){
                       
                                     
                                     window.location= "ia.html";                                     
                                         
                                        },1000);
             
             });
            
            
             button_nav_3.addEventListener('click', function (){
                 
                         button_nav_1.style.transform = "translateY(-120%)"; 
                          button_nav_2.style.transform = "translateY(-120%)"; 
                          button_nav_3.style.transform = "translateY(-120%)"; 
                          bouton_3.style.transform = "translateY(-150%)";
                          point_one.style.transform = "translatey(1000%)";
                          point_two.style.transform = "translatey(1000%)";
                          point_three.style.transform = "translatey(1000%)";
                          point_four.style.transform = "translatey(1000%)";
                          bouton.style.transform = "translatey(200%)";
                          bouton_2.style.transform = "translatey(200%)";
                       transition_1.style.zIndex="1000";
                          
                     
                          
                 
                           setTimeout(function(){
                           
                            transition_1.style.opacity="1";
                               
                           },550);
                         
                 
                   setTimeout(function(){
                                     
                                     window.location= "blockchain.html";                                     
                                         
                                        },1000);
             
             });
                           
            
            
                 bouton.addEventListener('click', function(){
                
                   
                
                a++;
                                      console.log(a);
                scrolling_2.style.transform=translate[a];
                    
                    
             
                if (a<0){
                    a=0;
                    
                    }
                else if (a>3){
                    a=0;
                     point_four.style.boxShadow="none";
                    point_jor[a].style.boxShadow="0px 0px 15px #03e9f4";
                     scrolling_2.style.transform=translate[a];
                }
                     
                      if(a==0){
                         point_jor[3].style.background="grey";
                         
                     }
                         
                     point_jor[a].style.background="white";                  
                     point_jor[a-1].style.background="grey";
                     point_jor[a].style.boxShadow= "0px 0px 15px #03e9f4";    
                     point_jor[a-1].style.boxShadow= "none";   
                                      
                     
                     
                     });
            
            
             
                 
                 bouton_2.addEventListener('click', function(){
               
                   
                a = a <translate.length ? --a : 0;
               
                    if (a<0) {

                    a=3;
                    point_jor[a].style.boxShadow="0px 0px 15px #03e9f4";
                    
                    console.log(a)
                }
                     
                     if(a==3) {
                            point_jor[0].style.background="grey";
                          point_jor[0].style.boxShadow="none";
                     }
                     
                     
                scrolling_2.style.transform = translate[a];    
                   
                point_jor[a].style.background="white";
                point_jor[a+1].style.background="grey";
                      point_jor[a].style.boxShadow= "0px 0px 15px #03e9f4";    
                     point_jor[a+1].style.boxShadow= "none";   
                  
                });        
            
             point_one.addEventListener('click', function(){                               
                
                if(a!=0){
                    point_two.style.background="grey";
                     point_three.style.background="grey";
                     point_four.style.background="grey";
                     point_four.style.boxShadow="none";
                     point_two.style.boxShadow="none";
                     point_three.style.boxShadow="none";
                     a=0;
                     }
                 
                 scrolling_2.style.transform = translate[0];
                 point_one.style.background="white";
                 point_jor[a].style.boxShadow= "0px 0px 15px #03e9f4";    
              
                 
                 
             });
             point_two.addEventListener('click', function(){
                 
                                 if(a!=1){
                    point_one.style.background="grey";
                     point_three.style.background="grey";
                     point_four.style.background="grey";
                     point_three.style.boxShadow="none";
                     point_four.style.boxShadow="none";
                     point_one.style.boxShadow="none";     
                     a=1;
                     }
                 
                  
                 scrolling_2.style.transform = translate[1];
                 
                   point_two.style.background="white";
                    point_jor[a].style.boxShadow= "0px 0px 15px #03e9f4";    
                
                 
                 
             });
             point_three.addEventListener('click', function(){
                 
                                  if(a!=2){
                    point_two.style.background="grey";
                     point_one.style.background="grey";
                     point_four.style.background="grey";
                        point_two.style.boxShadow="none";
                     point_four.style.boxShadow="none";
                     point_one.style.boxShadow="none";                      
                     a=2;
                     }
                 
                 scrolling_2.style.transform = translate[2];
                   point_three.style.background="white";
                    point_jor[a].style.boxShadow= "0px 0px 15px #03e9f4";    
                   point_jor[a-1].style.boxShadow= "none";   
              
                 
             });
             point_four.addEventListener('click', function(){
                                 if(a!=3){
                    point_two.style.background="grey";
                     point_three.style.background="grey";
                     point_one.style.background="grey";
                      point_two.style.boxShadow="none";
                     point_three.style.boxShadow="none";
                     point_one.style.boxShadow="none";              
                     a=3;
                     }
                 
                  
                 scrolling_2.style.transform = translate[3];
                   point_four.style.background="white";
                   point_jor[a].style.boxShadow= "0px 0px 15px #03e9f4";    
                   });
                 
               
    
             
     
    
          
    window.addEventListener("mousewheel",myfunction);
           
         
       function myfunction(scrolling_2) {
     
           
           
           
        if(scrolling_2.deltaY>0)
                  {          
            
              a++; 
             point_jor[a].style.background="white";
             point_jor[a-1].style.background="grey";
             point_jor[a].style.boxShadow= "0px 0px 15px #03e9f4";    
             point_jor[a-1].style.boxShadow= "none";   
                   }   
           
           
             else if(scrolling_2.deltaY<0)
                  {          
          
              a--;    
            point_jor[a].style.background="white";
             point_jor[a+1].style.background="grey";
             point_jor[a].style.boxShadow= "0px 0px 15px #03e9f4";    
             point_jor[a+1].style.boxShadow= "none";   
                
                   } 
           
           if (a==4){
              
               a=3;
           }
           
           else if (a==-1){
           
               a=0;
           }
           
           
        
           
           
             if(a==0){
               
               document.getElementById("scroll_jv").style.transform=pos[a]; 
             
               console.log(a)
                 
                  window.removeEventListener("mousewheel",myfunction);
               setTimeout(function(){
                    window.addEventListener("mousewheel",myfunction) },500);
                       
                  }
           
           else if(a==1){
               
               document.getElementById("scroll_jv").style.transform=pos[a]; 
               console.log(a)
                  window.removeEventListener("mousewheel",myfunction);
               setTimeout(function(){
                    window.addEventListener("mousewheel",myfunction) },500);
               
                
            }
                  
           
             else if(a==2){
      
                 document.getElementById("scroll_jv").style.transform=pos[a]; 
                 console.log(a)
                   window.removeEventListener("mousewheel",myfunction);
               setTimeout(function(){
                    window.addEventListener("mousewheel",myfunction) },500);
               }
                else if(a==3){
      
                 document.getElementById("scroll_jv").style.transform=pos[a]; 
                 console.log(a)
                   window.removeEventListener("mousewheel",myfunction);
               setTimeout(function(){
                    window.addEventListener("mousewheel",myfunction) },500);
               }   
                
            }
             
       
        
                                   
                 
           