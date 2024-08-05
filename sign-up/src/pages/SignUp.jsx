import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Input,
} from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signUpFormSchema = z.object({
  email: z.string().email("email not valid"),
  username: z.string().min(1).max(10),
  password: z.string().min(6, "password min. 6 character"),
});

const SignUp = (props) => {
  const { getData } = props;

  const getMessage = (data) => {
    getData(data);
  };

  const form = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    resolver: zodResolver(signUpFormSchema),
  });

  const registerUser = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Card className="max-w-[500px]">
          <CardHeader className="flex gap-3 text-2xl font-bold">
            <h1
              className="text-transparent bg-clip-text bg-gradient-to-r 
            from-blue-500 to-green-500 "
            >
              Register
            </h1>
          </CardHeader>
          <Divider />
          <CardBody>
            <form
              className="flex flex-col gap-4 w-[300px]"
              onSubmit={form.handleSubmit(registerUser)}
            >
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => {
                  return (
                    <Input
                      {...field}
                      label="Email"
                      variant="bordered"
                      type="email"
                      isInvalid={Boolean(fieldState.error)}
                      errorMessage={fieldState.error?.message}
                    />
                  );
                }}
              />

              <Controller
                name="username"
                control={form.control}
                render={({ field, fieldState }) => {
                  return (
                    <Input
                      {...field}
                      label="Username"
                      variant="bordered"
                      type="text"
                      isInvalid={Boolean(fieldState.error)}
                      errorMessage={fieldState.error?.message}
                    />
                  );
                }}
              />

              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => {
                  return (
                    <Input
                      {...field}
                      label="Password"
                      variant="bordered"
                      type="password"
                      isInvalid={Boolean(fieldState.error)}
                      errorMessage={fieldState.error?.message}
                    />
                  );
                }}
              />

              <Divider />

              <Button
                type="submit"
                color="primary"
                variant="bordered"
                className=" w-7"
              >
                Sign Up
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default SignUp;
