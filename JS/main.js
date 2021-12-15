let tile_clicked;
let map_width=4;
let map_height=4
let highTile=0;
let population=10;
let food=110;
let authority=2;
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
let mapgen=0;
let gameyear=1254;
let started=0;
let enemyfood=150;
let enemywood=150;
let enemystone=150;
let enemypopulation=0;
let enemygold=0;
let enemyarmy=0;
let enemycity=0;
let sallahorfriend=0;
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
function showWarActions(){
	document.getElementById("warbuttons").style.display="block";
}
function showAdmin(){
	document.getElementById("adminbuttons").style.display="block";
}
function showUtils(){
	document.getElementById("miscbuttons").style.display="block";
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
	authority=authority-1;
	if(((wood>100)&&(stone>100))&&(Math.round(authority)>(Math.round(population/100)))){
	if (toCity.className=="tdgrasstile tdselected"){
	tileid=window.prompt("Insert the city name:");
	if((tileid!="")||(tileid!=null)){
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
		started=1;
		document.getElementById("generalnews").innerHTML="You built a city recently";
	}
	else if(tileid==null){
		alert("You cannot create a city with no name, sire");
	}
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
	let goldmetric=document.getElementById("goldid");
	goldmetric.innerHTML="Gold:"+gold;
    let popmetric=document.getElementById("popid");
	popmetric.innerHTML="Population:"+population;
	let authmetric=document.getElementById("polpower");
	authmetric.innerHTML="Authority:"+Math.round(authority*100 + Number.EPSILON)/100;
	let foodmetric=document.getElementById("foodid");
	foodmetric.innerHTML="Food:"+food;
	let woodmetric=document.getElementById("woodid");
	woodmetric.innerHTML="Wood:"+wood;
	let stonemetric=document.getElementById("stoneid");
	stonemetric.innerHTML="Stone:"+stone;
	let armymetric=document.getElementById("armyid");
	armymetric.innerHTML="Army:"+armysize;
	if(population<0) population=0;
	if(authority<0) authority=0;
	if(food<0) food=0;
	if(wood<0) wood=0;
	if(stone<0) stone=0;
	if(gold<0) gold=0;
	if(armysize<0) armysize=0;
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
			gold=gold+1;
			gameyear=gameyear+0.01;
		}
		sallahorfriend=sallahorfriend-0.1;
	},15000)
}
function expedition_go(soldiers_on_expedition){
	let a=setTimeout(function(){
		expedition_return(soldiers_on_expedition);
	},10000)
}
function researchimprov(param){
	let b=setTimeout(function(){
		if(param="wood") woodTile=woodTile+0.5;
		if(param="stone") stoneTile=stoneTile+0.5;
		if(param="food") foodTile=foodTile+0.5;
		if(param="gold") gold=gold+50;
	},7500);
}
function expedition_return(soldiers_on_expedition){
	let treasureno=Math.floor(Math.random() * 5);
	let treasurevalue=Math.round(Math.random()*soldiers_on_expedition+Math.random()*authority);
	console.log(soldiers_on_expedition);
	switch(treasureno){
		case 0:
			document.getElementById("generalnews").innerHTML="Our scouts returned home with "+treasurevalue+" wood, sire.";
			wood=wood+treasurevalue;
			break;
		case 1:
			document.getElementById("generalnews").innerHTML="Our scouts returned home with "+treasurevalue+" stone, sire.";
			stone=stone+treasurevalue;
			break;
		case 2:
			document.getElementById("generalnews").innerHTML="Our scouts returned home with "+treasurevalue+" gold, sire.";
			gold=gold+treasurevalue;
			break;
		case 3:
			document.getElementById("generalnews").innerHTML="Our scouts returned home with "+treasurevalue+" food, sire.";
			food=food+treasurevalue;
			break;
		case 4:
			document.getElementById("generalnews").innerHTML="Our scouts returned home with their hans in their asses, sire.";
			break;
	}
	soldiers=soldiers+soldiers_on_expedition;
}
function showCityUpgrades(){
	let selected=document.getElementById("SEL");
	//let arr=selected.className.split(" ");
	showCityUpgrades2();
}
function showCityUpgrades2(){
	document.getElementById("upbuttons").style.display="block";
}
function hideCityUpgrades(){
	document.getElementById("upbuttons").style.display="none";
}
function hideWarButtons(){
	document.getElementById("warbuttons").style.display="none";
}
function hideAdminButtons(){
	document.getElementById("adminbuttons").style.display="none";
}
function hideMiscButtons(){
	document.getElementById("miscbuttons").style.display="none";
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
			if(no_sold>gold){
				alert("You do not have enough gold, sire");
			}
			else{
				armysize=armysize+parseInt(no_sold);
				gold=gold-no_sold;
				population=population-no_sold;
				sallahorfriend=sallahorfriend+0.1;
			}
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
	if(mapgen==0){
		mapgen=1;
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
	enemytimer();
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
	
}
function sendExpedition(){
	if(armysize>0){
		soldiers_to_send=prompt("How many soldiers should we send on the expedition, sire?",1);
		let selected=document.getElementById("SEL");
		armysize=armysize-soldiers_to_send;
		document.getElementById("generalnews").innerHTML="We sent "+soldiers_to_send+" scouts on an expedition to "+selected.innerHTML;
		expedition_go(soldiers_to_send);
	}
}
function buyLand(){
	let con=document.getElementsByClassName("tdconquered");
	let sel=document.getElementById("SEL");
	let Rclassnames=sel.nextElementSibling.classList;
	let Lclassnames=sel.previousElementSibling.classList;
	if(Rclassnames[1]=="tdconquered"){
		if(gold>100) {
			gold=gold-100;
			sel.classList.add("tdconquered");
		}
		else{
			alert("You do not have enough money, sire.")
		}
	}
	if(Lclassnames[1]=="tdconquered"){
		if(gold>100) {
			gold=gold-100;
			sel.classList.add("tdconquered");
		}
		else{
			alert("You do not have enough money, sire.")
		}
	}
}
function techTree(){
	let toRes=prompt("What should our scholars research, sire?","Nothing");
	if(toRes=="wood"){
		document.getElementById("generalnews").innerHTML="Our scholars will soon imporve woodcutting, sire.";
		researchimprov(toRes);
	}
	if(toRes=="stone"){
		document.getElementById("generalnews").innerHTML="Our scholars will soon imporve mining, sire.";
		researchimprov(toRes);
	}
	if(toRes=="food"){
		document.getElementById("generalnews").innerHTML="Our scholars will soon imporve farming, sire.";
		researchimprov(toRes);
	}
	if(toRes=="gold"){
		document.getElementById("generalnews").innerHTML="Our scholars will soon imporve administration, sire.";
		researchimprov(toRes);
	}
}
function showAdv(){
	document.getElementById("advbuttons").style.display="block";
}
function hideAdv(){
	document.getElementById("advbuttons").style.display="none";
}
function moneyAdvisor(){
	document.getElementById("or").style.display="table-cell";
	document.getElementById("enemy").src="./IMG/money.png";
	let a= document.getElementsByClassName("otherreply");
	if(food>population){
		a[0].innerHTML="The Accountant:<br>-Sire, our food storages are doing well, which means that our citizens will continue on paying taxes.";
	}
	else{
		a[0].innerHTML="The Accountant:<br>-Sire, our food storages are dwindling, which means that our citizens will not pay the taxes! Send an expedition so we can maybe find some gold, or build a farm to supply your citizens with food.";
	}
	let b= document.getElementsByClassName("myreply");
	b[0].innerHTML="Rael:<br>-Adda, what is the current situation regarding our treasury?";
	
}
function espionageAdvisor(){
	document.getElementById("or").style.display="table-cell";
	document.getElementById("enemy").src="./IMG/spy.png";
	let a= document.getElementsByClassName("otherreply");
	if(armysize>enemy.army){
		a[0].innerHTML="The Spy:<br>-I think that we can sleep safely at night. Your army seems well prepared and big enough to handle some... locals, Sire.";
	}
	else{
		a[0].innerHTML="The Spy:<br>-Sire, I do not like saying it, but there is a difference in our army size and the local's army. Try to convert more soldiers to our cause, or else the public will start to become uneasy.";
	}
	let b= document.getElementsByClassName("myreply");
	b[0].innerHTML="Rael:<br>-Lod, do we have any enemy movement?";
}
function militaryAdvisor(){
	document.getElementById("or").style.display="table-cell";
	document.getElementById("enemy").src="./IMG/military.png";
	let a=document.getElementsByClassName("otherreply");
	if((gold>1)&&(population>1)){
		a[0].innerHTML="The General:<br>-Rael, we can convert more men into soldiers. I advise you to seek the spymaster to see if we need more soldiers, but mark my words, war is brewing, and we cannot afford to be caught lacking in soldiers.";
	}
	else{
		a[0].innerHTML="The General:<br>-You are dissapointing be, Rael. You don't have the necessary means to get more soldiers, yet you parade as king to a dying kingdom.";
	}
	let b= document.getElementsByClassName("myreply");
	b[0].innerHTML="Rael:<br>-General Kran, what can you tell me about our military might?";
}
function foodAdvisor(){
	document.getElementById("or").style.display="table-cell";
	document.getElementById("enemy").src="./IMG/farmer.png";
	let a=document.getElementsByClassName("otherreply");
	if((food>population)&&(foodTile>popTile)){
		a[0].innerHTML="The Farmer:<br>-Sire, I wish to inform you that we are well fed and that we can live another day to see your glorious kingdom rise more and more,";
	}
	else{
		a[0].innerHTML="The Farmer:<br>-Sire, I dislike bothering you with such things, but we are surely going to die out if we keep this up. Build more farms sire, or you won't have any people to call your subjects.";
	}
	let b= document.getElementsByClassName("myreply");
	b[0].innerHTML="Rael:<br>-Grandmaster Chugi, what is the current food situation?";
}
function attackTile(){
	let sel=document.getElementById("SEL");
	let arr=sel.classList;
	if(arr[1]=="tdenconquered"){
		let attackers=prompt("How many soldiers should we send to attack?");
		if(attackers>armysize){
			alert("You do not have enough troops.")
		}
		else{
			if(attackers>Math.round(enemyarmy/10)){
				armysize=armysize-attackers;
				setTimeout(function(){
				document.getElementById("generalnews").innerHTML="We ravaged the attacked tile.";
				sel.className="tdgrasstile";
				gold=gold+Math.round(Math.random())*enemygold
				enemyarmy=enemyarmy-enemyarmy/10},10000);
			}
		}
	}
	else{
		alert("We can't attack empty tiles.")
	}
}
function defendTile(){
	let sel=document.getElementById("SEL");
	let arr=sel.classList;
	console.log(arr);
	if(armysize>1){
	if(arr[1]=="tdconquered"){
		let defenders=prompt("How many soldiers shall defend this tile?");
		if(defenders>armysize){
			prompt("You don't have enough soldiers.")
		}
		else{
			armysize=armysize-defenders;
			tiles.push(sel.innerHTML+" "+defenders+" soldiers");
			sel.innerHTML=sel.innerHTML+" "+defenders+" soldiers";
			sallahorfriend=sallahorfriend+0.1;
		}
	}
	else{
		alert("Why would you defend unoccupied tiles?")
	}
	}
	else{
		alert("You have no soldiers to send here.")
	}
}
/*====================================================ENEMY CONTROLS=========================================================*/

function enemytimer(){
	setInterval(function(){
		if((enemywood>50)&&(enemystone>50)){
			enemyCity();
		}
		if((enemywood>20)&&(enemystone>20)){
			enemyUpgrade();
		}
		else if((population>250)&&(enemyarmy>100)){
			enemyUpgrade2();
		}
		if(enemyarmy>1){
			enemyAttackTile();
		}
	},25000);
}
function enemyCity(){
	let a=document.getElementsByClassName("tdgrasstile");
	let enemycounter=0;
	for(i=0;i<a.length;i++){
		list=a[i].classList;
		if(list[1]!="tdconquered") {
			enemycounter=enemycounter+1;
		}
	}
	let coords=Math.round((Math.random()*enemycounter))
	a[coords].classList.add("tdencitytile");
	tiles.push(a[coords].innerHTML+" placeholder");
	a[coords].innerHTML="placeholder";
	enemypopulation=enemypopulation+100;
	enemystone=enemystone-50;
	enemywood=enemywood-50;
	enemycity=enemycity+1;
	updateEnemyTerr();
}
function enemyUpgrade(){
	let possup=document.getElementsByClassName("tdenconquered");
	rand=Math.ceil(Math.random()*possup.length);
	rand2=Math.ceil(Math.random()*4);
	if(rand2==0){
		possup[rand].classList.add("tdenupgrademine");
		enemystone=enemystone+100;
	}
	else if(rand2==1){
		possup[rand].classList.add("tdenupgradefarm");
		enemyfood=enemyfood+100;
	}
	else if(rand2==2){
		possup[rand].classList.add("tdenupgraderesidential");
		enemypopulation=enemypopulation+100;
	}
	else if(rand2==3){
		possup[rand].classList.add("tdenupgradelumberer");
		enemywood=enemywood+100;
	}
};
function enemyUpgrade2(){
	let possup=document.getElementsByClassName("tdenconquered");
	rand=Math.ceil(Math.random()*possup.length);
	if(enemypopulation>enemyfood){
		possup[rand].classList.add("tdenupgradefarm");
		enemyfood=enemyfood+100;
		enemystone=enemystone-20;
		enemywood=enemywood-20;
	}
	else if(enemyfood>enemystone){
		possup[rand].classList.add("tdenupgrademine");
		enemystone=enemystone+100;
		enemystone=enemystone-20;
		enemywood=enemywood-20;
	}
	else if(enemystone>enemywood){
		possup[rand].classList.add("tdenupgradelumberer");
		enemywood=enemywood+100;
		enemystone=enemystone-20;
		enemywood=enemywood-20;
	}
	else {
		possup[rand].classList.add("tdenupgraderesidential");
		enemypopulation=enemypopulation+100;
		enemystone=enemystone-20;
		enemywood=enemywood-20;
	}
	enemyUpgrade();
	if(population>100){
		enemyarmy=enemyarmy+10;
		enemypopulation=enemypopulation-10;
	}
}
function updateEnemyTerr(){
	let cities=document.getElementsByClassName("tdencitytile");
	let tilename=cities.innerHTML;
	for(var i=0;i<cities.length;i++){
		cities[i].classList.add("tdenconqueredd");
		tokens=cities[i].innerHTML.split(" ");
		if(cities[i].previousElementSibling==undefined){
			cities[i].nextElementSibling.classList.add("tdenconquered");
			arr=cities[i].parentElement.previousElementSibling.childNodes;
			arr[1].classList.add("tdenconquered");
			arr[3].classList.add("tdenconquered");
			arr2=cities[i].parentElement.nextElementSibling.childNodes;
			arr2[1].classList.add("tdenconquered");
			arr2[3].classList.add("tdenconquered");
		}
		else if(cities[i].nextElementSibling==undefined){
			cities[i].previousElementSibling.classList.add("tdenconquered");
			arr=cities[i].parentElement.previousElementSibling.childNodes;
			arr[17].classList.add("tdenconquered");
			arr[19].classList.add("tdenconquered");
			arr2=cities[i].parentElement.nextElementSibling.childNodes;
			arr2[17].classList.add("tdenconquered");
			arr2[19].classList.add("tdenconquered");
		}	
		else{
			cities[i].previousElementSibling.classList.add("tdenconquered");
			cities[i].nextElementSibling.classList.add("tdenconquered");
			let parent=cities[i].parentNode;
			let childNo=Array.prototype.indexOf.call(parent.children,cities[i]);
			arr=cities[i].parentElement.previousElementSibling.children;
			arr[childNo-1].classList.add("tdenconquered");
			arr[childNo].classList.add("tdenconquered");
			arr[childNo+1].classList.add("tdenconquered");
			arr2=cities[i].parentElement.nextElementSibling.children
			arr2[childNo-1].classList.add("tdenconquered");
			arr2[childNo].classList.add("tdenconquered");
			arr2[childNo+1].classList.add("tdenconquered");
			
		}
	}
}
function winn(){
	let a=document.getElementsByClassName("tdenconquered");
	let b=a.length
	if(b==enemyCity){
		alert("You won");
	}
}
function enemyAttackTile(){
	let arr=document.getElementsByClassName("tdconquered");
	let rand=Math.round(Math.random()*arr.length);
	let currtile=arr[rand];
	let words=currtile.innerHTML;
	let word=words.split(' ');
	console.log(word);
	if(enemyarmy>1){
		let defend_no=Number(word[2])
		let enemyattackers=Math.round(Math.random()*enemyarmy);
		if(enemyattackers>defend_no){
		document.getElementById("generalnews").innerHTML="Sallahor's armies razed the tile.";
		currtile.className="tdgrasstile";
		}
	}
}
function talkSallahor(){
	document.getElementById("or").style.display="table-cell";
	document.getElementById("enemy").src="./IMG/otherking.png";
	let a=document.getElementsByClassName("otherreply");
	let b= document.getElementsByClassName("myreply");
	if(sallahorfriend==0){
		a[0].innerHTML="Sallahor:<br>-One soldier of mine counts 10 of your pretty dolls.";
		b[0].innerHTML="Rael:<br>-Sallahor, I came to talk.";
	}
	else if(sallahorfriend<-2){
		a[0].innerHTML="Sallahor:<br>-The savagery starts later my dear Prince...";
		b[0].innerHTML="Rael:<br>-Savage King, talk to me.";
	}
	else if(sallahorfriend<-5){
		a[0].innerHTML="Sallahor:<br>-I cannot wait to skin you in front of my people, and drink your blood.";
		b[0].innerHTML="Rael:<br>-Talk to me, savage dog.";
	}
	else if(sallahorfriend>2){
		a[0].innerHTML="Sallahor:<br>-While your soldiers look like kids in my kingdom, you have proven youreslf to at least be a capable leader.";
		b[0].innerHTML="Rael:<br>-King Sallahor, I wish to talk to you.";
	}
	else if(sallahorfriend>5){
		a[0].innerHTML="Sallahor:<br>-What do you want, Son of Dwog. You gained a bit of my respect, so don't waste it.";
		b[0].innerHTML="Rael:<br>-King Sallahor, how do things fare in your kingdom?";
	}
}