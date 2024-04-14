import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	apiUrl = environment.apiUrl;

	constructor(protected router: Router, protected auth: AuthService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler) {
	    if (!req.url.includes("i18n") && !req.url.startsWith(this.apiUrl)) {
	        // Do not use API url for translations.
	        req = req.clone({
	            url: this.apiUrl + req.url
	        });
	    }

	    // Check first if the token exists. If not leave the request as it is
	    const authReq = !this.auth.getToken() ? req : req.clone({
	        headers: req.headers.set("Authorization", `${this.auth.getToken()}`)
	    });

	    return next.handle(authReq).pipe(tap(() => { }, (error) => {

	        if ((error instanceof HttpErrorResponse) && (error.status === 401 || error.status === 403)) {

	            /** Disconnect with the Auth service */
	            this.auth.disconnect();

	        }
	    }));
	}

}
