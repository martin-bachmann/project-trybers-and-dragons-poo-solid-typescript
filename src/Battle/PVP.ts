import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(player: Fighter, private playerTwo: Fighter) {
    super(player);
  }

  public fight(): number {
    while (this.player.lifePoints !== -1 && this.playerTwo.lifePoints !== -1) {
      this.player.attack(this.playerTwo);
      this.playerTwo.attack(this.player);
    }

    return super.fight();
  }
}

export default PVP;