//Importation definition
import { creditCardNumberDirective } from "./directives/credit-card.directive";
import { phoneNumberDirective } from "./directives/phone-number.directive";


// Liaison de nos directives au DOM element
const directives = [phoneNumberDirective, creditCardNumberDirective];
directives.forEach((directive) => {
  const Elements = document.querySelectorAll<HTMLElement>(directive.selector);
  Elements.forEach((element) => {
    const directiveInstance = new directive(element);
    directiveInstance.init();
  });
});
