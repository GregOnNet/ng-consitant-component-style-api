import { Component, computed, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'app-label',
  standalone: true,
  host: { '[class]': 'hostClass()' },
  template: `<ng-content></ng-content>`
})
export class LabelComponent {
  #classDefaults = 'p-2 text-slate-600';

  class = input<string>('');

  protected hostClass = computed(() => {
    const classOverrides = this.class();

    return twMerge(this.#classDefaults, classOverrides);
  });
}
