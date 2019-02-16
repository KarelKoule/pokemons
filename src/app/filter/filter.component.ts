import { Component, OnInit, Output } from '@angular/core';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  template: `
    <input type="text" placeholder="Filter..." #filter (input)="emit(filter.value)" /> 
  `,
  styles: []
})
export class FilterComponent {
  private textChanged = new Subject<string>()

  @Output()
  public readonly filterText = this.textChanged.pipe(debounceTime(200))


  emit = (val: string) => {
    console.log(val);

    this.textChanged.next(val)
  }
}
