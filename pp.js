var pc=document.getElementById("pa").childNodes;
var i;
for(i=0;i<pc.length;i++)
	pc[i].innerHTML="akoakoa";
var k=document.getElementById("sam");
if(window.innerWidth>500)
	k.src="cat.jpg";
else
	k.src="dog.jpg";
console.log(k.src);
function mybb()
{
	if(k.src=="file:///C:/Users/apoor/Desktop/blogs/dog.jpg")
		k.src="cat.jpg";
	else 
		k.src="dog.jpg";
}
function all(){
	alert("the page is loaded");
}