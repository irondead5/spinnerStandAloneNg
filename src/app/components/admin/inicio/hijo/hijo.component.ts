import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReqresService } from 'src/app/services/reqres.service';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  reqres = inject(ReqresService);

  ngOnInit(): void {
    
    this.reqres.getDelayedResponse()
      .subscribe();

  }

}
