//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image ,TouchableHighlight} from 'react-native';
import ContactData from "./ContactData" ;

// create a component
export default class ContactItem extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        //props จากContactData โดยทำเป็นรูปแบบDestructuring
        let {firstname,lastname,email,phone} = this.props.contact 


        //รูป
        const picsrc = firstname.toLowerCase()+'.jpeg' ;
        const imgurl = ContactData.getUrl()+"/contacts/img/"+picsrc ;

        
        return (
            <TouchableHighlight onPress={()=>{alert("Tel: "+phone)}}>
            <View style={{flexDirection: "row"}}>
            <Image style={{width:50, height:50}} source = {{uri:imgurl}}/>

            <View style={{flexDirection: "column"}}>
              <Text> {firstname} </Text>
                <Text> {lastname} </Text>
                <Text> {email} </Text>
                <Text> {phone} </Text>

            </View>
            </View>
            </TouchableHighlight>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
});

//make this component available to the app
//export default ContactItem;
