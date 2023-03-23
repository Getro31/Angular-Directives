//Importation definition
import { CreditCardNumberDirective } from "./directives/credit-card.directive";
import { PhoneNumberDirective } from "./directives/phone-number.directive";


// Liaison de nos directives au DOM element
const directives = [PhoneNumberDirective, CreditCardNumberDirective];
directives.forEach((directive) => {
  const Elements = document.querySelectorAll<HTMLElement>(directive.selector);
  Elements.forEach((element) => {
    const directiveInstance = new directive(element);
    directiveInstance.init();
  });
});
