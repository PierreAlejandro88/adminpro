import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }
  //@Input("valor") progress: number = 50; puedes renombrarlo como lo quieras
  @Input('value') progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output('value') changeValue: EventEmitter<number> = new EventEmitter();

  setProgress(change: number): void {
    this.progress += change;
    this.progress = Math.max(0, Math.min(100, this.progress));
    this.changeValue.emit(this.progress);
  }

  onChange(newValue: number): void {
    if (newValue >= 0 && newValue <= 100) {
      this.progress = newValue;
    }else if(newValue >= 100){
      this.progress = 100;
    }else if(newValue <= 0){
     this.progress = 0;
    }
    this.changeValue.emit(this.progress);
  }
}
