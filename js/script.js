
// cat array
var catarray = [
	{
		name: "Arnold on Table",
		img: 'images/kingarnold.jpg',
		count: 0,
		id: 1
	},
	{
		name: "Arnold on the Couch",
		img: 'images/arnoldoncouch.jpg',
		count: 0,
		id: 2
	},
	{
		name: "Arnold on my Face",
		img: 'images/arnoldonface.jpg',
		count: 0,
		id: 3
	},
	{
		name: "Arnold's Paws",
		img: 'images/arnoldpaw.jpg',
		count: 0,
		id:4
	}
]


function loadbuttons(catarray) {

	for (var i = 0; i < catarray.length; i++) {
		var catentry = document.createElement('div');
		catentry.setAttribute("id", "buttonsdiv");

		// Inserting cat's assigned name/title onto page
		var catbutton = document.createElement('button');
		var catname = catarray[i].name;
		catbutton.setAttribute("id", catname);
		catbutton.setAttribute("class", "catbuttons");

		var iCopy = i;
		// catbutton.setAttribute("onclick", "javascript:buttonclicked("+iCopy, catarray+");");
		catbutton.setAttribute("onclick", "javascript:buttonclicked("+iCopy+");");
		catbutton.innerHTML = catname;

		catentry.appendChild(catbutton);
		document.body.appendChild(catentry);

	}

}

function buttonclicked(iCopy) {  // include catarray as parameter
	
	var onpage = document.getElementById("isonpage");
	// console.log(onpage);
	var arrayname = catarray[iCopy].name

	if (onpage == null) { // cat is not yet on page
		
		// Print instance of cat on page
		var catdiv = document.createElement("div"); // houses all cat elements

		var catname = document.createElement("h2");
		var name = catarray[iCopy].name;
		catname.innerHTML=name;

		catdiv.setAttribute("id", "isonpage");
		catdiv.appendChild(catname)

		var catimage = document.createElement("img");
		var image = catarray[iCopy].img;
		catimage.setAttribute("src", image);
		catimage.style.width = "400px";
		catdiv.appendChild(catimage);

		var catcount = document.createElement("p");
		catarray[iCopy].count = catarray[iCopy].count+1;  // update clicker count
		var total=catarray[iCopy].count;
		var text = "Number of clicks: " + total;
		catcount.innerHTML = text;
		catdiv.appendChild(catcount);


		document.body.appendChild(catdiv);
	}

	else { // cal already exists	
		catdiv = document.getElementById("isonpage");
		document.body.removeChild(catdiv);
	}
};

loadbuttons(catarray);