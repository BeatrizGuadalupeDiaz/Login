import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";

import { styles } from "./styles";
import { Input } from "../components/index";

const Login = () => {
  const { control, handleSubmit} = useForm();
  //const watchPassword = watch("password");
  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const singInPressed = (data) => {
    console.log("sing in", data);
  };
  console.log("state");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <Input
        control={control}
        name={"email"}
        rules={{ required: "Email is required", pattern: {value: EMAIL_REGEX, message: 'Email is invalid'} }}
        placeholder="Email"
      />
      <Input
        control={control}
        name={"password"}
        rules={{
          required: true,
          minLength: {
            value: 5,
            message: "Password must have at least 5 characters",
          },
        }}
        placeholder="Password"
        secureTextEntry
      />
      {/* <Input
        control={control}
        name={"confirmPassword"}
        rules={{
          required: true,
          validate: (value) => value === watchPassword || "The passwords do not match",
          minLength: {
            value: 5,
            message: "Password must have at least 5 characters",
          },
        }}
        placeholder="Password"
        secureTextEntry
      /> */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(singInPressed)}
      >
        <Text style={styles.textBtn}>Log in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
