import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    const routeid=this.route.snapshot.paramMap.get('id');
    console.log(routeid);
  }

}
