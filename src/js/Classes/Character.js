export default class Character {
  constructor(name, type, health, level, attack, defence) {
    if (name >= 2 && name <= 10) {
      this.name = name;
    } else {
      throw new Error('Некорректное значение name - name не может быть меньше 2 или больше 10');
    }

    if (typeof type === 'string' && (type === 'Bowman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie')) {
      this.type = type;
    } else {
      throw new Error('Некорректно введено значение type');
    }

    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}
