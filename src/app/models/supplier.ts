export class Supplier {
  name: string;
  email: string;
  tel: number;
  from = [];
  to = [];
  goods = [];
  reviews = [];
  id: number;

  constructor(name, email, tel, from, to, goods, reviews, id) {
    this.name = name;
    this.email = email;
    this.tel = tel;
    this.from = from;
    this.to = to;
    this.goods = goods;
    this.reviews = reviews;
    this.id = id;
  }
}
