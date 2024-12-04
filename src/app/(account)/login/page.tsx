"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import PageTitle from "@/app/component/common/page-title";
import {
  Button,
  Checkbox,
  Label,
  Link,
  TextInputController,
} from "@/app/component/common";

const schema = yup.object({
  email: yup.string().email("Wrong email").trim().required("Required"),
  password: yup.string().trim().required("Required"),
});

type FormData = yup.InferType<typeof schema>;

function SignUp() {
  const methods = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const { control } = methods;

  const onSubmit = () => {};

  return (
    <div>
      <div className="text-center">
        <PageTitle>Login</PageTitle>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TextInputController
            controllerProps={{ name: "email" }}
            inputProps={{ id: "email" }}
            control={control}
            label="Email"
          />

          <div className="mt-4">
            <TextInputController
              controllerProps={{ name: "password" }}
              inputProps={{ id: "password", type: "password" }}
              control={control}
              label="Password"
            />
          </div>

          <div className="mt-4 flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <div>
              <Link href="/forgot-password">Forgot Password</Link>
            </div>
          </div>
          <div className="mt-4">
            Don't have an account yet?{" "}
            <Link href="/sign-up">Sign up</Link>
          </div>
          <Button className="mt-4 w-full" color="blue" type="submit">
            Login
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default SignUp;
