import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers, RequestMethod, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/throw';
import "rxjs/add/observable/forkJoin";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SessionService {

	constructor(private http: Http) {
	}

	/* For API Requests. Use ApiUrl */
	public get(url): Observable<any> {
		let options = { method: RequestMethod.Get };
		return this.httpReq(url,options);
	}
	public delete(url): Observable<any> {
		let options = { method: RequestMethod.Delete };
		return this.httpReq(url,options);
	}
	public post(url, body: Object): Observable<any> {
		let options = {
				method: RequestMethod.Post,
				body: JSON.stringify(body)
		};
		return this.httpReq(url, options);
	}
	public put(url, body: Object): Observable<any> {
		let options = {
				method: RequestMethod.Put,
				body: JSON.stringify(body)
		};
		return this.httpReq(url, options);
	}
	public patch(url, body: Object): Observable<any> {
		let options = {
				method: RequestMethod.Patch,
				body: JSON.stringify(body)
		};
		return this.httpReq(url, options);
	}

	private httpReq(url,options){
		options.url = url;
		// options.headers = this.headers;
		let req_options = new RequestOptions(options);
		return this.http.request(new Request(req_options))
										.map(this.extractData)
										.catch(this.handleError.bind(this));
	}
	private extractData(res: Response) {
			return res.json() || {};
	}
	private handleError (error: Response | any) {
			return Observable.throw(error);
	}

}
