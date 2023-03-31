import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let jwtToken = req.clone({
        setHeaders:{
          Authorization: 'bearer '+localStorage.getItem('token')

        }
      })

      return next.handle(jwtToken);
  }

  constructor() { }
}
