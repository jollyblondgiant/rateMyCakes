import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotCakeComponent } from './spot-cake.component';

describe('SpotCakeComponent', () => {
  let component: SpotCakeComponent;
  let fixture: ComponentFixture<SpotCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
