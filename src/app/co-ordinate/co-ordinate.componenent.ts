import {Component, OnChanges, OnInit, Input} from '@angular/core';
import {Http} from '@angular/http';
import {AppService} from "../appService";
import {error} from "selenium-webdriver";

@Component({
  selector:'co-ordinate',
  templateUrl:'./co-ordinate.html',
  styleUrls:['./co-ordinate.less']
})

export class Coordinate implements OnInit, OnChanges{
  dataArray:any[];
  newDataArray:any[]=[];
  @Input() x1:any=0;
  @Input() y1:any=0;
  constructor(private appService:AppService){}

  ngOnInit(){
    this.appService.getdata()
      .subscribe(
        (data:any)=>{
          this.dataArray=data;
          console.log(data);
          this.getMyData();
        },
        (error:any)=>{
          console.log(error);
        }
      )
  }

  ngOnChanges(changes:any){
    this.getMyData();
  }

  getMyData(){
    this.newDataArray=[];

    for(var i=0;i<this.dataArray.length;i++){
      var x2,y2;
      var temp=[];
      x2=this.dataArray[i].value.split(",").map(Number)[0];
      y2=this.dataArray[i].value.split(",").map(Number)[1];
      var x = (y2-this.y1)*(y2-this.y1);
      var y = (x2-this.x1)*(x2-this.x1);

      var dist = Math.sqrt(x+y);
      temp.push(this.dataArray[i].id,this.dataArray[i].value,dist);
      this.newDataArray.push(temp);
    }
    console.log(this.newDataArray);

    function compare(a:any,b:any) {
      let distA=a[2];
      let distB=b[2];
      var comp=0;
      if(distA>distB){
        comp=1;
      } else if(distA<distB){
        comp= -1;
      }
      return comp;
    }

    this.newDataArray.sort(compare);

    console.log(this.newDataArray);
  }
}
