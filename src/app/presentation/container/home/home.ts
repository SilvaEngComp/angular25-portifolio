import { Component } from '@angular/core';
import { BtnPrimary } from "../../component/btn-primary/btn-primary";
import { Header } from "../../component/header/header";
import { MainSection } from "../../component/main-section/main-section";

@Component({
  selector: 'app-home',
  imports: [BtnPrimary, Header, MainSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
