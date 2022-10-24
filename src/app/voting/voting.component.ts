import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  voteForm = new FormGroup({
    voter: new FormControl(null, Validators.required),
    candidate: new FormControl(null, Validators.required),
  })
  initialFormValues: FormData;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.initialFormValues = this.voteForm.value;
  }

  vote() {
    if (this.voteForm.invalid) {
      alert('Select voter and candidate to vote!');
      return;
    }

    this.dataService.vote(this.voteForm.value.voter, this.voteForm.value.candidate);
    this.voteForm.reset(this.initialFormValues);
  }

}
