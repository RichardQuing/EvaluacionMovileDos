import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { ref, set } from 'firebase/database';
import { db } from '../config/config';

const Register = () => {
  const [id, setId] = useState('');
  const [raza, setRaza] = useState('');
  const [nombre, setNombre] = useState('');
  const [nombreDueno, setNombreDueno] = useState('');
  const guardarRegistro = () => {
    const nuevoRegistro = {
      id: id,
      raza: raza,
      nombre: nombre,
      nombreDueno: nombreDueno,
    };
  
    set(ref(db, 'registros/' + id), nuevoRegistro)
      .then(() => {
        Alert.alert('Registro exitoso', 'El registro se ha guardado correctamente');
        limpiarCampos();
      });
  };
  
  const limpiarCampos = () => {
    setId('');
    setRaza('');
    setNombre('');
    setNombreDueno('');
  };

  return (
    <View style={styles.container}>
      <Text>INGRESAR ID</Text>
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={id}
        onChangeText={(text) => setId(text)}
      />
      <Text>INGRESAR RAZA</Text>
      <TextInput
        style={styles.input}
        placeholder="RAZA"
        value={raza}
        onChangeText={(text) => setRaza(text)}
      />
      <Text>INGRESAR NOMBRE</Text>
      <TextInput
        style={styles.input}
        placeholder="NOMBRE"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <Text>INGRESAR NOMBRE DEL DUEÑO</Text>
      <TextInput
        style={styles.input}
        placeholder="NOMBRE DEL DUEÑO"
        value={nombreDueno}
        onChangeText={(text) => setNombreDueno(text)}
      />
      <TouchableOpacity style={styles.btn} onPress={guardarRegistro}>
        <Text style={styles.btntext}>REGISTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: '#0f0f0ff7',
    height: 40,
    width: '80%',
    borderRadius: 40,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    color: 'white',
    fontSize: 15,
  },
});

export default Register;
