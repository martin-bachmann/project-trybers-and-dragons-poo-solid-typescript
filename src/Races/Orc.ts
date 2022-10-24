import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static orcInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.orcInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.orcInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
