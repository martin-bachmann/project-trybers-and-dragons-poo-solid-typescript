import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static necromancerInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.necromancerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.necromancerInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;
