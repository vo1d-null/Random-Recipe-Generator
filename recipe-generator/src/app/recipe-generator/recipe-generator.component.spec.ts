import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeGeneratorComponent } from './recipe-generator.component';

describe('RecipeGeneratorComponent', () => {
  let component: RecipeGeneratorComponent;
  let fixture: ComponentFixture<RecipeGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeGeneratorComponent]
    });
    fixture = TestBed.createComponent(RecipeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
