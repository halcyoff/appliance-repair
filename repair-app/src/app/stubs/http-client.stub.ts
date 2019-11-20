import { Observable, of } from 'rxjs';

export class HttpClientStub {
    public get(): Observable<any> {
        return of({});
    }
}