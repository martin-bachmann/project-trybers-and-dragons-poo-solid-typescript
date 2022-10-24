import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static mageInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.mageInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.mageInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;
