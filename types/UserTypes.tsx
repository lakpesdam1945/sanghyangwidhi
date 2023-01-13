export type UserTypes = {
  id?: number;
  name?: string;
  email?: string;
  email_verified_at?: Date;
  avatar?: string;
  created_at?: Date;
  updated_at?: Date;
};

export type GetUser = {
  dataUser: UserTypes;
};
