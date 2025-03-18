import { HighlightDirective } from './highlight.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Renderer2, ElementRef } from '@angular/core';

@Component({
  template: `<div appHighlight></div>`  // The directive is applied here
})
class TestComponent { }

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);
    element = fixture.nativeElement.querySelector('div');
    fixture.detectChanges();  // Detects changes to apply the directive
  });

  describe('boundary', () => {
    it('should create the TestComponent and apply the directive', () => {
      expect(fixture.componentInstance).toBeTruthy(); // Checks if TestComponent is created
      expect(element).toBeTruthy(); // Ensures the div element is rendered and has the directive applied
    });

    it('should apply background color on mouse enter (mouseenter event listener)', () => {
      // Simulate mouse enter using 'mouseenter' event on the element
      const mouseEnterEvent = new MouseEvent('mouseenter');
      element.dispatchEvent(mouseEnterEvent);  // Dispatch the mouseenter event
      fixture.detectChanges();  // Trigger change detection

      // Check if the background color was set to yellow by looking for the change
      expect(element.style.backgroundColor).toBe('yellow');
    });

    it('should remove background color on mouse leave (mouseleave event listener)', () => {
      // Simulate mouse leave using 'mouseleave' event on the element
      const mouseLeaveEvent = new MouseEvent('mouseleave');
      element.dispatchEvent(mouseLeaveEvent);  // Dispatch the mouseleave event
      fixture.detectChanges();  // Trigger change detection

      // Check if the background color was reset to transparent
      expect(element.style.backgroundColor).toBe('transparent');
    });
  });
});
