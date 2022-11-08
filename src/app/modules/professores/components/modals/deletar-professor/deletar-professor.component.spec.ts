import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarProfessorComponent } from './deletar-professor.component';

describe('DeletarProfessorComponent', () => {
  let component: DeletarProfessorComponent;
  let fixture: ComponentFixture<DeletarProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarProfessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
