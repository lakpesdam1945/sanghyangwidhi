import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GetUser, UserTypes } from "./UserTypes";
export type TLoginInputs = {
  email?: string;
  password?: string;
  status?: number;
  useLogin: (
    email: string | undefined,
    password: string | undefined
  ) => Promise<void>;
  useToken?: () => Promise<void>;
  token?: string;
  setErrors?: string;
  getUser: () => void;
  user?: UserTypes;
};

const validationSchema = yup.object().shape({
  email: yup.string().required("Required").email("Email is Invalid"),
  password: yup.string().required("Required"),
});

export const resolver = yupResolver(validationSchema);
