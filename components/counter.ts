import { Component, input, signal } from '@angular/core';

// A small Angular component. Slides can use it as <starter-counter [start]="10" />.
// Every exported component with a selector in components/ is found automatically.
@Component({
  selector: 'starter-counter',
  templateUrl: './counter.html',
})
export class StarterCounter {
  start = input(0);
  n = signal(0);

  ngOnInit() {
    this.n.set(this.start());
  }
}
