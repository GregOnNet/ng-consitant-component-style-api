import { Component, computed, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';
import { tw } from './tw';

@Component({
  selector: 'app-label',
  standalone: true,
  host: {
    '[class]': 'hostClass()'
  },
  template: `<ng-content></ng-content>`
})
export class LabelComponent {
  #classDefaults = tw('p-2 text-red-500');

  class = input<string>('');

  protected hostClass = computed(() => {
    const classOverrides = this.class();

    return twMerge(this.#classDefaults, classOverrides);
  });
}
