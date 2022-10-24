import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(player: Fighter, private enemies: SimpleFighter[]) {
    super(player);
  }

  public fight(): number {
    this.enemies.forEach((enemy) => {
      while (this.player.lifePoints !== -1 && enemy.lifePoints !== -1) {
        this.player.attack(enemy);
        enemy.attack(this.player);
      }
    });

    return super.fight();
  }
}

export default PVE;