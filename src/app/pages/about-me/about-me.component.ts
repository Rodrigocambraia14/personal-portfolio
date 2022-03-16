import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit{
  devText: boolean = true;
  personText: boolean = false;

  ngOnInit(): void {
    
  }

  changeTextView(type: string)
  {
    if (type == 'developer')
    {
      this.devText = true;
      this.personText = false;
    }
    else{
      this.personText = true;
      this.devText = false;
    }
  }
}
