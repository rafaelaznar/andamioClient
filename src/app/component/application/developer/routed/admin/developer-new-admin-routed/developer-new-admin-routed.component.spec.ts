import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperNewAdminRoutedComponent } from './developer-new-admin-routed.component';

describe('DeveloperNewAdminRoutedComponent', () => {
  let component: DeveloperNewAdminRoutedComponent;
  let fixture: ComponentFixture<DeveloperNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
