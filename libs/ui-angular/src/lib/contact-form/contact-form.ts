import { Component, Injector, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'lib-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="2xl:max-w-[620px] relative w-full max-w-[560px] px-4 lg:px-0 flex justify-center items-center h-screen">
      <form
        [formGroup]="contactForm"
        (ngSubmit)="onSubmit()"
        class="contact-form w-full"
      >
        <h2 class="text-gray mb-4 text-center text-base font-medium sm:text-2xl">Contacto</h2>
        <h1 class="mb-8 text-center text-lg md:text-xl">Información</h1>
        <div class="text-content text-gray mb-4 flex flex-col gap-4 px-4 text-center text-[14px] font-normal lg:px-0">
          ¿Necesitas información adicional sobre algún producto o servicio? 

          Completa el formulario para poder brindarte el mejor acompañamiento.
        </div>
        <div class="form-group mb-6">
          <label for="name" class="text-title mb-2 block text-base font-semibold"
            >Nombre</label
          >
          <input
            id="name"
            type="text"
            formControlName="name"
            class="mt-1 block w-full rounded-md border p-4 shadow-sm focus:outline-none sm:text-sm border-red-500"
          />
          @if (
            contactForm.get('name')?.invalid && contactForm.get('name')?.touched
          ) {
            <span class="error text-required mt-2">
              {{
                contactForm.get('name')?.errors?.['required']
                  ? 'Solo letras y caracteres especiales permitidos.'
                  : 'Solo letras y caracteres especiales permitidos.'
              }}
            </span>
          }
        </div>
  
        <div class="form-group mb-6">
          <label for="email" class="text-title mb-2 block text-base font-semibold"
            >Correo electrónico</label
          >
          <input
            id="email"
            type="email"
            formControlName="email"
            class="mt-1 block w-full rounded-md border p-4 shadow-sm focus:outline-none sm:text-sm border-red-500"
          />
          @if (
            contactForm.get('email')?.invalid && contactForm.get('email')?.touched
          ) {
            <span class="error text-required mt-2">
              {{
                contactForm.get('email')?.errors?.['required']
                  ? 'Favor ingresa tu dirección de correo'
                  : 'Debes ingresar tu dirección de correo con el siguiente formato: nombre@mail.com'
              }}
            </span>
          }
        </div>
  
        <div class="form-group mb-6">
          <label for="phone" class="text-title mb-2 block text-base font-semibold"
            >Teléfono</label
          >
          <input
            id="phone"
            type="tel"
            formControlName="phone"
            class="mt-1 block w-full rounded-md border p-4 shadow-sm focus:outline-none sm:text-sm border-red-500"
          />
          @if (
            contactForm.get('phone')?.invalid && contactForm.get('phone')?.touched
          ) {
            <span class="error text-required mt-2">
              {{
                contactForm.get('phone')?.errors?.['required']
                  ? 'Favor ingresa tu número de teléfono'
                  : 'El telefono debe tener 10 digitos'
              }}
            </span>
          }
        </div>
  
        <div class="form-group mb-6">
          <label
            for="message"
            class="text-title mb-2 block text-base font-semibold"
            >Mensaje</label
          >
          <textarea
            id="message"
            rows="4"
            formControlName="message"
            class="mt-1 block w-full rounded-md border p-4 shadow-sm focus:outline-none sm:text-sm border-red-500"
          ></textarea>
          @if (
            contactForm.get('message')?.invalid &&
            contactForm.get('message')?.touched
          ) {
            <span class="error text-required mt-2">Favor ingresa tu mensaje</span>
          }
        </div>
  
        <div class="form-group mb-6">
          <label
            for="source"
            class="text-title mb-2 block text-base font-semibold"
            >¿Cómo te enteraste de nosotros?</label
          >
          <select
            id="source"
            formControlName="source"
            class="mt-1 flex w-full items-center justify-between rounded-md border p-4 shadow-sm focus:outline-none sm:text-sm border-required bg">
            <option value="" disabled selected class="text-gray300 text-base sm:text-sm">Elige una opción</option>
            <option value="buscador-web" class="text-gray300 text-base sm:text-sm">Buscador web</option>
            <option value="correo-bhd" class="text-gray300 text-base sm:text-sm">
              Correo electrónico de BHD Puesto de Bolsa
            </option>
            <option value="evento-feria" class="text-gray300 text-base sm:text-sm">Evento o feria</option>
            <option value="por-cuenta-propia" class="text-gray300 text-base sm:text-sm">Por cuenta propia</option>
            <option value="publicidad-internet" class="text-gray300 text-base sm:text-sm">Publicidad en internet</option>
          </select>
          @if (
            contactForm.get('source')?.invalid &&
            contactForm.get('source')?.touched
          ) {
            <span class="error text-required mt-2">Favor elige una opción</span>
          }
        </div>
        <div class="mx-auto my-6 w-full flex items-center justify-center gap-4">
          <button
            type="submit"
            [disabled]="contactForm.invalid"
            class="bg-primary font-NotoSans hover:bg-green100 w-full max-w-xs cursor-pointer rounded-lg border-none px-6 py-3 text-center text-base font-medium text-white transition-[background-color] duration-75 ease-linear md:w-[396px]"
          >
            Enviar correo
          </button>
        </div>
      </form>
    </div>
  `,
  styles: [
    `
      .error {
        display: block;
      }
    `,
  ],
})
export class ContactForm implements OnInit {
  contactForm!: FormGroup;
  private ingector = inject(Injector);
  private fb = inject(FormBuilder);

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\\s'.-]+$/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\\d{10}$/)]],
      message: ['', Validators.required],
      source: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario enviado', this.contactForm.value);
    }
  }
}

export function registerWebComponent(injector: Injector) {
  const el = createCustomElement(ContactForm, { injector });
  customElements.define('bhd-contact-form', el);
}
