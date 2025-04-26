"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { Button, Stack, Typography } from "@mui/material";

import {
  Person as UsernameIcon,
  Lock as PasswordIcon,
  Email as EmailIcon,
  CalendarToday as DobIcon,
} from "@mui/icons-material";

import { TextField } from "@/components/pages/auth";

import { getTextFieldParams } from "@/lib/util";
import { register } from "@/actions/auth";

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = React.useState("");
  const [dob, setDob] = React.useState(new Date().toString());
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [state, action, pending] = React.useActionState(
    register.bind(null, { username, password, email, dob: new Date(dob) }),
    null
  );

  React.useEffect(() => {
    if (state?.success) {
      router.push("/login");
    }
  }, [router, state]);

  return (
    <Stack spacing={2} component="form" action={action}>
      <Stack spacing={0}>
        <Stack spacing={2}>
          {[
            {
              value: email,
              setValue: setEmail,
              name: "email",
              type: "email",
              placeholder: "Email",
              icon: EmailIcon,
            },
            {
              value: dob,
              setValue: setDob,
              name: "dob",
              type: "date",
              placeholder: "Dob",
              icon: DobIcon,
            },
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
      </Stack>

      <Stack>
        <Button variant="contained" size="large" loading={pending} type="submit">
          Register
        </Button>
        {!pending && <Typography color="error">{state?.error}</Typography>}
      </Stack>
      <Button href="/login">Login</Button>
    </Stack>
  );
}
