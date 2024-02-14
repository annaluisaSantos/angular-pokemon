import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SecureconnectionInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    const secureReq = request.clone(
      { url: request.url.replace('http://', 'https://') }
    );
    return next.handle(secureReq);
  }
}
