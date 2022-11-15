// Importaciones.
import { Component, OnInit } from '@angular/core';

// Decorador.
@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})

// Clase.
export class GruposComponent {

  // Variables.
  clasificadosA: string[] = [];
  clasificadosB: string[] = [];
  clasificadosC: string[] = [];
  clasificadosD: string[] = [];
  clasificadosE: string[] = [];
  clasificadosF: string[] = [];
  clasificadosG: string[] = [];
  clasificadosH: string[] = [];

  // Selecciones.
  selecciones = [
    {
      nombre: 'Qatar', 
      img: 'https://http2.mlstatic.com/D_NQ_NP_758508-MLA41881275468_052020-O.jpg'
    },
    {
      nombre: 'Ecuador', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg'
    },
    {
      nombre: 'Senegal', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg'
    },
    {
      nombre: 'Holanda', 
      img: 'https://www.paisesbajosytu.nl/binaries/medium/content/gallery/netherlandsandyou/content-afbeeldingen/algemeen/vlag-nederland.png'
    },
    {
      nombre: 'Inglaterra',
      img: 'https://s1.significados.com/foto/bandera-de-inglaterra_sm.jpg'
    },
    {
      nombre: 'Iran',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/630px-Flag_of_Iran.svg.png'
    },
    {
      nombre: 'EEUU',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png'
    },
    {
      nombre: 'Gales',
      img: 'https://assets.epuzzle.info/puzzle/071/814/original.jpg'
    },
    {
      nombre: 'Argentina',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png'
    },
    {
      nombre: 'Arabia Saudita',
      img: 'https://img.freepik.com/vector-premium/bandera-arabia-saudita-bandera-verde-saudita-texto-blanco-arabe-sable-ilustracion-vectorial_297535-3417.jpg'
    },
    {
      nombre: 'Mexico',
      img: 'https://static3.depositphotos.com/1001718/137/v/600/depositphotos_1377390-stock-illustration-mexican-flag.jpg'
    },
    {
      nombre: 'Polonia',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/200px-Flag_of_Poland.svg.png'
    },
    {
      nombre: 'Francia',
      img: 'https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295__480.png'
    },
    {
      nombre: 'Australia',
      img: 'https://trancarolaporelmundo.files.wordpress.com/2011/03/bandera-australia.jpg?w=480'
    },
    {
      nombre: 'Dinamarca',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/199px-Flag_of_Denmark.svg.png'
    },
    {
      nombre: 'Tunez',
      img: 'https://thumbs.dreamstime.com/b/ilustraci%C3%B3n-de-la-bandera-t%C3%BAnez-pa%C3%ADses-%C3%A1frica-perfecto-para-el-uso-fondo-y-textura-154952001.jpg'
    },
    {
      nombre: 'España',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png'
    },
    {
      nombre: 'Costa Rica',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/2560px-Flag_of_Costa_Rica.svg.png'
    },
    {
      nombre: 'Alemania',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/640px-Flag_of_Germany.svg.png'
    },
    {
      nombre: 'Japon',
      img: 'https://sorteomundial.ole.com.ar/images/JAP.svg'
    },
    {
      nombre: 'Belgica',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/1200px-Flag_of_Belgium_%28civil%29.svg.png'
    },
    {
      nombre: 'Canada',
      img: 'https://static.vecteezy.com/system/resources/previews/001/218/820/non_2x/illustration-of-canada-flag-vector.jpg'
    },
    {
      nombre: 'Marruecos',
      img: 'https://thumbs.dreamstime.com/b/bandera-del-papel-de-marruecos-fondo-patri%C3%B3tico-nacional-138242274.jpg'
    },
    {
      nombre: 'Croacia',
      img: 'https://sorteomundial.ole.com.ar/images/CRO.svg'
    },
    {
      nombre: 'Brasil',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/300px-Flag_of_Brazil.svg.png'
    },
    {
      nombre: 'Serbia',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/200px-Flag_of_Serbia.svg.png'
    },
    {
      nombre: 'Suiza',
      img: 'https://sorteomundial.ole.com.ar/images/SUI.svg'
    },
    {
      nombre: 'Camerún',
      img: 'https://sorteomundial.ole.com.ar/images/CAM.svg'
    },
    {
      nombre: 'Portugal',
      img: 'https://proyectoviajero.com/wp-content/uploads/2022/02/bandera-de-Portugal-L.webp'
    },
    {
      nombre: 'Ghana',
      img: 'https://sorteomundial.ole.com.ar/images/GHA.svg'
    },
    {
      nombre: 'Uruguay',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/270px-Flag_of_Uruguay.svg.png'
    },
    {
      nombre: 'Corea del Sur',
      img: 'https://sorteomundial.ole.com.ar/images/CSR.svg'
    },
  ]
  

  // Asignar el lugar en la fase de grupos.
  asignarLugar( nombre: string, img: string, i: number ) {
    
    if ( i === 0 ) {
      if ( this.clasificadosA.length >= 2 ) return;
      this.clasificadosA.push( nombre );
    }

    if ( i === 1 ) {
      if ( this.clasificadosB.length >= 2 ) return;
      this.clasificadosB.push( nombre );
    }

    if ( i === 2 ) {
      if ( this.clasificadosC.length >= 2 ) return;
      this.clasificadosC.push( nombre );
    }

    if ( i === 3 ) {
      if ( this.clasificadosD.length >= 2 ) return;
      this.clasificadosD.push( nombre );
    }

    if ( i === 4 ) {
      if ( this.clasificadosE.length >= 2 ) return;
      this.clasificadosE.push( nombre );
    }

    if ( i === 5 ) {
      if ( this.clasificadosF.length >= 2 ) return;
      this.clasificadosF.push( nombre );
    }

    if ( i === 6 ) {
      if ( this.clasificadosG.length >= 2 ) return;
      this.clasificadosG.push( nombre );
    }

    if ( i === 7 ) {
      if ( this.clasificadosH.length >= 2 ) return;
      this.clasificadosH.push( nombre );
    }

  }

  devolverEquipos( index: number) {
    return this.selecciones.slice( index * 4, index * 4 + 4 );
  }

  limpiar() {
  }

}
