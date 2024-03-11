import { View, Text, TextInput, TextInputProps } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { styles } from "./styles";
import { InputWithTitleProps } from "./types";

export const Input = ({
  control,
  name,
  title,
  placeholder,
  rules = {},
  secureTextEntry,
}: TextInputProps & InputWithTitleProps) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <View style={{ flexDirection: "column" }}>
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder={placeholder}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry}
              style={[styles.textInput, { borderColor: error && "red" }]}
            />
            {error && (
              <Text style={{ color: "red" }}>{error.message || "Error"}</Text>
            )}
          </View>
        )}
      />
    </View>
  );
};
