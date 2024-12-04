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
function page() {
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
        <PageTitle>Sign up</PageTitle>
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
          <div className="flex items-center gap-2 mt-4">
            <Checkbox id="remember" />
            <Label htmlFor="remember">I agree to terms and condition</Label>
          </div>
          <Button className="mt-4 w-full" color="blue" type="submit">
            Sign up
          </Button>
          <div className="mt-4">
            Already have an account? <Link href="/login">Login</Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default page;
