const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageCalculatorDragon = (obj) => {
  let damage = Math.floor(Math.random() * dragon.strength + 1);
  if (damage < 15) {
    return (damage = 15);
  }
  return damage;
  0;
};

console.log(damageCalculatorDragon(dragon));

const damageCalculatorWarrior = (obj) => {
  let damage = Math.floor(Math.random() * (obj.strength * obj.weaponDmg));
  if (damage < obj.strength) {
    damage = obj.strength;
  }
  return damage;
};

console.log(damageCalculatorWarrior(warrior));

const damageCalculatorMage = (obj) => {
  if (obj.mana < 15) {
    return `Mana insuficiente!`;
  }
  let damage = Math.floor(Math.random() * (obj.intelligence * 2));
  if (damage < obj.intelligence) {
    damage = obj.intelligence;
  }
  obj.mana -= 15;
  return damage;
};
const gameActions = {
  warriorTurn: (damage, receiver) => {
    const damageDone = damage(warrior);
    receiver.healthPoints -= damageDone;
    warrior.damage = damageDone;
  },
  mageTurn: (damage, receiver) => {
    const damageDone = damage(mage);
    receiver.healthPoints -= damageDone;
    mage.damage = damageDone;
  },
  dragonTurn: (damage) => {
    const damageDone = damage(mage);
    warrior.healthPoints -= damageDone;
    mage.healthPoints -= damageDone;
    dragon.damage = damageDone;
  },
  result: battleMembers,
};

gameActions.warriorTurn(damageCalculatorWarrior, dragon);
gameActions.mageTurn(damageCalculatorMage, dragon);
gameActions.dragonTurn(damageCalculatorDragon);

console.log(gameActions.result);
