import { Component } from '@angular/core';
import { MainAnimation } from '../main-animation/main-animation';
import { BtnPrimary } from '../btn-primary/btn-primary';

@Component({
  selector: 'main-section',
  imports: [MainAnimation, BtnPrimary],
  templateUrl: './main-section.html',
  styleUrl: './main-section.scss',
})
export class MainSection {}
