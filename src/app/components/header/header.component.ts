import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDefaults } from 'src/app/models/defaults';
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() navTitle : string="";
  @Input() navIcon: string;

  constructor(private router:Router, private location:Location) {
    this.navIcon = MovieDefaults.NAV_ICON_DEFAULT;
  }

  ngOnInit(): void {
   
  }

  navIconClicked(){
    if(this.navIcon==="arrow-left"){
      this.location.back();
    }else{
      this.router.navigate(["/"])
    }
  }

}
