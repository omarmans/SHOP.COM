import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component, input } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
export interface data {
  name: string;
  rate: number;
  price: number;
  img: string;
  discount?: number;
  mainPrice?: number;
  discountPricePrecntge?: number;
}
@Component({
  selector: 'app-dynamic-proudcts',
  imports: [NgFor, CommonModule],
  templateUrl: './dynamic-proudcts.component.html',
  styleUrl: './dynamic-proudcts.component.scss',
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({ height: '0px', overflow: 'hidden', opacity: 0 })
      ),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('collapsed <=> expanded', [animate('500ms ease')]),
    ]),
  ],
})
export class DynamicProudctsComponent {
  header = input.required<string>();
  products = input.required<data[]>();
  showAll = false;
  getStars(rate: number): ('full' | 'half' | 'empty')[] {
    const full = Math.floor(rate);
    const half = rate % 1 >= 0.25 && rate % 1 < 0.75;
    const empty = 5 - full - (half ? 1 : 0);

    return [
      ...Array(full).fill('full'),
      ...(half ? ['half'] : []),
      ...Array(empty).fill('empty'),
    ];
  }

  toggleView() {
    this.showAll = !this.showAll;
  }

  get visibleProducts() {
    return this.products().slice(0, 4);
  }

  get extraProducts() {
    return this.products().slice(3);
  }
}
