import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarSalaComponent } from './deletar-sala.component';

describe('DeletarSalaComponent', () => {
  let component: DeletarSalaComponent;
  let fixture: ComponentFixture<DeletarSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarSalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
