// Importar Component desde el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Favorito} from '../models/favorito';
import { FavoritoService } from '../services/favorito.service';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'favorito-detail',
    templateUrl: 'app/views/favorito-detail.html',
    providers: [FavoritoService]
})
 
// Clase del componente donde irán los datos y funcionalidades
export class FavoritoDetailComponent implements OnInit { 
	public favorito: Favorito;
	public errorMessage;

	constructor(
			private _favoritoService: FavoritoService,
			private _route: ActivatedRoute,
			private _router: Router
		
		){}

	ngOnInit(){
		this.getFavorito();

	}

	getFavorito(){
		this._route.params.forEach((params: Params) => {
				let id = params['id'];

				this._favoritoService.getFavorito(id).subscribe(
							response => {
								this.favorito = response.favorito;

								if(!this.favorito){
									this._router.navigate(['/']);
								}
							},
							error => {
								this.errorMessage = <any>error;

								if(this.errorMessage != null){
									console.log(this.errorMessage);
									alert('Error en la peticion');
								}
							}

				);
			})

	}
}