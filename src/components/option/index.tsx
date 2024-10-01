import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

type Props = TouchableOpacityProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  varint?: "primary" | "secondary";
};

export function Option({ name, icon, varint = "primary", ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialIcons
        name={icon}
        size={20}
        color={
          varint === "primary" ? colors.green[300] : colors.gray[400]
        }
      />
      <Text
        style={
          varint === "primary" ? styles.primaryTitle : styles.secondaryTitle
        }
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}