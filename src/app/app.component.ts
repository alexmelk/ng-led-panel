import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, Subscription } from 'rxjs';
import { ColorService } from './services/color.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [ColorService],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ng-led-panel';
  defaultColor = '#e66465';
  selectedColor$ = new BehaviorSubject(this.defaultColor);
  selectedColorSubs$!: Subscription;

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.selectedColorSubs$ = this.selectedColor$
      .pipe(debounceTime(500))
      .subscribe((color) => {
        this.colorService.setColor(color);
      });
  }

  ngOnDestroy(): void {
    this.selectedColorSubs$.unsubscribe();
  }

  onColorChange(color: string) {
    this.selectedColor$.next(color);
  }
}
