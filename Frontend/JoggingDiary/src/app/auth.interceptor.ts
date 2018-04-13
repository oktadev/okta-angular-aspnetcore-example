import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  

  constructor(private oktaAuth: OktaAuthService) {
  }

  private isAuthenticated() : Observable<boolean> {
    return Observable.fromPromise(this.oktaAuth.isAuthenticated());
  }

  private getAccessToken() : Observable<string> {
    return Observable.fromPromise(this.oktaAuth.getAccessToken());
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.isAuthenticated().mergeMap((isAuthenticated) => {
      if (!isAuthenticated) {
        return next.handle(request);
      }

      return this.getAccessToken().mergeMap((accessToken) => {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${accessToken}`
            }
          });
          return next.handle(request);
        })
    });
  }

  

}
