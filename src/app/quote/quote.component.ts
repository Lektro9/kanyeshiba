import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { from, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor(private http: HttpClient) { }

  quote: any;

  ngOnInit(): void {
  }
  
  getKanyeQuote() {
    this.quote = this.http.get("http://localhost:8000/kanyeshibaquote")
  }
}
