import {View, Text, TouchableHighlight,StyleSheet,SectionList, FlatList} from 'react-native';
import React,{Component} from 'react';
import { Icon } from 'react-native-elements';

export default class Drawer extends Component {     

constructor(props) {
   super(props);
   this.state = {
       categories : [],
   };
 }

 componentDidMount(){Function
     this.getCategories();
 }

 getCategories = () => {
   getSessionId().then(sessionId => {
       category(sessionId).then(response => {
      onSuccess(response).then(successResponse => {
          this.setState({
              categories : successResponse,                   
          });
      })
  })
  .catch(error => {
      hideLoader();
      onFailure(error).then(errorMessage => {
          showMessage(JSON.stringify(errorMessage));
      })
  });
})
 }


 render() {
   return (
  <View style={styles.parent}>
      <Text style={styles.headingTextStyle}>
      QUICK NAVIGATION
      </Text> 
      <DrawerMenuItem iconName='list' iconType='feather' 
         text='My List' 
          onPress={() => {showMessage("MyList"); 
         Actions.myList();}}
      />
      <DrawerMenuItem iconName='user' iconType='font-awesome' 
              text='Profile' 
          onPress={() => {showMessage("Profile"); 
         Actions.profile();}}
      />
      <DrawerMenuItem iconName='explore' iconType='material-
              icons' text='Explore' 
          onPress={() => {showMessage("explore"); 
         Actions.explore();}}
      />
      <Text style={styles.headingTextStyle}>
      BROWSE BY CATEGORY
      </Text>    

      {/* <TextViewNonClickable
          textViewText={JSON.stringify(this.state.categories)}
          textStyle={{color : color.colorBlack,margin:20}}
      /> */}
        <Text>tdada</Text>

          <SectionList
              sections={this.state.categories}
              renderItem={({item,index})=>{
                  return(<SubCategories  item={item}  index=
                   {index}/>);
              }}   
              renderSectionHeader={({section}) => {
                  return(<SubCategoryHeader section={section}/>);
              }}
              keyExtractor={({item,index}) => item+index}
          />              
  </View>
   );
 }

}

const styles = StyleSheet.create({
   parent : {
       flex : 1,
       width : 300,
       alignItems : 'center'
   },
   touchableHighlightStyle : {
  height : 48,
  alignSelf : 'stretch',
  alignItems : 'flex-start',
  paddingLeft : 16,
  borderBottomWidth: 1,
  borderBottomColor: color.colorHintText,
   },
   textStyle : {
  height : 48,
  alignSelf : 'stretch',
  alignItems: 'center',
  textAlignVertical:'center'
   },
   headingTextStyle : {
  fontSize:20,
  height :48,
  fontWeight: 'bold',
  paddingTop:12,
  backgroundColor:color.loginBgColor,
  alignSelf:'stretch',
  paddingStart:16
   }
});

const DrawerMenuItem = (props) => {

   const {iconName,iconType,text,onPress} = props;

   return (
  <TouchableHighlight style={styles.touchableHighlightStyle} 
     onPress = {onPress}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
          <Icon
              name={iconName}
              type={iconType}
              iconStyle={{paddingRight : 16}}
          />
          <Text style={styles.textStyle}>{text}</Text>
      </View>
  </TouchableHighlight>
   )
}

class SubCategoryHeader extends Component{

render(){
  return(
      <Text
        //   textViewText={this.props.section.name}
        //   textStyle={{color:color.colorBlack}}
      >test</Text>
  )
   }    
}

class SubCategories extends Component{
   render(){
  return(
      <Text>testtt</Text>
    //       textViewText={this.props.item.subcategories.name} 
    //       textStyle={{color:color.loginBgColor}} 
    //   />
  )
   }
}