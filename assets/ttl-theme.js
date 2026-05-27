document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

class LoungeHeader extends HTMLElement {
  connectedCallback() {
    this.toggle = this.querySelector('[data-menu-toggle]');
    this.nav = this.querySelector('[data-mobile-nav]');
    if (!this.toggle || !this.nav) return;

    this.toggle.addEventListener('click', () => {
      const expanded = this.toggle.getAttribute('aria-expanded') === 'true';
      this.toggle.setAttribute('aria-expanded', String(!expanded));
      this.nav.hidden = expanded;
      document.body.classList.toggle('menu-open', !expanded);
    });
  }
}

customElements.define('lounge-header', LoungeHeader);

class VariantPicker extends HTMLElement {
  connectedCallback() {
    this.form = this.closest('form');
    this.variantInput = this.form?.querySelector('[name="id"]');
    this.variants = JSON.parse(this.querySelector('[type="application/json"]')?.textContent || '[]');
    this.addEventListener('change', () => this.onChange());
  }

  onChange() {
    const selectedOptions = Array.from(this.querySelectorAll('select')).map((select) => select.value);
    const variant = this.variants.find((item) => {
      return item.options.every((option, index) => option === selectedOptions[index]);
    });
    if (!variant || !this.variantInput) return;

    this.variantInput.value = variant.id;
    const submit = this.form.querySelector('[type="submit"]');
    if (submit) {
      submit.disabled = !variant.available;
      submit.querySelector('[data-submit-text]').textContent = variant.available ? window.themeStrings.addToCart : window.themeStrings.soldOut;
    }
  }
}

customElements.define('variant-picker', VariantPicker);

class ProductRecommendations extends HTMLElement {
  connectedCallback() {
    const url = this.dataset.url;
    if (!url) return;

    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        const html = document.createElement('div');
        html.innerHTML = text;
        const recommendations = html.querySelector('product-recommendations');
        if (recommendations?.innerHTML.trim().length) {
          this.innerHTML = recommendations.innerHTML;
        }
      })
      .catch(() => {});
  }
}

customElements.define('product-recommendations', ProductRecommendations);

document.addEventListener('click', (event) => {
  const summary = event.target.closest('summary');
  if (!summary) return;
  const details = summary.parentElement;
  if (!details?.matches('[data-accordion]')) return;

  document.querySelectorAll('[data-accordion][open]').forEach((item) => {
    if (item !== details) item.removeAttribute('open');
  });
});
