import { View, Text, TextInput, TextInputProps } from "react-native";
import { Controller } from "react-hook-form";
import { styles } from "./styles";
import { InputWithTitleProps } from "./types";

export const Input = ({
  control,
  name,
  title,
  placeholder,
  secureTextEntry,
}: TextInputProps & InputWithTitleProps) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
            style={styles.textInput}
          />
        )}
      />
    </View>
  );
};
