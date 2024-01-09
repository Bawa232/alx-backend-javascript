class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new Error('code must be a string');
    } else {
        this._code = code;
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    } else {
        this._name = name;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
