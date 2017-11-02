import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class AssistenteSocial {

    private url = 'http://mobile-aceite.tcu.gov.br/mapa-da-saude/rest/assistenciasocial/cras?municipio=';


    constructor(private http: Http) { }


    buscarSines(municipio: string): Observable<string[]> {
        return this.http.get(this.url + municipio)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }
    
    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}




