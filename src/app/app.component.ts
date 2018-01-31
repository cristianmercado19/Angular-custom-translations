import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { HtmlLangService } from "./html-lang.service";

@Component({
  selector: 'esw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  availableLanguages= [ 'en', 'pt'];

  get currentLang(){
    return this.translate.currentLang;
  }

  get currentLangTranslated(){
    return this.translate.instant(this.currentLang);
  }

  constructor(private translate: TranslateService, private htmlLangService: HtmlLangService) {
    translate.addLangs(this.availableLanguages);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|pt/) ? browserLang : 'en');
  }

  changeLang(languageIsoCode: string){
    this.translate.use(languageIsoCode);
  }
}
