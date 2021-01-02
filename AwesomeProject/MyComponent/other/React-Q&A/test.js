//1308-24-11-20 # Working on design, Done Async Storage ,Modal added with great design, Working well,Back issue resolved
import React, {Component} from 'react';
import {
  View,
  Text,ScrollView,Modal,AsyncStorage
} from 'react-native';
import { Appbar,TextInput,Button,Card,List} from 'react-native-paper';
class App extends Component {
arr=[]
id=0
nowID=0
dataRe=[]

constructor(){
super();
  this.state={
    text:'',
    area:'',
    list:[{id:0,name:'Title',notes:'Keep all notes here'}],
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

      console.log("saving data.."+JSON.stringify(this.arr))
      AsyncStorage.setItem("ylist",JSON.stringify(this.arr))

          this.setState({
            list:this.arr
          })

      this.setState({text:'',area:''})
      this.setState({visiblilty:false})        
} 

async componentDidMount(){
    console.log("check-"+await AsyncStorage.getItem("ylist"))
    
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

render() {
  
return (
 
<View style={{backgroundColor:'lightgrey'}}>
    <Appbar.Header>
      <Appbar.Content title="Keep" subtitle="Note book" />
    </Appbar.Header>

          <View style={{marginTop:7,alignItems:'center'}}>
              <Button style={{marginTop:7,width:'98%'}} mode="contained" onPress={()=>this.setState({visiblilty:true})}> New </Button>
           </View>

          <ScrollView>
                <View >
                 {
                    this.state.list.map((item,index)=>(
                    <Card style={{margin:7}}>
                       <List.Item
                        title=  {item.name}
                        description={item.notes}
                        onPress={()=>this.editmode(item.id)}
                        right={props => <List.Icon {...props} icon="delete" onPress={()=>alert("delete")} />}
                        />
                    </Card>
                    ))
                  }
                  
                </View>
          </ScrollView>
        
         
        <Modal visible={this.state.visiblilty} >
         <Appbar.Header>
      <Appbar.Content title="Keep" subtitle="Note book" />
    </Appbar.Header>

     <View style={{alignItems:'center'}}>
              <TextInput
              label= 'Title'
              style={{ width:'98%',borderColor: 'voilet', borderWidth: 1,marginTop:7 }}
              onChangeText={(text)=>this.setState({text})}
              value={this.state.text}
              />
              
              <TextInput
              label= 'Notes'
              style={{ height: 120,width:'98%', borderColor: 'gray', borderWidth: 1,marginTop:7 }}
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

export default App;