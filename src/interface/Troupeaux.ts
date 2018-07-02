
   export interface Cow {
        id: string;
        age: string;
        name: string;
        code_race: number;
        date_de_terme: string;
        sexee_femelle: boolean;
        croisement: boolean;
        reforme: boolean;
    }

    export interface Troupeau {
        id: string;
        EDE: number;
        etab: string;
        city: string;
        cows: Cow[];
    }
