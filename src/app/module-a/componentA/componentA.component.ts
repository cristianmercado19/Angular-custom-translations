import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'esw-componentA',
  templateUrl: './componentA.component.html',
  styleUrls: ['./componentA.component.scss']
})
export class ComponentAComponent  {

  translatedsample: string = null;

  constructor(private translate: TranslateService) { }

  getTranslatedCode(){
    this.translate.stream('code-sample').subscribe(
      (result) => {
        this.translatedsample = result;
      },
      error => {},
      () => { console.log('completed');}
    );

  }

}
