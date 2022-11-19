import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-admopciones',
  templateUrl: './admopciones.component.html',
  styleUrls: ['./admopciones.component.scss']
})
export class AdmopcionesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  usuarios(): void{

  }

  roles(): void{
    
  }

  permisos(): void{
    
  }

}
