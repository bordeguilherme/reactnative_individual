import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";

export default function Main() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState("");

  function calcular() {
    if (!altura || !peso) {
      setResultado("Preencha o peso e a altura.");
      return;
    }
    const alturaEmMetro = parseFloat(altura) / 100;
    const pesoFloat = parseFloat(peso);
    const imc = pesoFloat / (alturaEmMetro * alturaEmMetro);
    setResultado(`O seu Indice de Massa Corporal é igual à ${imc.toFixed(2)}`);
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>Altura</Text>
      <TextInput
        inputMode="numeric"
        style={styles.mainInput}
        placeholder="Em centímetros"
        value={altura}
        onChangeText={(t) => setAltura(t)}
      />
      <Text style={styles.mainText}>Peso</Text>
      <TextInput
        inputMode="numeric"
        style={styles.mainInput}
        placeholder="Em kg"
        value={peso}
        onChangeText={(t) => setPeso(t)}
      />
      <TouchableOpacity
        style={styles.mainButton}
        title="Calcular"
        onPress={calcular}
      >
        <Text style={styles.mainButtonText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.mainTextResultado}>{resultado}</Text>
    </View>
  );
}
