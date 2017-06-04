$(".link").click(function(){
 window.open('https://www.linkedin.com/in/peterle3', '_blank');       
});

$(".git").click(function(){
         window.open('https://github.com/PeterLe3', '_blank');       
});
$(".resume").click(function(){
window.open('https://drive.google.com/open?id=0B2A-FOmRoyVdOHEyZ2NXdDlLaG8');
});

$("i").hover(
  function() {
  $(this).addClass("fa-4x");
  },
  
  function(){
    $(this).removeClass("fa-4x");
  } 
  
);


/*
$(".proj-tab").click(function(){
$.scrollTo("#proj");
   });
*/


