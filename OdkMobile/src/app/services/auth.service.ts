import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) { }
  login(postData: any): Observable<any> {
    return this.httpService.post('login', postData);
    }
    logout() {
      this.storageService.removeStorageItem(AuthConstants.AUTH).then(res => {
      this.router.navigate(['/login']);
      });
}

}
