import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';

@Component({
             selector: 'navbar',
             templateUrl: './navbar.component.html',
             styleUrls: ['./navbar.component.less']
           })
export class NavbarComponent implements OnInit {
  value = false;
  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
  }
    all(){
      this.value = false;
      this.dataService.changeMessage(this.value);
      this.router.navigate(['/todos']);
    }

    complete(){
      this.value = true;
      this.dataService.changeMessage(this.value);
      this.router.navigate(['/todos']);
    }
}
