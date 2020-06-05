const companies = [
	{ name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
	{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
	{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
	{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
	{ name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
	{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
	{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
	{ name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
	{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];

const ages = [ 33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32 ];

// for(let i = 0;i < companies.length;i++){
//     console.log(companies[i]);
// }

// companies.forEach(function(company){
//     console.log(company.name,company.category);
// });

//companies.forEach((company)=> console.log(company.name));

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
// 	if (ages[i] >= 18) {
// 		canDrink.push(ages[i]);
// 	}
// }
// console.log(canDrink);

// const canDrink = ages.filter((age) => {
// 	if(age >= 21){
// 		return true;
// 	}
// });
// console.log(canDrink);

// const canDrink = ages.filter((age) => age >= 18);
// console.log(canDrink);

//Filter retail companies

// const retailCompanies = companies.filter(function(company) {
// 	if (company.category === 'Retail') {
// 		return true;
// 	}
// });
// console.log(retailCompanies);

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

//Get 80s companies
// const startEighty = companies.filter(company => (company.end >= 1980 && company.start < 1990 ));
// console.log(startEighty);

//Get companies that lasted 10 years or more
// const tenYear = companies.filter((company) => company.end - company.start >= 10);
// console.log(tenYear);

//Map

//Create array of companyNames
// const companyNames = companies.map(function(company){
// return company.name;
// });
// console.log(companyNames);

// const companyNames = companies.map(company => company.name);
// console.log(companyNames);

// const companyNames = companies.map(company => 10 - 4);
// console.log(companyNames);

//Format the data
// const testMap = companies.map(function(company){
//    return `${company.name} [${company.start} - ${company.end}]`
// });
// console.log(testMap);

// const testMap = companies.map((company) => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);

//Square each age item in the array
// const ageSquare = ages.map(age => Math.sqrt(age));
// console.log(ageSquare);

//Age times two
// const ageTimesTwo = ages.map(age => age * 2);
// console.log(ageTimesTwo);

//Combine two maps
// const ageMap = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2);
// console.log(ageMap);

//Sort
//Sort companies by start Year
// const sortedCompanies = companies.sort(function(c1,c2){
// 	if(c1.start > c2.start){
// 		return 1;
// 	} else{
// 		return -1;
// 	}
// });
// console.log(sortedCompanies);

// const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

//Sort Ages
// const sortAges = ages.sort();
// console.log(sortAges);

// const sortAges = ages.sort((a,b) => a - b);
// console.log(sortAges);

//Reduce
// let ageSum = 0;
// for(let i = 0;i < ages.length;i++){
// 	ageSum += ages[i];
// }
// console.log(ageSum);

// const ageSum = ages.reduce(function(total,age){
//     return total + age;
// },0);
// console.log(ageSum);

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

//Get total years for all companies
// const totalYears = companies.reduce(function(total,company){
// 	return total + (company.end - company.start);
// },0);
// console.log(totalYears);

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears);

// Combine Methods 
const combined  = ages
.map(age => age * 2)
.filter(age => age >= 50)
.sort((a,b) => a - b)
.reduce((a,b) => a + b,0);
console.log(combined);