import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20,

    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20,
        color:'#007bff',
        textTransform:'uppercase',
    },

    input:{
        height:50,
        width:'100%',
        backgroundColor:'#f8f8f8',
        paddingHorizontal:20,
        marginBottom:20,
        borderRadius:10,
        fontSize:18,
        color:'#333',
    },

    button:{
        backgroundColor:'#007bff',
        paddingVertical:15,
        paddingHorizontal:30,
        borderRadius:10,
        elevation:3,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2,
        },

        shadowOpacity:0.25,
        shadowRadius:3.84,

    },

    buttonText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        textTransform:'uppercase',

    },

    clearButton:{
        backgroundColor:'#dc3545',
        paddingVertical:15,
        paddingHorizontal:30,
        borderRadius:10,
        elevation:3,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2,
        },

        shadowOpacity:0.25,
        shadowRadius:3.84,

    },

    clearButtonText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        textTransform:'uppercase',
    },
    enderecoContainer:{
        marginTop:20,
        width:'100%',
        padding:20,
        borderRadius:15,
        backgroundColor:'#f8f8f8',
        elevation:3,
        shadowColor:'#000',
        shadowOffset:{
        width:0,
        height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
    },
    enderecoText:{
        marginBottom:10,
        fontSize:18,
        color:'#333',
        textAlign:'center',
    },

    errotext:{
        color:'red',
        marginTop:20,
        fontSize:18,
        fontWeight:'bold',
    },


});