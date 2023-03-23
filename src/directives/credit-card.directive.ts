export class CreditCardNumberDirective {
    static selector = "[credit-number]";
    constructor(public element: HTMLElement) {}
    formatCreditNumber(element: HTMLInputElement) {
      const value = element.value.replace(/[^\d]/g, "").substring(0, 16);
      const groups: string[] = [];
      for (let i = 0; i < value.length; i += 4) {
        groups.push(value.substring(i, i + 4));
      }
      element.value = groups.join(" ");
    }
    init() {
      this.element.style.borderColor = "Blue";
      this.element.addEventListener("input", (event) => {
        const element = event.target as HTMLInputElement;
        this.formatCreditNumber(element);
      });
    }
  }