export interface User {
  username: string,
  classe: string,
  level: number,
  password: string,

}

export interface IdUser extends User {
  id: number,
}
