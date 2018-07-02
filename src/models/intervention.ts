import {Female} from './female';
import {Bull} from './bull';

export class Intervention {
  interventionDate: Date;
  interventionType: String;
  blzNumber: String;
  female: Female;
  bull: Bull;
  rang: number;
  straw: number;
  examinedFemaleNumber: number;
  fullFemaleNumber: number;
  emptyFemaleNumber: number;
  doubtFemaleNumber: number;
  fullMaleFemaleNumber: number;
  fullFemaleFemaleNumber: number;
  synchronizeFemaleNumber: number;
  principalProtocol: String;
  iaType: String;

}
