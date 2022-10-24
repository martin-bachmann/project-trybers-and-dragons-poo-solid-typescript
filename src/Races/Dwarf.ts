import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static dwarfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.dwarfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.dwarfInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;
