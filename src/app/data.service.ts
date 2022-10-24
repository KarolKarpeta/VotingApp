import { Injectable } from "@angular/core";
import { Candidate, PersonEnum, Voter } from "./models/person.model";
import { TableModel } from "./models/table.model";

@Injectable({providedIn:'root'})
export class DataService {
    newPersonName: string | null;
    voters: TableModel = {
        title: "Voters",
        rightHeader: "Has voted",
        votersList: [new Voter("Jan"), new Voter("Andrzej"), new Voter("Anna")],
        type: PersonEnum.voters
    };
    candidates: TableModel = {
        title: "Candidates",
        rightHeader: "Votes",
        candidatesList: [new Candidate("Mickey Mouse"), new Candidate("Donald Duck")],
        type: PersonEnum.candidates
    };

    addNewPerson(personType: PersonEnum) {
        let newPersonName = prompt(`Please enter new ${PersonEnum[personType].slice(0,-1)}'s name`, "");
        
        if (!newPersonName) 
          return;

          if (personType == PersonEnum.voters) {
            this.voters.votersList?.push(new Voter(newPersonName));
          } else {
            this.candidates.candidatesList?.push(new Candidate(newPersonName));
          }
      }

      vote(votingVoter: string, votedCandidate: string) {
        this.voters.votersList?.forEach((voter: Voter) => {
            if (voter.name === votingVoter) {
                voter.vote();
            }
        })

        this.candidates.candidatesList?.forEach((candidate: Candidate) => {
            if (candidate.name === votedCandidate) {
                candidate.voteFor();
            }
        })
      }

}