import { timer, from, of, BehaviorSubject } from "rxjs";
import { fromFetch } from 'rxjs/fetch';

import { mergeMap, takeUntil, tap, switchMap, map } from "rxjs/operators";

export class ApiService {
    public API_KEY = '9de1aab5593fdc0061af9140d5e75eb8';
    public DEFAULT_CITY = 'London';
    public myResponse: Response;
//    public dataSubject:any;

    constructor(){
        // this.dataSubject = new BehaviorSubject(
        //     fromFetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.DEFAULT_CITY}&appid=${this.API_KEY}`)
        //     .pipe( map(response => response.json() ))
        //     .subscribe(
        //         res => {
        //             console.log("this is the data response ");
        //             console.log(res)
        //         },
        //             err =>{
        //             // Server is returning a status requiring the client to try something else.
        //             return of({ error: true, message: `Error ${err.status}` });
        //         }
        //     )

        // );
        const data = 
        fromFetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.DEFAULT_CITY}&appid=${this.API_KEY}`)
        .pipe( map(response => response.json() ))
        .subscribe(
            res => {
                console.log("this is the data response ");
                console.log(res)
            },
                err =>{
                // Server is returning a status requiring the client to try something else.
                return of({ error: true, message: `Error ${err.status}` });
            }
        );
    }
}