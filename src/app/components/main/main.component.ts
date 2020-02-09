import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [InvestorService]
})
export class MainComponent implements OnInit {
  colourList: Object[];
  partList: Object[];

  constructor(public investorService: InvestorService) {

   this.investorService.getMatchInfo().subscribe((data: any) => {
      this.colourList = data;
      this.partList = this.colourList.slice(0, 10);
    });
    
    
  }

  ngOnInit() {
    
  }

}
