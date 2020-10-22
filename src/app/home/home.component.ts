import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../servicios/noticias.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listaNoticias = []

  constructor(private servicioNoticias: NoticiasService) { }

  ngOnInit(): void {
    this.verNoticias()
  }

  verNoticias() {

    this.servicioNoticias.getNoticias().subscribe((res: any) => {
      
      if (res != null) {
        this.listaNoticias = res
        console.log(res)
      } else {
        alert("No hay noticias!!")
      }



    })


  }



}
