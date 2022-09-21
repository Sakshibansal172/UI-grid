import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamolyGraphComponent } from './anamoly-graph.component';

describe('AnamolyGraphComponent', () => {
  let component: AnamolyGraphComponent;
  let fixture: ComponentFixture<AnamolyGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnamolyGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnamolyGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
