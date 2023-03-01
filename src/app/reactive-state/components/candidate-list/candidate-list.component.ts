import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../../models/candidate.model';
import { CandidatesServices } from '../../services/candidates.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidateListComponent implements OnInit {
  loading$!: Observable<boolean>;
  candidates$!: Observable<Candidate[]>;
  constructor(private candidatesServices: CandidatesServices) {}

  ngOnInit(): void {
    this.initObservables();
    this.candidatesServices.getCandidatesFromServer();
  }

  initObservables() {
    this.candidates$ = this.candidatesServices.candidate$;
    this.loading$ = this.candidatesServices.loading$;
  }
}
