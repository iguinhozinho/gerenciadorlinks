import { Stack } from "expo-router";

import { colors } from "@/styles/colors";

const backgroundColor = colors.gray[950];

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor },
      }}
    />
  );
}
