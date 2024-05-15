import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
   
    titulo:{
        marginTop: 40,
        fontSize:35,
        color:"black",
        fontFamily:"Pixelify Sans",
        fontWeight:"bold",
    },
    titulo2:{
        marginTop:40,
        fontSize:35,
        color:"#80ADCA",
        fontFamily:"Pixelify Sans",
        fontWeight: "bold",
    },
    alinhamentoText:{
        justifyContent:"center",
        alignContent:"center",
        marginTop:70,
        marginRight:165,
    },
    fontP:{
        fontSize:30,
        color:"black",
        fontFamily:"Anton",
        fontWeight: "bold",
    },
    img:{
        width:25,
        height:25,
    },
    btn:{
        width:350,
        height:50,
        backgroundColor:"#283B8F",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        marginTop:70,
        
    },
    textBtn:{
        color:"#FFF",
        fontFamily:"Pixelify Sans",
        fontWeight:"bold",
        fontSize:15
    },  
    textOR:{
        color:"black",
        fontFamily:"Pixelify Sans",
        fontWeight:"bold",
        fontSize:15,
        textAlign:"center",
        margin:20
    },
    containerFlexRow:{
        flexDirection:"row",
    
    },
    containerAlinhamentoIcone:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        borderColor:"black",
        borderWidth:1,
        width:160,
        height:50,
        margin:25
    },
    textBtnRedes:{
        color:"black",
        fontSize:16,
        fontFamily:"Pixelify Sans",
        fontWeight:"bold",
        margin:10
    },
    textRodape:{
        color:"#B3C8CF",
        fontSize:16,
        fontFamily:"Pixelify Sans",
        fontWeight:"bold",

    },
    textRodape2:{
        color:"red",
        fontSize:16,
        fontFamily:"Pixelify Sans",
        fontWeight:"bold",

    },
    containerAlinhamentoText:{
        flexDirection:"row",
        justifyContent:"space-around",
        margin:35 , 
    },
    containerAlinhamento:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1,    
        borderColor:"#B3C8CF",
        height:50,
        width:400,
        marginTop:15
    }

})

export default estilo;