export interface ICacheStore {
  findAll: any[];
  [key: `findOne:${string}`]: {};
}
