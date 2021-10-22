const faker = require('faker');
const chalk = require('chalk');

const randomName = faker.name.findName();
const randomColor = faker.commerce.color();

console.log(chalk.keyword(randomColor)(randomName));