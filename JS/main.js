let tile_clicked;
let map_width=4;
let map_height=4
let highTile=0;
let population=0;
let food=0;
let authority=0;
const tiles=["TILE 1",
"TILE 2",
"TILE 3",
"TILE 4",
"TILE 5",
"TILE 6",
"TILE 7",
"TILE 8",
"TILE 9",
"TILE 10",
"TILE 11",
"TILE 12",
"TILE 13",
"TILE 14",
"TILE 15",
"TILE 16",
"TILE 17",
"TILE 18",
"TILE 19",
"TILE 20",
"TILE 21",
"TILE 22",
"TILE 23",
"TILE 24",
"TILE 25",
"TILE 26",
"TILE 27",
"TILE 28",
"TILE 29",
"TILE 30",
"TILE 31",
"TILE 32",
"TILE 33",
"TILE 34",
"TILE 35",
"TILE 36",
"TILE 37",
"TILE 38",
"TILE 39",
"TILE 40",
"TILE 41",
"TILE 42",
"TILE 43",
"TILE 44",
"TILE 45",
"TILE 46",
"TILE 47",
"TILE 48",
"TILE 49",
"TILE 50",
"TILE 51",
"TILE 52",
"TILE 53",
"TILE 54",
"TILE 55",
"TILE 56",
"TILE 57",
"TILE 58",
"TILE 59",
"TILE 60",
"TILE 61",
"TILE 62",
"TILE 63",
"TILE 64",
"TILE 65",
"TILE 66",
"TILE 67",
"TILE 68",
"TILE 69",
"TILE 70",
"TILE 71",
"TILE 72",
"TILE 73",
"TILE 74",
"TILE 75",
"TILE 76",
"TILE 77",
"TILE 78",
"TILE 79",
"TILE 80",
"TILE 81",
"TILE 82",
"TILE 83",
"TILE 84",
"TILE 85",
"TILE 86",
"TILE 87",
"TILE 88",
"TILE 89",
"TILE 90",
"TILE 91",
"TILE 92",
"TILE 93",
"TILE 94",
"TILE 95",
"TILE 96",
"TILE 97",
"TILE 98",
"TILE 99",
"TILE 100"]
const tiles2=[]
let tdTags=[];
function updateTiles(){
	tdTags=document.getElementsByTagName("td");
}
document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        tile_clicked = target.textContent || target.innerText;   
		if(tiles.includes(tile_clicked)){
			showUpgrades();
			highlightSelected(tile_clicked);
		}
}, false);

