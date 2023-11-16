import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SpinnerService } from '../shared/spinner/spinner.service';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  private http = inject(HttpClient);
  private spinner = inject(SpinnerService);


  getDelayedResponse () {
    
    const url = `https://reqres.in/api/users?delay=3`;

    // 3 sec delay from response
    // 3 sec delay from pipe
    const response$ = this.http.get( url )
      .pipe( 
        delay(3000)
      );

    return this.spinner.showLoaderUntilCompleted(response$);

  }
  
}
