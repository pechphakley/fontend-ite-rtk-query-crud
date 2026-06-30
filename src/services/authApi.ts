import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


type LoginRequest ={
    email: string,
    password: string,
}

type LoginResponse = {
  accessToken: string;
  refreshToken?: string;
  user?: {
    uuid: string;
    email: string;
    username: string
  };
};