import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'encryptor';
  botonVisible: boolean = false;
  txt: string = "";
  txt2: string = "";
  btncopiar: boolean = false;
  imgMu: boolean = true;
  txtEn: boolean = true;
  msjEn: boolean = false;
  txtEncriptado: string[] = [];
  txtDesencriptado: string = "";

  constructor(
    private toastr: ToastrService) {
  }

  checkTextArea() {
    this.txt2="";
    if (this.txt !== "") {
      this.btncopiar = true;
      this.imgMu = false;
      this.txtEn = false;
      this.msjEn = true;
      this.botonVisible = true;
    } else {
      this.btncopiar = false;
      this.imgMu = true;
      this.txtEn = true;
      this.msjEn = false;
      this.botonVisible = false;
    }
  }

  borrar() {
    this.txt = "";
    this.botonVisible = false;
  }

  mensaje() {
    this.toastr.success('Copiado', '', { timeOut: 1000 });
  }

  encriptar() {
    if (this.txt.valueOf() == "") {
      this.toastr.info('Escribe un mensaje', '', { timeOut: 1000 });
    } else {
      this.txtEncriptado = [];
      this.imgMu = false;
      this.txtEn = false;
      this.msjEn = true;
      this.btncopiar = true;
      for (let index = 0; index < this.txt.length; index++) {
        this.txtEncriptado[index] = this.txt[index];
        switch (this.txtEncriptado[index]) {
          case 'a':
            this.txtEncriptado[index] = this.txtEncriptado[index].replace('a', 'ai');
            break;
          case 'e':
            this.txtEncriptado[index] = this.txtEncriptado[index].replace('e', 'enter');
            break;
          case 'i':
            this.txtEncriptado[index] = this.txtEncriptado[index].replace('i', 'imes');
            break;
          case 'o':
            this.txtEncriptado[index] = this.txtEncriptado[index].replace('o', 'ober');
            break;
          case 'u':
            this.txtEncriptado[index] = this.txtEncriptado[index].replace('u', 'ufat');
            break;
          default:
            break;
        }
      }
      this.txt2 = this.txtEncriptado.join('');
    }
  }

  desencriptar() {
    if (this.txt.valueOf() == "") {
      this.toastr.info('Escribe un mensaje', '', { timeOut: 1000 });
    } else {
      this.txtDesencriptado = this.txt;
      this.imgMu = false;
      this.txtEn = false;
      this.msjEn = true;
      this.btncopiar = true;
      this.txtDesencriptado = this.txtDesencriptado.replace(/ai/g, "a");
      this.txtDesencriptado = this.txtDesencriptado.replace(/enter/g, "e");
      this.txtDesencriptado = this.txtDesencriptado.replace(/imes/g, "i");
      this.txtDesencriptado = this.txtDesencriptado.replace(/ober/g, "o");
      this.txtDesencriptado = this.txtDesencriptado.replace(/ufat/g, "u");
      this.txt2 = this.txtDesencriptado;

    }

  }

  ngOnInit(): void {

  }
}