function showUpgrades(){
	document.getElementById("upgrades").style.display="block";
}
function hideUpgrades(){
	document.getElementById("upgrades").style.display="none";
}
function highlightSelected(tile){
	removeHighlights()
	updateTiles();
	for (var i=0;i<tdTags.length;i++){
		if(tdTags[i].innerHTML==tile){
			highTile=tdTags[i];
			break;
		}
	}
	highTile.classList.add("tdselected");
	highTile.id="SEL";
	document.getElementById("info").innerHTML=tile;
}
function removeHighlights(tile){
	var tdTags=document.getElementsByTagName("td");
	for (var i=0;i<tdTags.length;i++){
		tdTags[i].classList.remove("tdselected");
		tdTags[i].id='';
	}
}
function createCity(){
	let toCity=document.getElementById("SEL");
	if (toCity.className=="tdgrasstile tdselected"){
	let tileid=window.prompt("Insert the city name:");
	tiles.push(toCity.innerHTML+" "+tileid);
	toCity.innerHTML=toCity.innerHTML+" "+tileid;
	toCity.className='';
	toCity.classList.add("tdcitytile");
	population=population+100;
	updateTerr();
	authority=authority+3;
	}
	else{
		alert("You can't create a city on water.")
	}
}
function updateTerr(){
	let cities=document.getElementsByClassName("tdcitytile");
	let tilename=cities.innerHTML;
	for(var i=0;i<cities.length;i++){
		cities[i].classList.add("tdconquered");
		tokens=cities[i].innerHTML.split(" ");
		if(cities[i].previousElementSibling==undefined){
			cities[i].nextElementSibling.classList.add("tdconquered");
			arr=cities[i].parentElement.previousElementSibling.childNodes;
			console.log(arr);
			arr[1].classList.add("tdconquered");
			arr[3].classList.add("tdconquered");
			/*let parent=cities[i].parentNode;
			let childNo=Array.prototype.indexOf.call(parent.children,cities[i]);
			console.log(childNo);*/
			arr2=cities[i].parentElement.nextElementSibling.childNodes;
			arr2[1].classList.add("tdconquered");
			arr2[3].classList.add("tdconquered");
		}
		else if(cities[i].nextElementSibling==undefined){
			cities[i].previousElementSibling.classList.add("tdconquered");
			arr=cities[i].parentElement.previousElementSibling.childNodes;
			console.log(arr);
			arr[17].classList.add("tdconquered");
			arr[19].classList.add("tdconquered");
			/*let parent=cities[i].parentNode;
			let childNo=Array.prototype.indexOf.call(parent.children,cities[i]);
			console.log(childNo);*/
			arr2=cities[i].parentElement.nextElementSibling.childNodes;
			arr2[17].classList.add("tdconquered");
			arr2[19].classList.add("tdconquered");
		}	
		else{
			cities[i].previousElementSibling.classList.add("tdconquered");
			cities[i].nextElementSibling.classList.add("tdconquered");
			let parent=cities[i].parentNode;
			let childNo=Array.prototype.indexOf.call(parent.children,cities[i]);
			arr=cities[i].parentElement.previousElementSibling.children;
			arr[childNo-1].classList.add("tdconquered");
			arr[childNo].classList.add("tdconquered");
			arr[childNo+1].classList.add("tdconquered");
			arr2=cities[i].parentElement.nextElementSibling.children;
			arr2[childNo-1].classList.add("tdconquered");
			arr2[childNo].classList.add("tdconquered");
			arr2[childNo+1].classList.add("tdconquered");
		}
	}
}
function wrsize(){
	let arr;
	for(var i=1;i<11;i++){
		arr=arr+"\n<tr>"
		for(var j=1;j<11;j++){
			arr=arr+("\n	<td class="+'"tdgrasstile"'+">TILE "+i+" "+j+"</td>");
		}
		arr=arr+("\n</tr>")
	}
	console.log(arr);
}
function refresher(){
	setInterval(function(){ 
    let popmetric=document.getElementById("popid");
	popmetric.innerHTML="Population:"+population;
	let authmetric=document.getElementById("polpower");
	authmetric.innerHTML="Authority:"+authority;
	let foodmetric=document.getElementById("foodid");
	foodmetric.innerHTML="Food:"+food;
}, 1000);
}
function showCityUpgrades(){
	let selected=document.getElementById("SEL")
	let arr=selected.className.split(" ");
	if((arr[0]=="tdcitytile")||(arr[0]=="tdwatertile")){
		alert("You cannot upgrade this type of terrain.");
	}
	else{
		if(arr[1]!="tdconquered"){
			alert("You cannot build upgrades outside of your borders.");
		}
		else{
			showCityUpgrades2();
		}
	}
}
function showCityUpgrades2(){
	document.getElementById("upbuttons").style.display="block";
}
function hideCityUpgrades(){
	document.getElementById("upbuttons").style.display="none";
}
function buildFarm(){
	let selected=document.getElementById("SEL")
	let arr=selected.className.split(" ");
	if((arr[0]=="tdcitytile")||(arr[0]=="tdwatertile")){
		alert("You cannot upgrade this type of terrain.");
	}
	else{
		if(arr[1]!="tdconquered"){
			alert("You cannot build upgrades outside of your borders.");
		}
		else{
			arr[0]="tdupgradefarm";
			selected.className="";
			selected.classList.add(arr[0]);
			selected.classList.add(arr[1]);
			food=food+50;
		}
	}	
}
function hideTint(){
	let cities=document.getElementsByClassName("tdconquered");
	console.log(cities);
}