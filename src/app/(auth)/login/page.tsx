"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { Button, Checkbox, FormControlLabel, Link, Stack, Typography } from "@mui/material";

import { Person as UsernameIcon, Lock as PasswordIcon } from "@mui/icons-material";

import { TextField } from "@/components/pages/auth";

import { getTextFieldParams } from "@/lib/util";
import { login } from "@/actions/auth";

export default function Page() {
  const router = useRouter();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [state, action, pending] = React.useActionState(
    login.bind(null, { username, password }),
    null
  );

  React.useEffect(() => {
    if (state?.success) {
      router.push("/");
    }
  }, [router, state]);

  return (
    <Stack spacing={2} component="form" action={action}>
      <Stack spacing={0}>
        <Stack spacing={2}>
          {[
            {
              value: username,
              setValue: setUsername,
              name: "username",
              placeholder: "username",
              icon: UsernameIcon,
            },
            {
              value: password,
              setValue: setPassword,
              name: "password",
              type: "password",
              placeholder: "password",
              icon: PasswordIcon,
            },
          ].map((item, index) => (
            <TextField
              key={index}
              {...getTextFieldParams(item.name, item.type ?? "")}
              value={item.value}
              placeholder={item.placeholder}
              icon={item.icon}
              onChange={(event) => item.setValue(event.currentTarget.value)}
            />
          ))}
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label="Remember Me"
            sx={{ color: "primary.dark" }}
          />
          <Link href="">Forget Password?</Link>
        </Stack>
      </Stack>

      <Stack>
        <Button variant="contained" size="large" loading={pending} type="submit">
          Login
        </Button>
        {!pending && <Typography color="error">{state?.error}</Typography>}
      </Stack>

      <Button href="/register">Register</Button>
    </Stack>
  );
}
