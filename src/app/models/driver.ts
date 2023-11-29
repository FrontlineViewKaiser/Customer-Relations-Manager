export class Driver {
  name: string;
  email: string;
  tel: number;
  from = [];
  to = [];
  vehicle: string;
  goods = [];
  reviews = [];
  id: number;

  constructor(name, email, tel, from, to, vehicle, goods, reviews, id) {
    this.name = name;
    this.email = email;
    this.tel = tel;
    this.from = from;
    this.to = to;
    this.vehicle = vehicle;
    this.goods = goods;
    this.reviews = reviews;
    this.id = id
  }
}
