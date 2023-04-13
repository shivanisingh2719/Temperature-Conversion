import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {
  public celciusValue: any = null;
  public fahrenheitValue: any = null;

  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  public ChangeValueToFahernheit(){
    if(this.celciusValue){
      this.fahrenheitValue = (this.celciusValue *9/5 + 32).toFixed(1);
    }else{
      this.fahrenheitValue = null;
    }
     

  }

  public ChangeValueToCelcius(){
    if(this.fahrenheitValue){
      this.celciusValue =((this.fahrenheitValue - 32) * 5/9).toFixed(1);
    }
    else{
      this.celciusValue = null;
    }
  
  }

}