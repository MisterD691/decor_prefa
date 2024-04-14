import { AuthService } from './auth/auth.service';
import { ViewChild, Injectable, Directive } from '@angular/core';

@Directive()
@Injectable({
  providedIn: 'root',
})
export class Constante {
  @ViewChild('fileImportInput')
  protected fileImportInput: any;

  public LABEL_NAME = 'APP.LABEL-NAME';
  public GOOD_JOB = 'LAYOUT.LABEL-GOOD_JOB';
  public LABEL_USERNAME = 'LAYOUT.LABEL-USERNAME';
  public LABEL_EDITED_AT = 'LAYOUT.LABEL-EDITED_AT';
  public LABEL_CREATED_AT = 'LAYOUT.LABEL-CREATED_AT';
  public CHANGE_PWD = 'LAYOUT.TITLE-CHANGE_PWD';
  public RATE = 656;
  public iconEye = 'fa-eye-slash';
  public anAnimate = 'an-animate';
  public animation = '400ms ease-in-out';
  public menuMainItem = 'menu-main-item';
  public mainNavbar = '#mainNavbar';

  public data: any;
  public edit = 'icofont-edit';
  public uiEdit = 'icofont-ui-edit';
  public close = 'icofont-ui-close';
  public isConnected$ = this.auth.isConnected;

  protected csvRecords = [];

  constructor(protected auth: AuthService) {}

  public update(result: any, oCity: any, rows: any[]) {
    if (result.code === 207) {
      let key = 0;
      rows.forEach((element) => {
        if (rows.hasOwnProperty(element) && rows[element]._id === oCity._id) {
          rows.splice(Number(element), 1);
          rows = [...rows];
        }
        key++;
      });
    }
  }
}
