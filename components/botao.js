import React from 'react';
import {StyleSheet, Text, TouchableHighlight, Dimensions} from 'react-native';

export default props=>
{
	const estiloBotoes=[estilos.btn]
	if (props.duplo)
	{
		estiloBotoes.push(estilos.btnDuplo)
	}
	if (props.igual)
	{
		estiloBotoes.push(estilos.btnIgual)
	}
	if (props.oper)
	{
		estiloBotoes.push(estilos.btnOper)
	}
	if (props.limpa)
	{
		estiloBotoes.push(estilos.btnLimpa)
	}
	if (props.apaga)
	{
		estiloBotoes.push(estilos.btnApaga)
	}
	return(
		<TouchableHighlight onPress={props.aoClicar}>
			<Text style={estiloBotoes}>{props.label}</Text>
		</TouchableHighlight>
	)
}

const estilos = StyleSheet.create({
	btn:{fontSize:30, height:Dimensions.get('window').width/4, width:Dimensions.get('window').width/4, padding:20, backgroundColor:'#000', color:'#fff', textAlign:'center'},
	btnIgual:{color:'#fff'},
	btnOper:{color:'#fff'},
	btnLimpa:{color:'#ff0'},
	btnApaga:{color:'#fff'},
	btnDuplo:{width:Dimensions.get('window').width/2}
})
