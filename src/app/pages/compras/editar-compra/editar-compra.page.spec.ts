import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarCompraPage } from './editar-compra.page';

describe('EditarCompraPage', () => {
  let component: EditarCompraPage;
  let fixture: ComponentFixture<EditarCompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
