import { NgFor, NgIf } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { CarouselModule, CarouselComponent } from "ngx-owl-carousel-o";

@Component({
  selector: "app-customers",
  imports: [CarouselModule, NgFor, NgIf],
  templateUrl: "./customers.component.html",
  styleUrl: "./customers.component.scss",
})
export class CustomersComponent {
  @ViewChild("owlCar", { static: false }) owlCar!: CarouselComponent;
  CUSTOMERS = [
    {
      rate: 5,
      name: "Sarah M.",
      comment:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      rate: 5,
      name: "James L.",
      comment:
        "Shop.co never disappoints! Their delivery is always on time and the clothes fit perfectly. Highly recommend!",
    },
    {
      rate: 4,
      name: "Emily R.",
      comment:
        "Great quality and affordable prices. The customer service was really helpful with my order.",
    },
    {
      rate: 5,
      name: "Ahmed H.",
      comment:
        "I was skeptical at first, but Shop.co exceeded my expectations. Stylish, comfortable, and delivered fast.",
    },
    {
      rate: 5,
      name: "Jessica K.",
      comment:
        "Absolutely love the variety they offer. I can always find something that suits my mood and style.",
    },
    {
      rate: 4,
      name: "Omar F.",
      comment:
        "Very happy with my purchase! The quality is excellent and the packaging was neat and professional.",
    },
    {
      rate: 5,
      name: "Maya S.",
      comment:
        "Shop.co makes online shopping so much easier. The items look exactly like the pictures. No surprises!",
    },
    {
      rate: 5,
      name: "Daniel W.",
      comment:
        "This is my go-to store now. Trendy styles and they always have great discounts too!",
    },
    {
      rate: 4,
      name: "Lina T.",
      comment:
        "Loved the fabric and the colors. Everything I ordered fits perfectly and looks amazing.",
    },
    {
      rate: 5,
      name: "Tommy G.",
      comment:
        "Fast shipping, great prices, and high-quality clothes. What more can I ask for?",
    },
    {
      rate: 5,
      name: "Nour A.",
      comment:
        "Amazing experience! I bought a gift for my sister and she absolutely loved it.",
    },
    {
      rate: 5,
      name: "Kevin B.",
      comment:
        "Shop.co has really raised the bar for online shopping. Love their attention to detail.",
    },
    {
      rate: 4,
      name: "Isabella N.",
      comment:
        "Really impressed with the latest collection. The site is easy to navigate and the checkout process is smooth.",
    },
    {
      rate: 5,
      name: "Ali R.",
      comment:
        "I've recommended Shop.co to all my friends. Their fashion game is strong!",
    },
    {
      rate: 4,
      name: "Sophia L.",
      comment:
        "The clothes are so comfy and stylish. I just wish they had more color options.",
    },
    {
      rate: 5,
      name: "David J.",
      comment:
        "Excellent value for money. The material feels luxurious and the sizing is just right.",
    },
    {
      rate: 5,
      name: "Hana E.",
      comment:
        "One of the best online shopping experiences I’ve ever had. Will definitely shop here again!",
    },
    {
      rate: 4,
      name: "Mohamed K.",
      comment:
        "Clothes came on time and looked great. Only issue was one size that ran slightly small.",
    },
    {
      rate: 5,
      name: "Rachel D.",
      comment:
        "If you're looking for style and comfort, Shop.co is the place. Love my new outfits!",
    },
    {
      rate: 5,
      name: "George P.",
      comment:
        "Top-notch service and beautiful designs. I’ll definitely be a repeat customer.",
    },
  ];
  forWard() {
    this.owlCar.next(); // يتقدم شريحة للأمام
  }

  backWard() {
    this.owlCar.prev(); // يتراجع شريحة للخلف
  }
  getStars(rate: number): number[] {
    return Array(5)
      .fill(0)
      .map((_, i) => (i < rate ? 1 : 0));
  }
  carouselOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    // autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
}
