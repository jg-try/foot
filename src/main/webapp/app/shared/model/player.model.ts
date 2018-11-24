export interface IPlayer {
    id?: number;
    name?: string;
    score?: number;
}

export class Player implements IPlayer {
    constructor(public id?: number, public name?: string, public score?: number) {}
}
