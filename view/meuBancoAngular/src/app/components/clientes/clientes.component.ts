import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  @Input()
  pessoas: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
