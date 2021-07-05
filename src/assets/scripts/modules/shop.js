const items = {
	title: 'IMac Pro',
	year: 2019,
	price: 1130,
};

let str = ` 
	<h3>Name: ${items.title}</h3>
	<h3>Year: ${items.year}</h3>
	<h3>Price: ${items.price}</h3>
`;
document.getElementById("demo").innerHTML = str;

console.log("shop js")