import { fromFetch } from 'rxjs/fetch';

export class ApiService {
    public API_KEY = '9de1aab5593fdc0061af9140d5e75eb8';
    public DEFAULT_CITY = 'London';

    constructor(){

        const data = 
        fromFetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.DEFAULT_CITY}&appid=${this.API_KEY}`).subscribe(
            res => {
                console.log("this is the response ",res); 
            }
        );

    }



}