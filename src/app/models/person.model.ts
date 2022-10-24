export class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class Voter extends Person {
    hasVoted: boolean = false;

    vote() {
        this.hasVoted = true;
    }
}

export class Candidate extends Person {
    votesNumber = 0;

    voteFor() {
        this.votesNumber++;
    }
}

export enum PersonEnum {
    voters,
    candidates
}
