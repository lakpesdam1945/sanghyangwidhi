import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
export type TLoginInputs = {
  email: string;
  password: string;
  status: number;
  useLogin: (email: string, password: string) => void;
};

const validationSchema = yup.object().shape({
  email: yup.string().required("Required").email("Email is Invalid"),
  password: yup.string().required("Required"),
});

export const resolver = yupResolver(validationSchema);
