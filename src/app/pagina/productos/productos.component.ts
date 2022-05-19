import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public title:string='Productos'
  
  public alumnos: string[]=['Sergio',
  'Mariana','Luan','Guille','Marcos',
  'Franco','Alvaro','Beatriz','Carlos Saul','Elon','Lady Gaga']

  public nameRamdom = Math.floor(Math.random() * this.alumnos.length)

  public deleteName(){
    this.alumnos.pop();
  }

  public newName(){
   let nombres =  Math.floor(Math.random() * this.alumnos.length)
   console.log(this.alumnos[nombres]);
   this.alumnos.push(this.alumnos[nombres].toUpperCase())
  
  } 
     

  constructor() { }

  ngOnInit(): void {
  }

}
