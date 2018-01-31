import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Directive, ElementRef, Inject, Injectable, Renderer2 } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class HtmlLangService {

  constructor(private translate: TranslateService){
    this.translate.onLangChange.asObservable()
      .pipe( map( (c: any) => c.lang.slice(0, 2)))
      .subscribe(
        (currentLang)=>
          document.getElementsByTagName('html').item(0).setAttribute('lang', currentLang)

      );

  }

}
