import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() titulo: string = 'Alerta';
  @Input() isopen: string = 'false';
  @Output('submit') mensaje = new EventEmitter<boolean>();

  onClick() {
    this.mensaje.emit(false);
  }

  isOpenModal() {
    return this.isopen === 'true';
  }
}
