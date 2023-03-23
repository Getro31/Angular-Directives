export class phoneNumberDirective {
    static selector = "[phone-number]";
    willHaveSpace = true;
    borderColor = "red";
    constructor(public element: HTMLElement) {}
    formatPhoneNumber(element: HTMLInputElement) {
      const value = element.value.replace(/[^\d]/g, "").substring(0, 10);
      const groups: string[] = [];
      for (let i = 0; i < value.length; i += 2) {
        groups.push(value.substring(i, i + 2));
      }
      element.value = groups.join(this.willHaveSpace? " " : "");
    }
    init() {
      if(this.element.hasAttribute('width-space')){
        this.willHaveSpace = this.element.getAttribute('width-space') === 'true';
      }
      if(this.element.hasAttribute('borderColor')){
        this.borderColor = this.element.getAttribute('borderColor')!;
      }
      this.element.style.borderColor = this.borderColor;
      this.element.addEventListener("input", (event) => {
        const element = event.target as HTMLInputElement;
        this.formatPhoneNumber(element);
      });
    }
  }