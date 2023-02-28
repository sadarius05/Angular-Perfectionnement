import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidatesServices } from '../../services/candidates.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidateListComponent implements OnInit {
  loading$!: Observable<boolean>;
  constructor(private candidatesServices: CandidatesServices) {}

  ngOnInit(): void {
    this.loading$ = this.candidatesServices.loading$;
  }
}
