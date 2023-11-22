import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function Saudacao() {
  const [resposta, setResposta] = useState("");

  useEffect(() => {
    const hora = new Date().getUTCHours;
  }, []);
  return (
    <View>
      <Text>index</Text>
    </View>
  );
}
