import { Component } from '@angular/core';
import { delay } from 'rxjs/operators';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'root-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'root-app';
  showSpinner: boolean = false;
  
  constructor(public spinnerService: SpinnerService) {
  }

  ngAfterContentInit() {
    this.spinnerService.show
      .pipe(delay(0)).subscribe(x => {
      this.showSpinner = x;
    })
  }

  ngOnDestroy() {
    this.spinnerService.show.unsubscribe()
  }
}
