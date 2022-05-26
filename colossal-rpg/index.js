let readline = require("readline-sync");

//player object letiables
let player = {
  name: (''),
  hp: 75,
  inventory: []
}

let enemy = {
  hp: 50
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//powers
function weapon() {
  let power = ["Farore's Wind", "Light Arrows", "Magic Spin Attack"];
  let randomPower = randomNum(0, 2);
  let newPower = power[randomPower];
  return newPower;
}

//Zelda enemies
function enemies() {
  let enemy = ["Gel", "Moblin", "Tektite", "Ghini"];
  let newEnemy = enemy
  let randomEnemy = randomNum(0, 3);
  let namedEnemy = enemy[randomEnemy];
  return namedEnemy;
}

//prizes
function prizes() {
  let prize = ["Gold coin", "Silver coin", "Bronze coin"];
  let randomPrize = randomNum(0, 2);
  let newPrize = prize[randomPrize];
  player.inventory.push(newPrize);
  return newPrize;
}

function attackPower(attackPow) {
  attackPow = randomNum(1, 50);
  return attackPow;
}

function playerHealth() {
  player.hp = player.hp - attackPower();
  return player.hp;
}

function enemyHealth() {
  enemy.hp = enemy.hp - attackPower();
  return enemy.hp;
}

function playerAttack() {
  while (player.hp > 0) {
    playerAttack();
  }
}

function enemyAttack() {
  while (enemy.hp > 0) {
    enemyAttack();
  }
}

let greeting = readline.keyIn("\nHello, are you ready to play! Press any key to begin. ");
// while (!name) {
  let name = readline.question("\nWhat is your name? ");
  player.name = name;
// }
console.log(`\nHello ${name}!`);

//inventory
function checkInventory() {
  console.log(`\n\n ${player}`);
}

function doesEnemyAppear() {
  let randomNumber = Math.floor((Math.random() * 3) + 1);
  if (randomNumber === 2) {
    return true;
  } else {
    return false;
  }
}

//run
function run() {
  runOrDie = Math.floor((Math.random() * 2) + 1)
  if (runOrDie === 1) {
    console.log("\nSorry, you died. Please try again ")
  } else {
    console.log("\nYour lucky...keep playing!")
  }
}

//attack
let charPower = Math.floor((Math.random() * 15) + 1)
let enemyPower = Math.floor((Math.random() * 10) + 1)

// fight
// function fight() {
//   enemyPower = Math.floor((Math.random() * 10) + 1)
//   charPower = Math.floor((Math.random() * 15) + 1)
//   if (charPower < enemyPower) {
//     console.log("\nYou have died! Play again?") //Press 'w' to try again"
//   } else {
//     console.log("\nYou choose to attack with " + weapon() + "\n\nthe enemy has " + enemyHealth() + " You have " + playerHealth() + " left and won a " + prizes() + "\n")
//     //player.inventory.push(prizes())
//   }
// }

function fight() { 
  // to make these change at every iteration, move this inside of the while loop
  // enemyPower = Math.floor((Math.random() * 10) + 1) // attack from enemy
  // charPower = Math.floor((Math.random() * 15) + 1) // attack from character
  while(player.hp > 0 && enemy.hp >0) { 
   

    // console.log the enemy is attacking you lose x points
    player.hp = player.hp - enemyPower
                      
    // console.log you are attacking the enemy and they lose x points 
    enemy.hp = enemy.hp - charPower

    if (enemy.hp <= 0) { 
      charPower = Math.floor((Math.random() * 15) + 1) // attack from character
      console.log("youve defeated the enemy")
    }
    if (player.hp <=0) { 
      enemyPower = Math.floor((Math.random() * 10) + 1) // attack from enemy
      console.log("youve been defeated by the enemy")
      
    }
    else {
      console.log("\nYou choose to attack with " + weapon() + "\n\nthe enemy has " + enemyHealth() + " You have " + playerHealth() + " left and won a " + prizes() + "\n")
      //player.inventory.push(prizes())
    }
 
    } 
   }

  //  reset enemy.hp to 100 so that the next enemy has an hp of 100
// }

while (player.hp > 0) {
  let action = readline.question("\nPress 'w' to walk or 'i' to check inventory").toLowerCase();
  if (action === 'i') {
    console.log(player)
  } else if (action === 'w' && doesEnemyAppear()) {
    let attack = readline.question("\nYou have encountered a " + enemies() + " Press 'a' to attack or 'r' to run.")
    if (attack === 'a') {
      fight()
    } else {
      run()
    } 
  }
}




