import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarAlunoComponent } from './deletar-aluno.component';

describe('DeletarAlunoComponent', () => {
  let component: DeletarAlunoComponent;
  let fixture: ComponentFixture<DeletarAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
