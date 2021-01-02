//1308-24-11-20 # Working on design, Done Async Storage ,Modal added with great design, Working well,Back issue resolved
import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import {
  View,
  Text,
  ScrollView,
  Modal,
  AsyncStorage
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
  this.setState({visiblilty:true})
  this.nowID=e;
    this.setState({
      text:this.state.list[e].name,
      area:this.state.list[e].notes
    })
}

deleteEntry(e){
alert('deleted'+e)
//this.arr.splice(e+1)
console.log(this.arr)

// this.setState({
//     list:this.arr
// })

// AsyncStorage.setItem("ylist",JSON.stringify(this.arr))

}

render() {
  
return (
 
<View style={{backgroundColor:'lightgrey',height:'100%'}}>
    <Appbar.Header>
      <Appbar.Content title="React Native" subtitle="Question & Answers" />
    </Appbar.Header>

          <View style={{marginTop:7,alignItems:'center'}}>
              <Button style={{marginTop:7,width:'98%'}} mode="contained" onPress={()=>this.setState({visiblilty:true})}> New </Button>
           </View>

          <ScrollView>
                <View >
                 {
                    this.state.list.map((item,index)=>(
                    <TouchableOpacity onPress={()=>this.editmode(item.id)} onLongPress={()=>this.deleteEntry(index)}>
                    <View style={{backgroundColor:'white',margin:5,borderRadius:10,elevation:4,minHeight:50}}>
                   
                    <Text style={{fontSize:21,marginLeft:7,fontWeight:'bold',borderBottomWidth:1}}>Q.{index+1} {item.name} ?</Text>
                    
                    <Text style={{fontSize:18,marginLeft:7}}>{item.notes}</Text>

                    </View>
                    </TouchableOpacity>
                    ))
                  }
                  
                </View>
          </ScrollView>
        
         
        <Modal visible={this.state.visiblilty} >
         <Appbar.Header>
      <Appbar.Content title="Update" subtitle="Question & Answer" />
    </Appbar.Header>

     <View style={{alignItems:'center'}}>
              <TextInput
              label= 'Question'
              style={{ width:'98%',borderColor: 'voilet', borderWidth: 1,marginTop:7 }}
              onChangeText={(text)=>this.setState({text})}
              value={this.state.text}
              />
              
              <TextInput
              label= 'Answer'
              style={{ height: 270,width:'98%', borderColor: 'gray', borderWidth: 1,marginTop:7 }}
              onChangeText={(area)=>this.setState({area})}
              multiline={true}
              value={this.state.area}
              />
              
                <Button style={{marginTop:7,width:'98%'}} mode="contained" onPress={()=>this.saving()}> Save </Button>
                
                <Button style={{marginTop:7,width:'98%'}}  mode="contained" onPress={()=>this.setState({text:'',area:''})} >
                Clear
                </Button>
                 <Button style={{marginTop:7,width:'98%'}}  mode="contained" onPress={()=>{this.setState({text:'',area:''});this.setState({visiblilty:false});{this.nowID=this.id}} }>
                    Back
                </Button>

        </View>

        </Modal>


 </View>


  );
}

};

export default Notes;