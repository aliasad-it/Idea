import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionAreaComponent } from './function-area.component';

describe('FunctionAreaComponent', () => {
  let component: FunctionAreaComponent;
  let fixture: ComponentFixture<FunctionAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
