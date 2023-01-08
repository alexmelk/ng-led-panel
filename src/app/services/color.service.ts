import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hexToRgb } from '../utils/hexToRgb';

@Injectable()
export class ColorService {
  constructor(private http: HttpClient) {}

  setColor(hexColor: string) {
    const color = hexToRgb(hexColor) || { r: 0, g: 0, b: 0 };
    const params: HttpParams = new HttpParams()
      .set('r', color.r.toString())
      .set('g', color.g.toString())
      .set('b', color.b.toString());
    this.http.post('api/color', null, { params: params }).subscribe();
  }
}
