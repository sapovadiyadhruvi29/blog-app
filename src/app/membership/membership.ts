import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-membership',
  standalone:true,
  imports: [Navbar],
  templateUrl: './membership.html',
  styleUrl: './membership.css',
})
export class Membership {}
