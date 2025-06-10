import { Component, signal } from '@angular/core';
import {
  DynamicProudctsComponent,
  data,
} from '../../../shared/dynamic-proudcts/dynamic-proudcts.component';

@Component({
  selector: 'app-top-selling',
  imports: [DynamicProudctsComponent],
  templateUrl: './top-selling.component.html',
  styleUrl: './top-selling.component.scss',
})
export class TopSellingComponent {
  header = signal('Top SELLING');
  topSelling = signal<data[]>([
    {
      name: 'VERTICAL STRIPED SHIRT',
      rate: 5.0,
      price: 212,
      img: 'imgs/top-selling/Frame1.svg',
      // discount: 0
      mainPrice: 232,
      discountPricePrecntge: -20,
    },
    {
      name: 'COURAGE GRAPHIC T-SHIRT',
      rate: 4,
      price: 240,

      img: 'imgs/top-selling/Frame2.svg',
    },
    {
      name: 'LOOSE FIT BERMUDA SHORTS',
      rate: 3,
      price: 80,
      img: 'imgs/top-selling/Frame3.svg',
    },
    {
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 210,

      img: 'imgs/top-selling/Frame4.svg',
    },
    {
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 210,

      img: 'imgs/top-selling/Frame4.svg',
    },
    {
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 210,

      img: 'imgs/top-selling/Frame4.svg',
    },
    {
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 210,

      img: 'imgs/top-selling/Frame4.svg',
    },
    {
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 210,

      img: 'imgs/top-selling/Frame4.svg',
    },
    {
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 210,

      img: 'imgs/top-selling/Frame4.svg',
    },
    {
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 210,

      img: 'imgs/top-selling/Frame4.svg',
    },
    {
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 210,

      img: 'imgs/top-selling/Frame4.svg',
    },
    {
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 210,

      img: 'imgs/top-selling/Frame4.svg',
    },
  ]);
}
