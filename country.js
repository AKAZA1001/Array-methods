
fetch("https://restcountries.com/v3.1/all")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {

    const countriesInAsia = data.filter(country => country.region === 'Asia');

    
    const countriesWithLessThan2Lakhs = data.filter(country => country.population < 200000);

   
    data.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`);
    });

    
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log(`Total population of countries: ${totalPopulation}`);

    const countryWithUSD = data.find(country => country.currencies && country.currencies.USD);
    console.log(`Country using US Dollars as currency: ${countryWithUSD.name.common}`);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
