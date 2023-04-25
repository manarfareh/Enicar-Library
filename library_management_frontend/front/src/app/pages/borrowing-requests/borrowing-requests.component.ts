import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BorrowingRequestService  } from './borrowing-requests.service';
import { BorrowingRequest } from './borrowingrequest';
declare var XDomainRequest: any;

const Email = {
 
  send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), 
    a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",
     t, function (e) { n(e) }) }) },
      ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e);
       a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), 
       a.onload = function () { var e = a.responseText; null != t && t(e) }, 
       a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e);
        t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, 
        createCORSRequest: function (e, n)
   { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } 
};
@Component({
  selector: 'app-borrowing-requests',
  templateUrl: './borrowing-requests.component.html',
  styleUrls: ['./borrowing-requests.component.scss']
})
export class BorrowingRequestsComponent implements OnInit {
  borrowingRequests: BorrowingRequest[];

  constructor(private borrowingRequestservice: BorrowingRequestService) { }

  ngOnInit(): void {
    this.getborrowingRequests();
    };
  
  private getborrowingRequests() {
    this.borrowingRequestservice.getBorrowingRequest().subscribe(
      (response: BorrowingRequest[]) => {
        this.borrowingRequests = response;
        console.log(this.borrowingRequests);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  loadRequests() {
    this.borrowingRequestservice.getBorrowingRequest().subscribe((borrowingRequests: BorrowingRequest[]) => {
      this.borrowingRequests = borrowingRequests;
    });
  }

onAccept(request: BorrowingRequest) {
      Email.send({
      Host : `smtp.elasticemail.com`,
      Username : `farehmanar89@gmail.com`,
      Password : `DB3D302A9208C2DE6A65B445C9FD4E4EE060F21B002316DA836F418AD88BE43CE3A935F7DE5667CCF7555D0663342D5E`,
      To : `farehmanar89@gmail.com`,
      From : `farehmanar89@gmail.com`,
      Subject : "Borrowing Request",
      Body : `
      <i>Your Borrowing Request is accepted.</i> `,
      UseDefaultCredentials: false,
  EnableSsl: true
      }).then( message => {alert(message); } );
      console.log(Email);
    request.book.isAvailable=0;
    this.borrowingRequestservice.acceptRequest(request)
      .subscribe(() => {
        console.log(`Request with ID ${request.id} accepted successfully.`);
        this.loadRequests();
      }, error => {
        console.error(`Error accepting book with ID ${request.id}: `, error);
      });
  }

  onRefuse(request: BorrowingRequest) {
    // TODO: Implement refuse action
  }
}