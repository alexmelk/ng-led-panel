import { Component, OnInit } from '@angular/core';
import { ColorService } from './services/color.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [ColorService],
})
export class AppComponent implements OnInit {
  title = 'ng-led-panel';
  selectedColor = '#e66465';
  constructor(private colorService: ColorService) {}
  ngOnInit(): void {}

  onColorChange(event: string) {
    this.colorService.setColor(this.selectedColor);
  }
}
