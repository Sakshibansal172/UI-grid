import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultGraphComponent } from './fault-graph.component';

describe('FaultGraphComponent', () => {
  let component: FaultGraphComponent;
  let fixture: ComponentFixture<FaultGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaultGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
