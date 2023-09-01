export class Quote {
    constructor(data) {
        this.author = data.author
        this.content = data.content
    }

    get QuoteTemplate() {
        return `
<div class="row p-4">
  <div class="col-5 text-light p-3">
    <p class="quoteHeader">"${this.content}"</p>
    <p class="quoteBody">-${this.author}</p>
  </div>
</div>`
    }
}