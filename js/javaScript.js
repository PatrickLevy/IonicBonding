var ions = {
	"cations": [
	{
		"formula": "H+1",
		"charge": 1
	},
	{
		"formula": "Li+1",
		"charge": 1
	},

	{
		"formula": "Na+1",
		"charge": 1
	},
	{
		"formula": "K+1",
		"charge": 1
	},

	{
		"formula": "Be+2",
		"charge": 2
	},
	{
		"formula": "Mg+2",
		"charge": 2
	},
	{
		"formula": "Ca+2",
		"charge": 2
	},
	{
		"formula": "Ba+2",
		"charge": 2
	},
	{
		"formula": "B+3",
		"charge": 3
	},
	{
		"formula": "Al+3",
		"charge": 3
	},
	{
		"formula": "NH4+1",
		"charge": 1
	},
	{
		"formula": "Cr+2",
		"charge": 2
	},
	{
		"formula": "Cr+3",
		"charge": 3
	},
	{
		"formula": "Cr+6",
		"charge": 6
	},
	{
		"formula": "Co+2",
		"charge": 2
	},
	{
		"formula": "Co+3",
		"charge": 3
	},
	{
		"formula": "Fe+2",
		"charge": 2
	},
	{
		"formula": "Fe+3",
		"charge": 3
	},
	{
		"formula": "Pb+2",
		"charge": 2
	},
	{
		"formula": "Pb+4",
		"charge": 4
	},
	{
		"formula": "Mn+2",
		"charge": 2
	},
	{
		"formula": "Mn+3",
		"charge": 3
	},
	{
		"formula": "Hg+1",
		"charge": 1
	},
	{
		"formula": "Hg+2",
		"charge": 2
	},
	{
		"formula": "Ni+2",
		"charge": 2
	},
	{
		"formula": "Ni+3",
		"charge": 3
	},
	{
		"formula": "Sn+2",
		"charge": 2
	},
	{
		"formula": "Sn+4",
		"charge": 4
	},
	{
		"formula": "Zn+2",
		"charge": 2
	},
	{
		"formula": "Ag+1",
		"charge": 1
	}
	
	
	],
	
	"anions": [
	{
		"formula": "F-1",
		"charge": 1
	},
	{
		"formula": "Cl-1",
		"charge": 1
	},
	{
		"formula": "Br-1",
		"charge": 1
	},
	{
		"formula": "I-1",
		"charge": 1
	},
	{
		"formula": "O-2",
		"charge": 2
	},
	{
		"formula": "S-2",
		"charge": 2
	},
	{
		"formula": "N-3",
		"charge": 3
	},
	{
		"formula": "P-3",
		"charge": 3
	},
	{
		"formula": "OH-1",
		"charge": 1
	},
	{
		"formula": "NO3-1",
		"charge": 1
	},
	{
		"formula": "NO2-1",
		"charge": 1
	},
	{
		"formula": "SO3-1",
		"charge": 1
	},
	{
		"formula": "C2H3O2-1",
		"charge": 1
	},
	{
		"formula": "SO4-2",
		"charge": 2
	},
	{
		"formula": "CO3-2",
		"charge": 2
	},
	{
		"formula": "CrO4-2",
		"charge": 2
	},
	{
		"formula": "PO4-3",
		"charge": 3
	},
	{
		"formula": "CN-1",
		"charge": 1
	},
	{
		"formula": "ClO4-1",
		"charge": 1
	},
	{
		"formula": "ClO-1",
		"charge": 1
	},
	{
		"formula": "ClO3-1",
		"charge": 1
	},
	{
		"formula": "ClO2-1",
		"charge": 1
	},
	{
		"formula": "MnO4-1",
		"charge": 1
	},
	{
		"formula": "C2O4-2",
		"charge": 2
	},
	{
		"formula": "Cr2O7-2",
		"charge": 2
	}
	]

};


//Check the number of each type of ion in database
var numCatIons = ions.cations.length;
var numAnIons = ions.anions.length;

//Generate a random index for each ion
var cationIndex = Math.floor((Math.random() * numCatIons));
var anionIndex = Math.floor((Math.random() * numAnIons));

//output to console which indexes are being referenced
console.log(cationIndex);
console.log(anionIndex);

//Display randomly selected ions
displayIons();

//Display current problem to player
function displayIons(){
	$("#ionsDiv").append("                    ");
	var formattedCation = '<h6>%data%</h6>';
	formattedCation = formattedCation.replace("%data%", ions.cations[cationIndex].formula);
	$("#ionsDiv").append(formattedCation);

	var formattedAnion = '<h6>%data%</h6>'
	formattedAnion = formattedAnion.replace("%data%", ions.anions[anionIndex].formula);
	$("#ionsDiv").append(formattedAnion);
	
}

//Take input from user here!
function getUserInput(){
	var cationSubscript = document.getElementById("catSubVal").value;
	var anionSubscript = document.getElementById("anSubVal").value;
	console.log("cation" + cationSubscript);
	console.log("anion" + anionSubscript);

	//Check if answers are correct
	var posCharge = cationSubscript * ions.cations[cationIndex].charge;
	var negCharge = anionSubscript * ions.anions[anionIndex].charge;
		if (posCharge === negCharge){
			$("#answerDiv").html("The subscripts are correct!");
			console.log("correct!");
		}
		else {
			$("#answerDiv").html("The subscripts are incorrect!");
			console.log("incorrect!");
		}
	}

function refreshPage(){
window.location.reload();
}



