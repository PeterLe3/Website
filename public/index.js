$(".link").click(function(){
 window.open('https://www.linkedin.com/in/peterle3', '_blank');       
});

$(".git").click(function(){
         window.open('https://github.com/PeterLe3', '_blank');       
});
$(".resume").click(function(){
window.open('https://drive.google.com/open?id=0B2A-FOmRoyVdOHEyZ2NXdDlLaG8');
});


$(".toTop").click(function() {
	document.body.scrollTop = 0;
})

function sendEmail() {
	var email = "mailto:lepeter125@gmail.com?";
	var subject = "subject=" + $("#text3").val();
	var text = "body=" + encodeURIComponent($("#comment").val().trim());
	email += subject + "&" + text;

	window.location.href=email;


}


