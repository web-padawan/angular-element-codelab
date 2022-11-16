import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Result } from './result';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SliderComponent implements OnInit {
  sliderArray!: [{ img: string; alt: string; text: string }];

  transform: number;

  selectedIndex = 0;

  constructor(private data: DataService) {
    this.selectedIndex = 0;
    this.transform = 100;
  }

  ngOnInit() {
    this.data.getData().subscribe((result: Result) => {
      this.sliderArray = result.sliderArray;
    });
  }

  selected(x: number) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  keySelected(x: number) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  downSelected(i: number) {
    this.transform = 100 - i * 50;
    this.selectedIndex = this.selectedIndex + 1;
    if (this.selectedIndex > 4) {
      this.selectedIndex = 0;
    }
  }
}
