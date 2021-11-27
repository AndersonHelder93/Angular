import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-enviar',
  templateUrl: './enviar.component.html',
  styleUrls: ['./enviar.component.css']
})
export class EnviarComponent implements OnInit {

  @Input()
  envio: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
