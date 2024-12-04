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
  TextInputController,
  Link,
} from "@/app/component/common";

const schema = yup.object({
  email: yup.string().email("Wrong email").trim().required("Required"),
});

type FormData = yup.InferType<typeof schema>;

function ForgotPassword() {
  const methods = useForm<FormData>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });
  const { control } = methods;

  const onSubmit = () => {};
  return (
    <div>
      <div className="text-center">
        <PageTitle>Forgot password?</PageTitle>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TextInputController
            controllerProps={{ name: "email" }}
            inputProps={{ id: "email" }}
            control={control}
            label="Email"
          />
          <Button className="mt-4 w-full" type="submit" color="blue">
            Submit
          </Button>
          <div className="mt-4">
            Back to <Link href="/login">Login</Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default ForgotPassword;
