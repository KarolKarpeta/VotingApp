import { Candidate, PersonEnum, Voter } from "./person.model";

export class TableModel {
    title: string;
    rightHeader: string;
    votersList?: Voter[];
    candidatesList?: Candidate[];
    type: PersonEnum;
}