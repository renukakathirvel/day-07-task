var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);

//question1 : Get all the countries from Asia continent /region using Filter method
var details_asia = res.filter((ele)=>ele.region == "Asia");
console.log(details_asia);

var details_data = details_asia.map((ele)=>ele.name.common);
console.log(details_data);
 

//question2: Get all the countries with a population of less than 2 lakhs using Filter method

var data_population = res.filter((ele)=>ele.population>200000);
console.log(data_population);

for(var i = 0;i<data_population.length;i++){
    console.log(`Country name:${data_population[i].name.common} Capital: ${data_population[i].capital}`);
}

//question3: Print the following details name, capital, flag, using forEach method

res.forEach((country) => {
  console.log("Name:", country.name.common);
  console.log("Capital:", country.capital[0]);
  console.log("Flag:", country.flags.png);
});

//question4: Print the total population of countries using reduce method

var countryData = JSON.parse(this.response);

const totalpopulation = countryData.reduce((accumulator,country)=>accumulator+country.population,0);
console.log("Total population of countries:", totalpopulation);

//question5 : Print the country that uses US dollars as currency.

var currency = res.filter((ele)=>ele.currencies == "USD");
  console.log(currency);
}


