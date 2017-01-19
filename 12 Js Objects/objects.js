var someObject={
	friends:[
		{name:"melfoy"},
	]
}

console.log( someObject["friends"][0]["name"] +"    "+
someObject.friends[0].name
);

var movies=[
	{
		name:"dark knight",
		rating:8.8,
		hasSeen:true
	},
	{
		name:"intersteller",
		rating:8.9,
		hasSeen:true
	},
	{
		name:"la la land",
		rating:8.8,
		hasSeen:false
	}
];


movies.forEach(function(obj){

	if (obj.hasSeen){
		console.log("You have watched \""+obj.name+"\" and it is rated "+obj.rating+" on imdb");
	}
	else{
		console.log("You have not seen \""+obj.name+"\" and it is rated "+obj.rating+" on imdb");
	}
});