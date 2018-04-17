import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateJoggingComponent } from './add-or-update-jogging.component';

describe('AddOrUpdateJoggingComponent', () => {
  let component: AddOrUpdateJoggingComponent;
  let fixture: ComponentFixture<AddOrUpdateJoggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateJoggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateJoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
