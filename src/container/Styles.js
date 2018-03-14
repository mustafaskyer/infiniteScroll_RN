import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export default styles = StyleSheet.create({
    mainContainer: {
        flex:1
    },
    headerName:{
        width:'100%',
        height:100, 
        alignItems: 'center', 
        flexDirection: 'column',
        marginVertical: 25,
    },
    nameText:{
        padding:15, 
        marginVertical:5
    },
    bold:{
        fontWeight: '800',
        color: '#000',
        fontSize:19,
        color: '#dc143c'
    },
    twitter: {
        marginVertical:5, 
        height:35, 
        fontSize:21,
        color:'#2a2e2e'
    },
    twitterLogo: {
        fontSize:22,
        color: '#1dcaff',
    },
    countStyle:{
        flex:1, 
        justifyContent:'center', 
        alignItems: 'center', 
        maxHeight:100,
        paddingVertical:15, 
        backgroundColor:'#eee', 
        marginTop:10
    },
    headerDesc: {
        textAlign: 'center', 
        paddingHorizontal: 25, 
        lineHeight:45, 
        fontSize:18, 
        fontWeight: '500'
    },
    buttonContainer:{
        backgroundColor: '#eee',
        height: 100,
        width:100,
        borderRadius: 100/2,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: '#ddd',
        borderWidth:2,
        marginTop: height * 0.2
    },
    textButton: {
        color: '#000',
        fontWeight: '800',
        fontSize: 14
    },
    white:{
        color: '#fff',
        fontWeight: '900'
    },


    // post style
    listItemContainer:{
        width: width,
        marginVertical: 15,
    },
    listItemName: {
        marginTop: 15
    },
    listItemDate:{
        alignItems: 'flex-start',
        paddingVertical: 15
    },
    spinner:{
        padding: 21,
    }
})