import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class InvestorService {
    mainUrl: string;
    constructor(private http: HttpClient) {
        this.mainUrl = 'https://api.footystats.org/test-call?key=b47270ab8009bd937876aae9a7446af563e1c5498e3310d2f1035f1d1ce38d24';
        

    }

    getMatchInfo() {
        return this.http.get("../assets/colors.json");
            
}

}
    
