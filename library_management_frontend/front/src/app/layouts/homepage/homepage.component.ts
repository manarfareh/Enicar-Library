import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css',
              './lib/owlcarousel/assets/owl.carousel.min.css',
              './css/bootstrap.min.css',
              './css/style.css',
              './lib/animate/animate.min.css',
              './lib/owlcarousel/assets/owl.carousel.css',
               './lib/owlcarousel/assets/owl.theme.default.css',
               './lib/owlcarousel/assets/owl.theme.default.min.css',
               './lib/owlcarousel/assets/owl.theme.green.css',
               './lib/owlcarousel/assets/owl.theme.green.min.css' ]
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
