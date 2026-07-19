import { Injector } from '@angular/core';
import { registerWebComponent } from './lib/contact-form/contact-form';

export const initAngularElements = (injector: Injector) => {
  registerWebComponent(injector);
};

export * from './lib/contact-form/contact-form';
