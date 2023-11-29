export class User {
  profile: JSON;
  favorites = [];
  status: string;
  color:string;

  constructor(profile, status, color) {
    this.profile = profile;
    this.status = status;
    this.color = color
  }
}
