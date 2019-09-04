import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposerContenusComponent } from './proposer-contenus.component';

describe('ProposerContenusComponent', () => {
  let component: ProposerContenusComponent;
  let fixture: ComponentFixture<ProposerContenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposerContenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposerContenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
