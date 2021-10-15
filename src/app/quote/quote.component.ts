import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,'Alphonce','We ourselves feel that what we are doing is just a drop in the ocean. But the ocean would be less because of that missing drop.','Mother Teresa',new Date(2021,8,8),0,0),
    new Quote(2,'Alphonce','We have the power to make a difference. But we need to VOTE.','Kylie Jenner',new Date(2021,9,4),0,0),
    new Quote(2,'Kipngeno','No human is limited.','Eliud Kipchoge',new Date(2021,9,10),0,0),
    new Quote(2,'Korir','We need to stop just pulling people out of the river. We need to go upstream and find out why they are falling in.','Desmond Tutu',new Date(2021,9,10),0,0),


  ];

  toggleDetails(index: number){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }

  deleteThisQuote(deleteQuote: any,index: number){
    if(deleteQuote){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].author}'s quote?`)
      if(toDelete){
      this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote:Quote){
    let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.creationDate = new Date(quote.creationDate)
  this.quotes.push(quote)

  }

  initialUpVotes!: number;
  currentUpVotes!: number;
  counter!: number;
  mostUpVotes(){
    this.initialUpVotes = 0
    this.currentUpVotes = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.currentUpVotes = this.quotes[this.counter].upvotes;
      if(this.currentUpVotes > this.initialUpVotes){this.initialUpVotes = this.currentUpVotes}
    }
    return  this.initialUpVotes
  }

  constructor() { }

  ngOnInit(): void {
  }

}
