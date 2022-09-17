export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpitationDate: Date
  ) {}

  get token() {
    if (!this._tokenExpitationDate || new Date() > this._tokenExpitationDate) {
      return null;
    }
    return this._token;
  }
}
