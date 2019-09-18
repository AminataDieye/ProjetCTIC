import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleEditionComponent } from './nouvelle-edition.component';

describe('NouvelleEditionComponent', () => {
  let component: NouvelleEditionComponent;
  let fixture: ComponentFixture<NouvelleEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelleEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
