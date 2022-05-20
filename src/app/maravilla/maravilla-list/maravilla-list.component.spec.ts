/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaravillaListComponent } from './maravilla-list.component';

describe('MaravillaListComponent', () => {
  let component: MaravillaListComponent;
  let fixture: ComponentFixture<MaravillaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaravillaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaravillaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
