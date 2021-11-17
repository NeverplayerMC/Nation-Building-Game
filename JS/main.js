let tile_clicked;
let map_width=4;
let map_height=4
let highTile=0;
let population=0;
let food=110;
let authority=0;
let wood=150;
let stone=150;
let consw=0;
let woodTile=0;
let stoneTile=0;
let popTile=0;
let foodTile=0;
let cityTile=0;
let armysize=0;
let gold=0;
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
	authority=authority-3;
	if((wood>100)&&(stone>100)&&(Math.round(authority))>(Math.round(population/100))){
	if (toCity.className=="tdgrasstile tdselected"){
	let tileid=window.prompt("Insert the city name:");
	tiles.push(toCity.innerHTML+" "+tileid);
	toCity.innerHTML=toCity.innerHTML+" "+tileid;
	toCity.className='';
	toCity.classList.add("tdcitytile");
	population=population+100;
	updateTerr();
	authority=authority+3;
	wood=wood-100;
	stone=stone-100;
	cityTile=cityTile+1;
	}
	else{
		alert("You can't create a city here.");
	}
}
else{
	alert("You don't have enough resources.");
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
	let woodmetric=document.getElementById("woodid");
	woodmetric.innerHTML="Wood:"+wood;
	let stonemetric=document.getElementById("stoneid");
	stonemetric.innerHTML="Stone:"+stone;
	if(population<0) population=0;
	if(authority<0) authority=0;
	if(food<0) food=0;
	if(wood<0) wood=0;
	if(stone<0) stone=0;
}, 100);
}
function grower(){
	setInterval(function(){
		wood=wood+woodTile;
		stone=stone+stoneTile;
		if(population>food){
			population=population-popTile;
			food=food-2;
		}
		else{
			if(population<food){
				population=population+popTile;
			}
		}
	},2500)
}
function authgrow(){
	setInterval(function(){
		if(food<population){
			authority=authority-0.1;
		}
		else if(food>population){
			authority=authority+0.1;
		}
	},15000)
}
function showCityUpgrades(){
	let selected=document.getElementById("SEL");
	let arr=selected.className.split(" ");
	showCityUpgrades2();
}
function showCityUpgrades2(){
	document.getElementById("upbuttons").style.display="block";
}
function hideCityUpgrades(){
	document.getElementById("upbuttons").style.display="none";
}
function buildFarm(){
	let selected=document.getElementById("SEL");
	let arr=selected.className.split(" ");
	if((wood>15) && (stone>8)){
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
			foodTile=foodTile+1;
			wood=wood-15;
			stone=stone-8;
			food=food+50;
		}
	}	
	}
	else{
		alert("You don't have enough resources.");
		
	}
}
function buildLumberer(){
	let selected=document.getElementById("SEL");
	let arr=selected.className.split(" ");
	console.log(arr)
	if((wood>30)&&(stone>12)){
		if((arr[0]=="tdcitytile")||(arr[0]=="tdwatertile")){
		alert("You cannot upgrade this type of terrain.");
	}
	else{
		if(arr[1]!="tdconquered"){
			alert("You cannot build upgrades outside of your borders.");
		}
		else if(arr[1]!="tdforesttile"){
			arr[0]="tdupgradelumberer";
			selected.className="";
			selected.classList.add(arr[0]);
			selected.classList.add(arr[1]);
			selected.classList.add(arr[2]);
			selected.classList.add(arr[3]);
			woodTile=woodTile+1;
			wood=wood-30;
			stone=stone-12;
		}
	}
	}	
	else{
		alert("You don't have enough resources.");
	}
}
function buildMine(){
	let selected=document.getElementById("SEL");
	let arr=selected.className.split(" ");
	console.log(arr);
	if((wood>12)&&(stone>30)){
	if((arr[0]=="tdcitytile")||(arr[0]=="tdwatertile")){
		alert("You cannot upgrade this type of terrain.");
	}
	else{
		if(arr[1]!="tdconquered"){
			alert("You cannot build upgrades outside of your borders.");
		}
		else if(arr[1]!="tdmountaintile"){
			arr[0]="tdupgrademine";
			selected.className="";
			selected.classList.add(arr[0]);
			selected.classList.add(arr[1]);
			selected.classList.add(arr[2]);
			selected.classList.add(arr[3]);
			stoneTile=stoneTile+1;
			wood=wood-12;
			stone=stone-30;
		}
	}	
	}
	else{
		alert("You don't have enough resources.");
	}
}
function buildResidential(){
	if((wood>20)&&(stone>20)){
	let selected=document.getElementById("SEL");
	let arr=selected.className.split(" ");
	console.log(arr)
	if((arr[0]=="tdcitytile")||(arr[0]=="tdwatertile")){
		alert("You cannot upgrade this type of terrain.");
	}
	else{
		if(arr[1]!="tdconquered"){
			alert("You cannot build upgrades outside of your borders.");
		}
		else if(arr[1]!="tdgrasstile"){
			arr[0]="tdupgraderesidential";
			selected.className="";
			selected.classList.add(arr[0]);
			selected.classList.add(arr[1]);
			selected.classList.add(arr[2]);
			selected.classList.add(arr[3]);
			popTile=popTile+1;
			
			wood=wood-20;
			stone=stone-20;
		}
	}
	}
	else{
		alert("You don't have enough resources.");
	}
}
function convertsoldiers(){
	if(population>0){
		let no_sold=prompt("How many soldiers should we convert, sire?");
		if(no_sold>population){
			alert("Not enugh people, sire.");
		}
		else{
			soldiers=soldiers+no_sold;
		}
	}
}
function swTint(){
	if(consw==0)
	{
		let cities=document.getElementsByClassName("tdconquered");
		for(i=0;i<cities.length;i++){
			cities[i].classList.add("tdconqueredhid");
		}
		consw=1;
	}
	else{
		let cities=document.getElementsByClassName("tdconquered");
		for(i=0;i<cities.length;i++){
			cities[i].classList.remove("tdconqueredhid");
		}
		consw=0;
	}
}
function generateMap(){
	let genMap=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(i =0;i<100;i++){
		let rand=Math.round(Math.random()*10);
		if(rand>=3){
			genMap[i]=1;
		}
		else{
			genMap[i]=0;
		}
	}
	for(i=0;i<100;i++){
		tiles3=document.getElementsByClassName("tdgrasstile");
	}
	for(i=1;i<=100;i++){
		if(genMap[i]==0){
			tiles3[i].classList.add("tdwatertile");
			tiles3[i].classList.remove("tdgrasstile");
		}
		if((genMap[i]==1)&&(Math.random()>0.8)){
			tiles3[i].classList.add("tdforesttile");
			tiles3[i].classList.remove("tdgrasstile");
		}
		else if((genMap[i]==1)&&(Math.random()>0.9)){
			tiles3[i].classList.add("tdmountaintile");
			tiles3[i].classList.remove("tdgrasstile");
		}
	}
}
function saveMap(){
	
}