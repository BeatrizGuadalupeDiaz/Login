import { Text, SafeAreaView, Pressable, TextInput } from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";

import { styles } from "./styles";
import { Input } from "../components/index";

const Login = () => {
  const { control, handleSubmit } = useForm();

  const singInPressed = (data) => {
    console.log("sing in", data);
  };
  console.log("state");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>log in</Text>
      <Input control={control} name={"email"} placeholder="Email" />
      <Input
        control={control}
        name={"password"}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={handleSubmit(singInPressed)}>
        <Text style={styles.textBtn}>Log in</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Login;
