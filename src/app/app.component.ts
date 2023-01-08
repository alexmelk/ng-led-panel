import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'ng-led-panel';
  selectedColor = '#e66465';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  onColorChange(event: string) {
    const color = this.hexToRgb(this.selectedColor) || { r: 0, g: 0, b: 0 };
    const params: HttpParams = new HttpParams()
      .set('r', color.r.toString())
      .set('g', color.g.toString())
      .set('b', color.b.toString());
    this.http.get('change-color', { params: params }).subscribe();
  }
}
