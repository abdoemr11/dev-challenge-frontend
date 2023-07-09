const fs = require('fs');

function parseCityData(file) {
  const data = fs.readFileSync(file, 'utf8');
  const lines = data.split('\n');
  const cities = [];

  lines.forEach((line) => {
    const fields = line.split('\t');

    const city = {
      id: fields[0],
      name: fields[1],
      alternateNames: fields[2],
      country: fields[8],
      latitude: parseFloat(fields[4]),
      longitude: parseFloat(fields[5]),
    };

    cities.push(city);
  });

  return cities;
}

const cities = parseCityData('cities15000.txt');
const jsonData = JSON.stringify(cities, null, 2);

fs.writeFileSync('cities.json', jsonData);
console.log('Cities data saved to cities.json');
console.log(cities);
