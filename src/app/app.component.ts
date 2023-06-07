import { Component, OnInit } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
[x: string]: any;  

  miInstancia: User = new User;

  constructor() {}
  
  userArray: User[]=[
      {id:1, name:"crhistian", lastname:"celeita" },
      {id:2, name:"felipe", lastname:"gonzalez" },
      {id:3, name:"samuel", lastname:"arciniega" }
  ];
   
  selectedUsuario: User = new User();

  openForEdit(User: User){
    this.selectedUsuario = User;
  }

  addOrEdit(){
    if(confirm ('want to update?') ,this.selectedUsuario.id === 0){
      this.selectedUsuario.id = this.userArray.length + 1;
      this.userArray.push(this.selectedUsuario);
    }  
      this.selectedUsuario = new User();      
  }

  delete(){
    if(confirm('Are you sure want to delete it?')){
      this.userArray = this.userArray.filter(x => x != this.selectedUsuario);
      this.selectedUsuario = new User();
    }
    
  }
  
  ngOnInit() {
    this.miInstancia = new User(); // Crear una instancia de MiClase y, como resultado, inicializar su variable
    console.log(this.miInstancia.id); 
    
  }


 

}
