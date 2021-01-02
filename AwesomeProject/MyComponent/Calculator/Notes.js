//1308-24-11-20 # Working on design, Done Async Storage ,Modal added with great design, Working well,Back issue resolved
//1919-181220 # design updated
//201218-2245 # delete function added, by log pressing notes.
import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import {
  View,
  Text,
  ScrollView,
  Modal,
  AsyncStorage,
  Image
} from 'react-native';
import { Appbar,TextInput,Button,Card,List} from 'react-native-paper';

class Notes extends Component {
arr=[]
id=0
nowID=0
dataRe=[]

constructor(){
super();
  this.state={
    text:'',
    area:'',
    list:[{id:0,name:'Question',notes:'Answer here'}],
    visiblilty:false
  }
 
}

saving(){
      if(this.nowID<this.id)
      {
        this.arr[this.nowID]={id:this.nowID,name:this.state.text,notes:this.state.area}
        this.nowID=this.id
      }
      else
      {
        this.arr.push({id:this.nowID,name:this.state.text,notes:this.state.area})
        this.nowID++,this.id++
      }

      AsyncStorage.setItem("ylist",JSON.stringify(this.arr))

          this.setState({
            list:this.arr
          })

      this.setState({text:'',area:''})
      this.setState({visiblilty:false})        
} 

async componentDidMount(){
    
    if(JSON.parse(await AsyncStorage.getItem("ylist"))!=null)
    this.arr=JSON.parse(await AsyncStorage.getItem("ylist"))
    this.id=this.arr.length

    this.setState({
      list:this.arr
    })

}

editmode(e){
console.log("---"+e)

  this.setState({visiblilty:true})
  this.nowID=e;
    this.setState({
      text:this.state.list[e].name,
      area:this.state.list[e].notes
    })
}

deleteEntry(e){
this.arr.splice(e,1)
console.log(this.arr)

AsyncStorage.setItem("ylist",JSON.stringify(this.arr))

          this.setState({
            list:this.arr
          })


}

render() {
  console.log(this.arr)
return (
 
<View style={{backgroundColor:'white',height:'100%'}}>
    <Appbar.Header style={{backgroundColor:'grey'}}>
    <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
          <Image style={{height:35,width:35,marginLeft:10}} source={require('./icon.png')}  onPress={()=>this.props.navigation.openDrawer()}  />
          </TouchableOpacity>
      <Appbar.Content title="Notes" color='white' subtitle="Make some notes" onPress={()=>this.props.navigation.openDrawer()  } />
    </Appbar.Header>

          <View style={{marginTop:7,alignItems:'center'}}>
              <Button style={{marginTop:7,width:'98%'}} mode="contained" color="#FF6F00" onPress={()=>this.setState({visiblilty:true})}> New </Button>
           </View>

          <ScrollView>
                <View >
                 {
                    this.state.list.map((item,index)=>(
                    <TouchableOpacity onPress={()=>this.editmode(index)} onLongPress={()=>this.deleteEntry(index)}>
                    <View style={{backgroundColor:'white',margin:7,borderRadius:10,elevation:4,minHeight:90}}>
                   
                    <Text style={{fontSize:21,marginLeft:7,fontWeight:'bold',borderBottomWidth:1,borderTopWidth:1,backgroundColor:'lightgrey'}}> {item.name} </Text>
                    
                    <Text style={{fontSize:18,marginLeft:7}}>{item.notes}</Text>

         
                    </View>
                    </TouchableOpacity>
                    ))
                  }
                  
                </View>
          </ScrollView>
        
         
        <Modal visible={this.state.visiblilty} >
         <Appbar.Header style={{backgroundColor:'grey'}}>
      <Appbar.Content title="Update" color='white' subtitle="update notes here" />
    </Appbar.Header>

     <View style={{alignItems:'center'}}>
              <TextInput
              label= 'Title'
              style={{ width:'98%',borderColor: 'voilet', borderWidth: 1,marginTop:7 }}
              onChangeText={(text)=>this.setState({text})}
              value={this.state.text}
              />
              
              <TextInput
              label= 'Notes Description'
              style={{ height: 270,width:'98%', borderColor: 'gray', borderWidth: 1,marginTop:7 }}
              onChangeText={(area)=>this.setState({area})}
              multiline={true}
              value={this.state.area}
              />
              
                <Button style={{marginTop:7,width:'98%'}} mode="contained" color="#FF6F00" onPress={()=>this.saving()}> Save </Button>
                
                <Button style={{marginTop:7,width:'98%'}}  mode="contained"  color="#FF6F00" onPress={()=>this.setState({text:'',area:''})} >
                Clear
                </Button>
                 <Button style={{marginTop:7,width:'98%'}}  mode="contained" color="#FF6F00" onPress={()=>{this.setState({text:'',area:''});this.setState({visiblilty:false});{this.nowID=this.id}} }>
                    Back
                </Button>

        </View>

        </Modal>


 </View>


  );
}

};

export default Notes;