import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static halflingInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.halflingInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.halflingInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
