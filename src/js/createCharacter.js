import Bowman from './Classes/Bowman';
import Swordsman from './Classes/Swordsman';
import Magician from './Classes/Magician';
import Undead from './Classes/Undead';
import Zombie from './Classes/Zombie';
import Daemon from './Classes/Daemon';

export default function createCharacter(name, type) {
  switch (type) {
    case 'Bowman':
      return new Bowman(name, type, 100, 1, 25, 25);
    case 'Swordsman':
      return new Swordsman(name, type, 100, 1, 40, 10);
    case 'Magician':
      return new Magician(name, type, 100, 1, 10, 40);
    case 'Undead':
      return new Undead(name, type, 100, 1, 25, 25);
    case 'Zombie':
      return new Zombie(name, type, 100, 1, 40, 10);
    case 'Daemon':
      return new Daemon(name, type, 100, 1, 10, 40);
    default:
      break;
  }
  return null;
}
