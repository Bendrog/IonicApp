import {Bull} from './bull';
import {Dose} from './dose';
import {Race} from './race';

export class Female {
  id: string ;
  type: string ;
  workingNumber: string ;
  sigNumber: string ;
  name: string ;
  age: number ;
  race = new Race()  ;
  herdId: string;
  reproductionStatus: string ;
  qualifiedForAi: boolean ;
  lastCalvingRank: number ;
  lastCalvingDate: string ;
  lastCalvingAge: number ;
  lastAiDate: string ;
  lastAiAge: number ;
  lastAiRank: number ;
  lastAiBull: Bull ;
  lastAiDose: Dose ;
  lastPregnancyAssertDate: string ;
  lastPregnancyAssertAge: number ;
  lastPregnancyAssertRank: number ;
  lastPregnancyAssertDate2: string ;
  lastPregnancyAssertAge2: number ;
  lastPregnancyAssertRank2: number ;
  lastEchoResult: string ;
  AiPaGap: number ;
  expectedCalvingDate: string ;
  index: boolean ;
  matingPlan: Array<Dose> ;
  mother : Female ;
  father : Bull ;
  grandfather : Bull ;
  scheduledForCulling: boolean ;
  alerts: Array<any>;
  checked: boolean;
  base64Image: string;

  constructor () {

    this.father = new Bull();
    this.grandfather = new Bull();
  }
}
