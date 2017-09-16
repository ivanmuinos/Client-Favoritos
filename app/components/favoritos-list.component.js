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
var core_1 = require("@angular/core");
var favorito_service_1 = require("../services/favorito.service");
var FavoritosListComponent = (function () {
    function FavoritosListComponent(_favoritoService) {
        this._favoritoService = _favoritoService;
        this.title = 'Listado de marcadores:';
        this.loading = true;
    }
    FavoritosListComponent.prototype.ngOnInit = function () {
        console.log('Favoritos list component cargado!');
        this.getFavoritos();
    };
    FavoritosListComponent.prototype.getFavoritos = function () {
        var _this = this;
        this._favoritoService.getFavoritos().subscribe(function (result) {
            console.log(result);
            _this.favoritos = result.favoritos;
            if (!_this.favoritos) {
                alert('No hay objetos cargados');
            }
            else {
                _this.loading = false;
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert('Error en la peticion');
            }
        });
    };
    FavoritosListComponent.prototype.onBorrarConfirm = function (id) {
        this.confirmado = id;
    };
    FavoritosListComponent.prototype.onCancelarConfirm = function (id) {
        this.confirmado = null;
    };
    FavoritosListComponent.prototype.onBorrarFavorito = function (id) {
        var _this = this;
        this._favoritoService.deleteFavorito(id).subscribe(function (result) {
            if (!result.message) {
                alert('Error en la peticion');
            }
            _this.getFavoritos();
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert('Error en la peticion');
            }
        });
    };
    FavoritosListComponent = __decorate([
        core_1.Component({
            selector: 'favoritos-list',
            templateUrl: 'app/views/favoritos-list.html',
            providers: [favorito_service_1.FavoritoService]
        }),
        __metadata("design:paramtypes", [favorito_service_1.FavoritoService])
    ], FavoritosListComponent);
    return FavoritosListComponent;
}());
exports.FavoritosListComponent = FavoritosListComponent;
//# sourceMappingURL=favoritos-list.component.js.map