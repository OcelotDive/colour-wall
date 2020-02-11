import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [InvestorService]
})
export class MainComponent implements OnInit {
  fullList: Object[];
  colourList: Object[][];
  displayList: Object[];
  searchText: string = "";
  notFullList: boolean = false;

  
  constructor(public investorService: InvestorService) {

   this.investorService.getMatchInfo().subscribe((data: any) => {
      this.fullList = data;
      this.colourList = this.selectionPages(data, 2000).reverse();
      this.displayList = this.colourList[this.colourList.length - 1];
    }); 
   
  }

  selectionPages(colourArray: Object[], amountPerSection: number): Object[][] {
    let pageArray = [], i, j;
    for (i = 0, j = -1; i < colourArray.length; i++) {
      if (i % amountPerSection === 0) {
        j++;
        pageArray[j] = [];
      }
      pageArray[j].push(colourArray[i]);
    }
    return pageArray;
  }

  handleTabClick(index: number) {
    this.displayList = this.colourList[index];
  }


  ngOnInit() {
   
  }

}
