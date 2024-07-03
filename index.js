#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.white.bold("\t WELCOME TO JJK INSPIRED GAME \n"));
class player {
    name;
    energy = 100;
    constructor(name) {
        this.name = name;
    }
    energyDecrease() {
        let energy = this.energy - 25;
        this.energy = energy;
    }
    energyincrease() {
        this.energy = 100;
    }
}
class opponent {
    name;
    energy = 100;
    constructor(name) {
        this.name = name;
    }
    energyDecrease() {
        let energy = this.energy - 25;
        this.energy = energy;
    }
}
let Player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your name:",
    }
]);
let Opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select the Opponenet:",
        choices: [
            "Sukuna", "Mahito", "Jogo", "Hanami",
        ],
    }
]);
let P1 = new player(Player.name);
let O1 = new opponent(Opponent.select);
do {
    // OPPONENT SUKUNA:
    if (Opponent.select === 'Sukuna') {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.yellow("Use cursed technique:"),
                choices: [
                    "Straw doll manipulation",
                    "Cursed spirit manipulation",
                    "Ten shadows technique",
                    "Teleportation",
                ]
            }
        ]);
        if (ask.opt === "Straw doll manipulation") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.energyDecrease();
                console.log(`${P1.name}'s cursed energy is: ${P1.energy}`);
                console.log(`${O1.name}'s cursed energy is: ${O1.energy}`);
                if (P1.energy <= 0) {
                    console.log(chalk.red.bold("YOU'RE DEAD!!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.energyDecrease();
                console.log(`${P1.name}'s cursed energy is: ${P1.energy}`);
                console.log(`${O1.name}'s cursed energy is: ${O1.energy}`);
                if (O1.energy <= 0) {
                    console.log(chalk.red.bold("SUKUNA'S LOST!"));
                    process.exit();
                }
            }
        }
        ;
        if (ask.opt === "Cursed spirit manipulation") {
            P1.energyincrease();
            console.log(`Your cursed energy has increased: ${P1.energy}`);
        }
        ;
        if (ask.opt === "Ten shadows technique") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.energyDecrease();
                console.log(`${P1.name}'s cursed energy is ${P1.energy}`);
                console.log(`${O1.name}'s cursed energy is ${O1.energy}`);
            }
        }
        ;
        if (ask.opt === "Teleportation") {
            console.log(chalk.red("LMAO!! You teleported to Jujutsu high!"));
            process.exit();
        }
    }
    // OPPONENT MAHITO: 
    if (Opponent.select === 'Mahito') {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.yellow("Use cursed technique:"),
                choices: [
                    "Straw doll manipulation",
                    "Cursed spirit manipulation",
                    "Ten shadows technique",
                    "Teleportation",
                ]
            }
        ]);
        if (ask.opt === "Straw doll manipulation") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.energyDecrease();
                console.log(`${P1.name}'s cursed energy is: ${P1.energy}`);
                console.log(`${O1.name}'s cursed energy is: ${O1.energy}`);
                if (P1.energy <= 0) {
                    console.log(chalk.red.bold("YOU'RE DEAD!!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.energyDecrease();
                console.log(`${P1.name}'s cursed energy is: ${P1.energy}`);
                console.log(`${O1.name}'s cursed energy is: ${O1.energy}`);
                if (O1.energy <= 0) {
                    console.log(chalk.red.bold("MAHITO'S LOST!"));
                    process.exit();
                }
            }
        }
        ;
        if (ask.opt === "Cursed spirit manipulation") {
            P1.energyincrease();
            console.log(`Your cursed energy has increased: ${P1.energy}`);
        }
        ;
        if (ask.opt === "Ten shadows technique") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.energyDecrease();
                console.log(`${P1.name}'s cursed energy is: ${P1.energy}`);
                console.log(`${O1.name}'s cursed energy is: ${O1.energy}`);
            }
        }
        ;
        if (ask.opt === "Teleportation") {
            console.log(chalk.red("Lol, Did you get afraid of mahito?!"));
            process.exit();
        }
    }
    // OPPONENT JOGO:
    if (Opponent.select === 'Jogo') {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.yellow("Use cursed technique:"),
                choices: [
                    "Straw doll manipulation",
                    "Cursed spirit manipulation",
                    "Ten shadows technique",
                    "Teleportation",
                ]
            }
        ]);
        if (ask.opt === "Straw doll manipulation") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.energyDecrease();
                console.log(`${P1.name}'s cursed energy is: ${P1.energy}`);
                console.log(`${O1.name}'s cursed energy is: ${O1.energy}`);
                if (P1.energy <= 0) {
                    console.log(chalk.red.bold("YOU'RE DEAD!!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.energyDecrease();
                console.log(`${P1.name}'s cursed energy is: ${P1.energy}`);
                console.log(`${O1.name}'s cursed energy is: ${O1.energy}`);
                if (O1.energy <= 0) {
                    console.log(chalk.red.bold("JOGO'S LOST!"));
                    process.exit();
                }
            }
        }
        ;
        if (ask.opt === "Cursed spirit manipulation") {
            P1.energyincrease();
            console.log(`Your cursed energy has increased: ${P1.energy}`);
        }
        ;
        if (ask.opt === "Ten shadows technique") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.energyDecrease();
                console.log(`${P1.name}'s cursed energy is: ${P1.energy}`);
                console.log(`${O1.name}'s cursed energy is: ${O1.energy}`);
            }
        }
        ;
        if (ask.opt === "Teleportation") {
            console.log(chalk.red("Don't make me laugh, loser!!"));
            process.exit();
        }
    }
    // OPPONENT HANAMI:
    if (Opponent.select === 'Hanami') {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.yellow("Use cursed technique:"),
                choices: [
                    "Straw doll manipulation",
                    "Cursed spirit manipulation",
                    "Ten shadows technique",
                    "Teleportation",
                ]
            }
        ]);
        if (ask.opt === "Straw doll manipulation") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.energyDecrease();
                console.log(`${P1.name}'s cursed energy is ${P1.energy}`);
                console.log(`${O1.name}'s cursed energy is ${O1.energy}`);
                if (P1.energy <= 0) {
                    console.log(chalk.red.bold("YOU'RE DEAD!!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.energyDecrease();
                console.log(`${P1.name}'s cursed energy is ${P1.energy}`);
                console.log(`${O1.name}'s cursed energy is ${O1.energy}`);
                if (O1.energy <= 0) {
                    console.log(chalk.red.bold("HANAMI'S LOST!"));
                    process.exit();
                }
            }
        }
        ;
        if (ask.opt === "Cursed spirit manipulation") {
            P1.energyincrease();
            console.log(`Your cursed energy has increased: ${P1.energy}`);
        }
        ;
        if (ask.opt === "Ten shadows technique") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.energyDecrease();
                console.log(`${P1.name}'s cursed energy is ${P1.energy}`);
                console.log(`${O1.name}'s cursed energy is ${O1.energy}`);
            }
        }
        ;
        if (ask.opt === "Teleportation") {
            console.log(chalk.red("You need to explain it to GOJO SENSEI :)"));
            process.exit();
        }
    }
} while (true);
