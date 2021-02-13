import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContentData } from './banner/banner';


@Injectable({
  providedIn: 'root'
})
export class BannerService {
  getbanner:string="https://fast-lowlands-95849.herokuapp.com/api/common/getBanner";

  constructor(private http:HttpClient) { }

  getbannerlist():Observable<ContentData>
  {
    return this.http.get<ContentData>(this.getbanner)
  }
  
}
