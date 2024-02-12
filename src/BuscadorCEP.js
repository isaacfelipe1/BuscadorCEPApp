import React ,{useState} from "react";
import { View, TextInput, Button, Text } from "react-native";
import axios   from "axios";
import styles from './styles';

const BuscadorCEP=()=>{
 const [cep,setCep]=useState('');
 const [endereco, setEndereco]= useState(null);
 const [erro, setErro] = useState(null);

 const buscarCEP=async()=>{
    try {
        const response= await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setEndereco(response.data);
        setErro(null);
    } catch (error) {
        setEndereco(null);
        setErro('CEP não encontrado');
    }
 };

  return (
    <View style={styles.container}> 
    <TextInput  
    style={styles.input}
    placeholder="Digite o Cep"
    onChangeText={text=> setCep(text)}
    value={cep}/>
    <Button title="BUSCAR" onPress={buscarCEP} />
    {endereco && (
    <View style={styles.enderecoContainer}>
        <Text style={styles.enderecoText}>CEP: {endereco.cep}</Text>
        <Text style={styles.enderecoText}>Logradouro: {endereco.logradouro}</Text>
        <Text style={styles.enderecoText}>Bairro: {endereco.bairro}</Text>
        <Text style={styles.enderecoText}>Cidade: {endereco.localidade}</Text>
        <Text style={styles.enderecoText}>Estado: {endereco.uf}</Text>
    </View>
)}

    {erro && <Text style={styles.erroText}>{erro}</Text>} 
    </View>
  );
};

export default BuscadorCEP;
