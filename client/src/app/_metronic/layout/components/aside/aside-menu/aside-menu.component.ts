import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
})
export class AsideMenuComponent implements OnInit {
  appAngularVersion: string = environment.appVersion;
  appPreviewChangelogUrl: string = environment.appPreviewChangelogUrl;

  constructor(
    private auth: AuthService,
  ) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
    document.location.reload();
  }

}
