import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-portfolio';
  downloaded: boolean = false;

  ngOnInit(): void {
    
  }

  checkAge() {
    var year = new Date().getFullYear();

    var age = year - 1999;

    if (new Date().getMonth() > 9)
      return age;
    else
      return age - 1;
  }

  downloadPdf(url: any)
  {
    if (this.downloaded)
    {
      this.downloaded = false;
      return;
    }
    
      const a = document.createElement('a')
      a.href = url
      a.download = url.split('/').pop()
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      this.downloaded = true;
  }
}
