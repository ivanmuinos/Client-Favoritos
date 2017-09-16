"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importar Component desde el núcleo de Angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var favorito_service_1 = require("../services/favorito.service");
var favorito_1 = require("../models/favorito");
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var FavoritoAddComponent = (function () {
    function FavoritoAddComponent(_favoritoService, _route, _router) {
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        this.titleSection = "Crear Favorito";
    }
    FavoritoAddComponent.prototype.ngOnInit = function () {
        this.favorito = new favorito_1.Favorito("", "", "", "");
        console.log(this.favorito);
    };
    FavoritoAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._favoritoService.addFavorito(this.favorito).subscribe(function (response) {
            //favorito va a tener lo que nos llegue de la API, osea response.favorito.
            if (!response.favorito) {
                alert('Error en el servidor');
            }
            else {
                _this.favorito = response.favorito;
                _this._router.navigate(['/marcador', _this.favorito._id]);
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert('Error en la peticion');
            }
        });
    };
    FavoritoAddComponent = __decorate([
        core_1.Component({
            selector: 'favorito-add',
            templateUrl: 'app/views/favorito-add.html',
            providers: [favorito_service_1.FavoritoService]
        })
        // Clase del componente donde irán los datos y funcionalidades
        ,
        __metadata("design:paramtypes", [favorito_service_1.FavoritoService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], FavoritoAddComponent);
    return FavoritoAddComponent;
}());
exports.FavoritoAddComponent = FavoritoAddComponent;
//# sourceMappingURL=favorito-add.component.js.map