import type { Modules } from '../network';
import type { Stats, Bonuses } from './item';

export interface EquipmentData {
    type: Modules.Equipment;
    key: string;
    name?: string;
    count: number;
    ability: number;
    abilityLevel: number;
    ranged?: boolean; // Specifically for weapon type.
    poisonous?: boolean;
    attackStats?: Stats;
    defenseStats?: Stats;
    bonuses?: Bonuses;
}

export interface SerializedEquipment {
    equipments: EquipmentData[];
}

export type EquipmentType = 'weapon' | 'armour' | 'pendant' | 'ring' | 'boots';
