import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleLikeComponent } from './article-like.component';

describe('ArticleLikeComponent', () => {
  let component: ArticleLikeComponent;
  let fixture: ComponentFixture<ArticleLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
