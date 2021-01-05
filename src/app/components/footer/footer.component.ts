import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  iconUrl = "../../../assets/img/git2.png";
  constructor() { }


  ngOnInit(): void {

  }

}
