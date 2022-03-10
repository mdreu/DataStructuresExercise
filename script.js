const jedi = [];

jedi[0] = "Luke";
console.log(jedi);

jedi.push("Obi-wan Kenobi");
console.log(jedi);

jedi.unshift('Yoda');
console.log(jedi);

console.log(jedi[1]);

jedi.pop();
console.log(jedi);

jedi.shift();
console.log(jedi);

const sithlords = [
    'Darth Vader',
    'Darth Sidious',
    'Darth Maul'

];

const imperialOfficers = [
    'Grand Moff Tarkin',
    'Orson Krennic'
];

const starWarsVillains = sithlords.concat(imperialOfficers);
console.log(starwarsVillains.slice(0,2));

const droids = {
    astromech: 'R2-D2',
    protocol: 'C-3P0',
    assassin: 'IG-88'
};
console.log(droids);

console.log(droids['astromech']);

console.log(droids.protocol);

droids['assassin'] = 'IG-11';
console.log(droids);