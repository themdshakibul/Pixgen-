"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LogingPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const useData = Object.fromEntries(formData.entries());

    await authClient.signIn.email(
      {
        email: useData.email,
        password: useData.password,
        callbackURL: "/",
      },
      {
        onSuccess: async () => {
          router.push("/");
          router.refresh();
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      },
    );
  };

  const hadelGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const hadelGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <section>
      <div>
        <Card className="border mx-auto w-125 py-10 mt-15">
          <h1 className="text-center text-2xl font-bold">SignIn Page</h1>

          <Form
            className="flex w-96 mx-auto flex-col gap-4"
            onSubmit={onSubmit}
          >
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>

            <div className="flex gap-2">
              <Button type="submit">
                <Check />
                Submit
              </Button>
              <Button type="reset" variant="secondary">
                Reset
              </Button>
            </div>
          </Form>
          <div className="space-y-4">
            <p className="text-center font-semibold">Or</p>
            <Button
              onClick={hadelGoogleSignIn}
              size="lg"
              variant="outline"
              className="w-full"
            >
              <FaGoogle /> Sign In width Google
            </Button>
            <Button
              onClick={hadelGithubSignIn}
              size="lg"
              variant="outline"
              className="w-full"
            >
              <FaGithub /> Sign In width Github
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LogingPage;
