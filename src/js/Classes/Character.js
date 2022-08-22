export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Некорректное значение name - name не может быть меньше 2 или больше 10');
    }

    if (typeof type === 'string' && types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Некорректно введено значение type');
    }

    this.health = 100;
    this.level = 1;
  }
}
