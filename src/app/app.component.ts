import { Component } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Making A New Property currentPage Which Will Be Set To 0 When User First Visit To Us
  currentPage = 0;

  // Making An Array Of Objects Of Images In Which I Will Put All Images I Want To Show In My Application
  images = [

    //Adding The 1st Image In The Image Object
    {
      title : 'New York',
      url : "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },

    //Adding The 2nd Image In The Image Object
    {
      title : 'India',
      url : "https://images.unsplash.com/photo-1532664189809-02133fee698d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
    },

    //Adding The 3rd Image In The Image Object
    {
      title : 'Maldives',
      url : "https://plus.unsplash.com/premium_photo-1671148841786-e4bceb1ab54c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },

    //Adding The 4th Image In The Image Object
    {
      title : "Thailand",
      url : "https://images.unsplash.com/photo-1494949360228-4e9bde560065?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    },

    // Adding The 5th Image In The Image Object
    {
      title : "Japan",
      url : "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },

    // Adding The 6th Image In The Image Object
    {
      title : "Sri-Lanka",
      url : "https://images.unsplash.com/photo-1574611122955-5baa61496637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    },

    // Adding The 7th Image In The Image Object
    {
      title : "Egypt",
      url : "https://plus.unsplash.com/premium_photo-1675711751410-4f980017b3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },

    // Adding The 8th Image In The Image Object
    {
      title : "United Kingdom",
      url : "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdGVkJTIwa2luZ2RvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    }
  ];

  //Defining Check Window Index Function Here
  checkWindowIndex(i : number)
  {
    return (this.currentPage - i) < 5;
  }

}
