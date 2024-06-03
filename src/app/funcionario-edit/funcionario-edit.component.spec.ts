import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioEditComponent } from './funcionario-edit.component';

describe('FuncionarioEditComponent', () => {
  let component: FuncionarioEditComponent;
  let fixture: ComponentFixture<FuncionarioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionarioEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuncionarioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
