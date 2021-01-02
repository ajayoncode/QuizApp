//  Master Card A008.7 testing  200303-1155
//..1231> new sub card comment edit issue resolved
//..1307> title add remark in details updated, created udpate ON argument in set Card
//..1653> DustBin card Added for delete Items.
//MasterCard A008.7.3 > ..1052> Master Card Initiated Auto
//200307-1457//MasterCard A008.7.4 >... Every Card Childs showing in flat list
//200307-1457//MasterCard A008.7.4 >... New modal created for Comment Log and Labels
//200307-1611//MasterCard A008.7.5 testing>... working on Card Colors.
//200307-1801//MasterCard A008.7.5 testing>... working on Card Colors testing 2
//200309-0038//MasterCard A008.8 testing> .. New Auto cards Added 0-Master, 1-card, 2-Main, 3-trash
//200309-0038//MasterCard A008.9.0 > .. New Auto cards Added 0-Master, 1-cards, 2-Main, 3-trash
//200309-0218//MasterCard A008.9.0 > ..Live search in All card Card
//200309-0252//MasterCard A008.9.1 > ..Blank title issue resolved
//200311-1427//MasterCard A008.9.3 > ..card Move to other card button added
//200311-1725//MasterCard A008.9.4 > ..card Review Date option added wia date picker
//200311-1819//MasterCard A008.9.5 > ..on long press card moved to trash
//200312-1402//MasterCard A008.9.5.1 > ..code managed and little issue
//200316-1702//MasterCard A008.9.6.1 > ..Better design with icons
//200316-1740//MasterCard A008.9.6.2 > ..Check designs
//200317-0134//MasterCard A008.9.6.3 > ..undefined issue in comments resolved
//200317-0225//MasterCard A008.9.6.4 testing > ..working on saving data
//200322-0429//MasterCard A008.9.7 > Title stored in locat phone data.
//200322-2157//MasterCard A008.9.8 > Link Number stored in locat phone data.
//200323-1143//MasterCard A008.9.8 > saving basic tilte tree.
//200323-1934//MasterCard A008.9.9 > updating Title & Adding Comment with saving data 
//200323-1145//MasterCard A008.9.9.1 > working on Move cards saving test 
//200324-1511//MasterCard A008.9.9.2 > Code review and managed
//1951-----------------
import React, { Component } from 'react';
import {
 Text,
 AppRegistry,
 View,
 StyleSheet,
 TextInput,
 Button,
 FlatList,
 AsyncStorage,
 TouchableOpacity,
 Modal,
 Image,
 DatePickerAndroid,
 backHandler
  } from 'react-native';
 
 
var MasterFileIn,
   NewCardNumber,
   CardNumberList_X=[],
   CardTitleList_X=[],
   CardLinkNumberList_X=[],
   CardChildList_X=[],
   CardHolderList_X=[],
   CardCreateDateList_X=[],
   CardCommentList_X=[],
   
   CardTempList_X=[];
   var cc=0;
   var title=[];
   var TempNumber=[];
   var TempTotalChilds=[];

var TempTotalChilds=[];

let user;

export default class App extends Component {
constructor(props) {
   super(props);
   this.state = {   
   nowTypingInput: '',
   NowCard: 1,
   Link: [],
   totalChilds:[],
 
   modalVisible : false,
                                  
   dateList:[], 
   dateText: 'Review Date',
 };
 }

  LIVEinput(nowTypingInput)
  {
    this.setState({nowTypingInput})
 
    if(this.state.NowCard==4)
    this.LiveSearch(nowTypingInput)         
  
    if(nowTypingInput=="clr")
   {
   alert("Resetting Data !!")
   //AsyncStorage.setItem('userD','#0/0/0#'); 
   AsyncStorage.setItem('userE',"#0/4/0#"+  
   "#1/  @CreateDate/20-03-2020/CreateDate@ @Number/1/Number@ @Title/Master/Title@ @Link/0/Link@ @Comment/(Auto) Its Master Card/Comment@/1# " +

   "#2/  @CreateDate/20-03-2020/CreateDate@ @Number/2/Number@ @Title/Main/Title@ @Link/1/Link@ @Comment/(Auto)Its Main Card/Comment@/2#"+ 

  "#3/  @CreateDate/20-03-2020/CreateDate@ @Number/3/Number@ @Title/Trash/Title@ @Link/1/Link@ @Comment/(Auto)Its Trash Box/Comment@/3#"+ 

  "#4/  @CreateDate/20-03-2020/CreateDate@ @Number/4/Number@ @Title/Cards/Title@ @Link/1/Link@ @Comment/(Auto)Its having all cards/Comment@/4#");
        this.displayData();
   }

}
 
LiveSearch(nowTypingInput)
{
 cc=0;
 
 this.setState(
        prevState => {        
         let {
           NowCard,
            nowTypingInput,
           Link,       
           totalChilds,
          } = prevState;
 
       title=[];
    //   TempTotalChilds=[];
 	// alert(CardTitleList_X[a].search(nowTypingInput))
 	  for(var a=0;a<CardTitleList_X.length;a++)
 	  if(CardTitleList_X[a].search(nowTypingInput)==0)
 	  {  
 	     title[cc]=CardTitleList_X[a];
 	     TempNumber[cc]=CardNumberList_X[a];
   	  TempTotalChilds[cc]=totalChilds[a];
   	   cc++;  	
 	   }
     
//TempTotalChilds[NowCard]=cc;
//totalChilds[NowCard]=cc; 
cc=0;
         return {
           NowCard: NowCard,
       
           totalChilds: totalChilds,
          };
        },
       //save
      );
 
 }
 
setModalVisible(visible) {
   this.setState({modalVisible: visible});
  }
 

 
 
CardPress(number) //Last card number
{
 
//alert(number+"card No-"+this.state.cardNumberList[number])
cc=0;
this.setState(
        prevState => {        
         let {
         
           cardNumberList,
           cardCreateDateList,
           cardTitleList,
           cardDetailList,
           lastCardNumber,
           NowCard,
           NOWcardNumberList,
           NOWcardCreateDateList,
           NOWcardTitleList,
           NOWcardDetailList,
           Link,
           dateText,
           dateList,
           totalChilds,
 
          } = prevState;
 
NowCard=number;
 
         return {
   	         
           cardNumberList: cardNumberList,
           cardCreateDateList: cardCreateDateList,
           cardTitleList: cardTitleList,
           cardDetailList: cardDetailList,
           lastCardNumber: lastCardNumber,
           nowTypingInput:'',
           NowCard: NowCard,
            NOWcardNumberList: NOWcardNumberList,
           NOWcardCreateDateList: NOWcardCreateDateList,
           NOWcardTitleList: NOWcardTitleList,
           NOWcardDetailList: NOWcardDetailList,
           totalChilds: totalChilds,
           dateText: dateText,
           dateList:dateList
          };
        },
    //save
  
      );
 
    
}
 
 
componentDidMount() {
 this.CardPress(1);
 this.displayData()
 /*
//this.AddToBox("Ajey","0");
  if(this.state.lastCardNumber==0)
  {
    
    this.SetCard(0,"Master","this is main root card","OFF")
    this.SetCard(1,"Cards","this card having all cards","OFF")
    this.SetCard(2,"Main","this card having its Own info","OFF")
    this.SetCard(3,"Trash","its having waste","OFF")
    this.CardPress(2)
  }
  */
}
 
 
showDatePicker = async (options) => {
   try {
     const {action, year, month, day} = await DatePickerAndroid.open(options);
     if (action !== DatePickerAndroid.dismissedAction) {
       let date = new Date(year, month, day);
       let newState = {};
       newState['date'] = date;
       newState['dateText'] = date.toLocaleDateString("en-US");
       this.setState(newState);
     }
   } catch ({code, message}) {
     console.warn(`error `, code, message);
   }
  this.CardPress(this.state.NowCard)
 
 };
 
 
 
displayData = async ()=>{ 
   try{ 
     var start,close;

      user = await AsyncStorage.getItem('userE');      
      MasterFileIn=user;

this.DataAnayser(MasterFileIn)
 
   } 
   catch(error){ 
     alert("issueee "+error) 
   } 
 }
 
 
DataAnayser(MasterFileIn)
{
 // IN //   MasterFile
 // OUT //  NewCardNumber, CardHolderList , CardNumberList, CardTitleList, CardLinkNumberList, CardCreateDateList, CardCommenList
 var start,close;
 
// NewCardNumber //OUT
   start=MasterFileIn.indexOf("#0/")+3;      
   close=MasterFileIn.indexOf("/0#");         
         
   NewCardNumber=MasterFileIn.substring(start,close)
   NewCardNumber=(parseInt(NewCardNumber)+1)
 
     for(var i=1;i<NewCardNumber;i++)
     {
         start=MasterFileIn.indexOf("#"+i+"/");                                             
        close=MasterFileIn.indexOf("/"+i+"#");                                                      
         CardHolderList_X[i]=MasterFileIn.substring(start+3,close);                                  
       
 
         start=CardHolderList_X[i].indexOf("@Number/");                                      
         close=CardHolderList_X[i].indexOf("/Number@");
         CardNumberList_X[i]=CardHolderList_X[i].substring(start+8,close)
 
         start=CardHolderList_X[i].indexOf("@CreateDate/");                                      
         close=CardHolderList_X[i].indexOf("/CreateDate@");
         CardCreateDateList_X[i]=CardHolderList_X[i].substring(start+12,close)
        
         start=CardHolderList_X[i].indexOf("@Comment/");                                      
         close=CardHolderList_X[i].indexOf("/Comment@");
         CardCommentList_X[i]=CardHolderList_X[i].substring(start+9,close)

         start=CardHolderList_X[i].indexOf("@Title/");                                               
         close=CardHolderList_X[i].indexOf("/Title@");
         CardTitleList_X[i]=CardHolderList_X[i].substring(start+7,close)
 
         start=CardHolderList_X[i].indexOf("@Link/");                                                
         close=CardHolderList_X[i].indexOf("/Link@");
         CardLinkNumberList_X[i]=CardHolderList_X[i].substring(start+6,close)
 
     }       
 this.CardPress(1)
 this.CardONSrceen();
}


CardONSrceen() // Tree Arrangement
{
  
// IN //  NewCardNumber, CardHolderList , CardNumberList, CardTitleList, 
//CardLinkNumberList, CardCreateDateList, CardCommenList

cc=0;

title=[]
TempNumber=[]

if(this.state.NowCard==4)
{
  for(var a=1;a<CardNumberList_X.length;a++)
     {      
        CardLinkNumberList_X[this.state.NowCard]==	CardNumberList_X[a];
     }
     a=0;

}

     for(var a=1;a<CardNumberList_X.length;a++)
     {
      	if(CardNumberList_X[this.state.NowCard]==CardLinkNumberList_X[a])
             {
            
               title[cc]=CardTitleList_X[a];
              TempNumber[cc]=CardNumberList_X[a];                     
               cc++;
            }
          
     }
       cc=0;    
}

NewCardCreator(nowTypingInput)
{
  var MasterFileOut;
  var start,close;
  
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
//NewCardNumber, CardHolderList , CardNumberList, CardTitleList, CardLinkNumberList
  //NewCardNumber=NewCardNumber+1;

   start=MasterFileIn.indexOf("#"+0+"/")+3;  
   close=MasterFileIn.indexOf("/"+0+"#");                                                                                                                   start=parseInt(start);     
  MasterFileIn=MasterFileIn.replace("#0/"+MasterFileIn.substring(start,close)+"/0#","#0/"+NewCardNumber+"/0#")  


MasterFileOut=MasterFileIn+ "#"+NewCardNumber+
          "/  @CreateDate/"+date+'-'+month+'-'+year+"/CreateDate@ @Number/"
              +NewCardNumber+"/Number@ @Title/"+this.state.nowTypingInput+"/Title@"+
              "@Link/"+this.state.NowCard+
              "/Link@"+
              " @Comment/"+"\n"+date+'-'+month+'-'+year+"> Created !"+"/Comment@/"+NewCardNumber+"#";

   NewCardNumber++;
  //alert(MasterFileOut)

   AsyncStorage.setItem('userE',MasterFileOut);  
    this.displayData();
  
}

CardUpdator(nowTypingInput,Change)
{
  var MasterFileOut;
  var start,close;
  var updating;

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

if(Change=="Title")
{
   start=CardHolderList_X[this.state.NowCard].indexOf("@"+Change+"/");   
    close=CardHolderList_X[this.state.NowCard].indexOf("/"+Change+"@");                                                                   
    start=parseInt(start);     

    updating=
    CardHolderList_X[this.state.NowCard].replace(CardHolderList_X[this.state.NowCard].substring(start+7,close),
    this.state.nowTypingInput)

    MasterFileOut=MasterFileIn.replace(CardHolderList_X[this.state.NowCard],updating)
    AsyncStorage.setItem('userE',MasterFileOut);  
    this.displayData();
}
if(Change=="Comment")
{
   start=CardHolderList_X[this.state.NowCard].indexOf("@"+Change+"/");   
    close=CardHolderList_X[this.state.NowCard].indexOf("/"+Change+"@");                                                                   
    start=parseInt(start);     


    updating=
    CardHolderList_X[this.state.NowCard].replace(CardHolderList_X[this.state.NowCard].substring(start+9,close),CardHolderList_X[this.state.NowCard].substring(start+9,close)+"\n"+date+"-"+month+"-"+year+" > "+this.state.nowTypingInput);
    
    MasterFileOut=MasterFileIn.replace(CardHolderList_X[this.state.NowCard],updating)
    AsyncStorage.setItem('userE',MasterFileOut);  
    this.displayData();
}
if(Change=="Link")
{
   start=CardHolderList_X[this.state.NowCard].indexOf("@"+Change+"/");   
    close=CardHolderList_X[this.state.NowCard].indexOf("/"+Change+"@");                                                                   
    start=parseInt(start);     

    updating=
    CardHolderList_X[this.state.NowCard].replace(CardHolderList_X[this.state.NowCard].substring(start+6,close),
    3)

    alert(CardTempList_X[this.state.NowCard]+" Moved to Trash..")

 //   MasterFileOut=MasterFileIn.replace(CardHolderList_X[this.state.NowCard],updating)
  //  AsyncStorage.setItem('userE',MasterFileOut);  
    //this.displayData();
}

}
 
render() {
  
 this.CardONSrceen()
 return (
 
<View style={styles.container} >
       <Image style={{
                       width: '100%',
                       marginTop:0,
                       marginLeft:0,
                       marginRight:10,
                       height:'100%',
                       position:'absolute'
                     }}                                                                                            
                       source={require('./background.jpg')}                     
                     /> 

       <View style={styles.header}> 
             <View style={{flexDirection:'row',marginTop:20}}>                                     
                   <TouchableOpacity
                       onPress={(nowTypingInput) =>
                       this.CardPress(CardNumberList_X[CardLinkNumberList_X[this.state.NowCard]])} >
                         <Image style=
                           {{
                             width: 30,
                             marginTop:10,
                             marginLeft:7,
                             marginRight:7,
                             height:20,
                           }}                                                                        
                         source={require('./back.png')}                     
                         /> 
                   </TouchableOpacity>    
                  
                   <Text style={{fontSize: 32, color:'green',fontStyle:'bold',marginLeft:2}} >      
                       {CardTitleList_X[this.state.NowCard]}
                   </Text> 
 
                   <TouchableOpacity onPress={(nowTypingInput) =>
                        this.CardUpdator(nowTypingInput,"Title")} >
                         <Image style={{
                          width: 30,
                          marginTop:5,
                          marginLeft:7,
                          marginRight:7,
                          height:32,
                           }}                                                                        
                         source={require('./edit.png')}                     
                       />          
                    </TouchableOpacity>
                    
                    <Text style={
                     {fontSize: 20, color:'green',fontStyle:'bold',marginRight:'10%', marginTop:10}} >
                     {this.state.dateList[this.state.NowCard]}
                   </Text>               
              </View>             
              
               <Text style={{marginTop:10,fontSize: 18,fontStyle:'bold', color: 'gray'}} >
                 {CardTitleList_X[
                                CardLinkNumberList_X[
                                        CardNumberList_X[
                                                CardLinkNumberList_X[this.state.NowCard]
                                                                ]
                                              ]
                        ]}>
          
                    {CardTitleList_X[CardLinkNumberList_X[this.state.NowCard]]}>

                    {CardTitleList_X[this.state.NowCard]}
               </Text>   
         </View> 
 

         <View style={styles.EditButton}>
             <TextInput
               style={styles.textInput}
               placeholder="Say Here"
               onChangeText={(nowTypingInput) => this.LIVEinput(nowTypingInput)}
               onSubmitEditing={(nowTypingInput) => this.NewCardCreator(nowTypingInput)}
               value={this.state.nowTypingInput}
             />  
 
             <TouchableOpacity onPress={(nowTypingInput) => this.NewCardCreator(nowTypingInput)} >
                 <Image style={{
                       width: 52,
                       marginTop:10,                       
                       marginLeft:1,
                       marginRight:5,
                       height:52,
                           }}                                                                        
                         source={require('./add.png')}                     
                       />          
              </TouchableOpacity>             
         </View>
 
         <View style={styles.EditButton}>
                               
              <TouchableOpacity  onPress={(nowTypingInput) =>
                   this.CardUpdator(nowTypingInput,"Comment")} >
                    <Image style={{
                       width: 35,
                       marginTop:5,
                         marginLeft:7,
                       marginRight:7,
                       height:34,
                           }}                                                                        
                         source={require('./commentadd.png')}                     
                       />          
              </TouchableOpacity> 
                
              <TouchableOpacity onPress={(nowTypingInput) =>
                   this.CardUpdator(nowTypingInput,"Link")} >
                     <Image style={{
                       width: 35,
                       marginTop:5,
                         marginLeft:7,
                       marginRight:7,
                       height:34,
                           }}                                                                        
                         source={require('./move.png')}                     
                       />          
              </TouchableOpacity>
       
              
           
                       <TouchableOpacity onPress={() => this.setModalVisible(true)} >
                 <Image style={{
                       width: 35,
                       marginTop:5,
                         marginLeft:7,
                       marginRight:7,
                       height:34,
                           }}                                                                        
                         source={require('./commentview.png')}                     
                       />          
                           </TouchableOpacity> 
 
 
                <TouchableOpacity onPress={() => this.CardPress(4)} >
                 <Image style={{
                       width: 35,
                       marginTop:5,
                         marginLeft:7,
                       marginRight:7,
                       height:34,
                           }}                                                                        
                         source={require('./search.png')}                     
                       />          
                           </TouchableOpacity>               
                     <TouchableOpacity onPress={() => this.showDatePicker({date: this.state.date})} >
                 <Image style={{
                       width: 35,
                       marginTop:5,
                         marginLeft:7,
                       marginRight:7,
                       height:34,
                           }}                                                                        
                         source={require('./date.png')}                     
                       />          
                           </TouchableOpacity>
                                           
                                     <TouchableOpacity  onPress={(nowTypingInput) =>
                   this.CardUpdator(nowTypingInput,"Link")} >
                 <Image style={{
                       width: 35,
                       marginTop:5,
                         marginLeft:7,
                       marginRight:7,
                       height:34,
                           }}                                                                        
                         source={require('./delete.png')}                     
                       />          
                           </TouchableOpacity>
 
 
                  <Modal                     
                     animationType="slide"
                     transparent={false}
                     visible={this.state.modalVisible}
                     onRequestClose={() => {
                     //alert(this.state.stArray[i]+' has been closed.');
                     this.setModalVisible(false)
                   }}>
                     <Image style={{
                       width: '100%',
                       marginTop:0,
                       marginLeft:0,
                       marginRight:10,
                       height:'100%',
                       position:'absolute'
                     }}                                                                        
                    
                       source={require('./background.jpg')}                     
                     /> 
                         <View style={styles.header}> 
                             <View style={{flexDirection:'row',marginTop:10}}>
                                       <TouchableOpacity onPress={(nowTypingInput) =>
                                           this.setModalVisible(false)} >
                                           <Image style={{
                                                           width: 35,
                                                           marginTop:10,
                                                           marginLeft:7,
                                                           marginRight:7,
                                                           height:20,
                                                         }}                                        
                                               source={require('./back.png')}                     
                                             /> 
                                       </TouchableOpacity>
                                    
                                       <Text style={{
                                         fontSize: 27, color:'green',
                                         fontStyle:'bold',marginLeft:2
                                         }} >                      
                                             {CardTitleList_X[this.state.NowCard]}
                                       </Text> 
                             </View>
              
                             <Text style={{marginTop:10,fontSize: 18,fontStyle:'bold', color: 'gray'}} >
                   {CardTitleList_X[
                               CardLinkNumberList_X[
                                       CardNumberList_X[
                                               CardLinkNumberList_X[this.state.NowCard]
                                                               ]
                                             ]
                       ]}>
 
        
                   {CardTitleList_X[CardLinkNumberList_X[this.state.NowCard]]}>
 
                   {CardTitleList_X[this.state.NowCard]}-[   
 
                   {this.state.totalChilds[this.state.NowCard]} ]
 
               </Text>   
         </View>
                   <Text style={{marginTop:0,fontSize: 20}}  >
                       Comments - {CardCommentList_X[this.state.NowCard]}
                       {console.log(CardCommentList_X)}
                 </Text> 
                 <Text style={{fontSize: 12}}> MasterFile in - {CardHolderList_X[this.state.NowCard]}
   </Text>
      
                 </Modal>
 
         </View>
                  
 
         <View >
<FlatList
   data={title}
    renderItem={({ item, index }) => (
 
   <TouchableOpacity onPress={() => 
   this.CardPress(TempNumber[index])} >
 

       <View style={{
   flex: 1,   
   paddingTop: 10,
   borderBottomWidth:1,   
   padding: 8,
   flexDirection:'row',
   justifyContent:'space-between',
 }} >
 
         <Text style={{fontSize:21 }}>
{title[index]}
       
         </Text>           
         <Text style={{fontSize:21, marginRight:10 }}>
    {TempTotalChilds[index]}        
         </Text>           
 
       </View>
   </TouchableOpacity>
     )}
 />
 
 
</View>
 
  </View>
 
   );
 }
}
 
const styles = StyleSheet.create({
 container: {
   flex: 1,
   paddingTop: 0,
   backgroundColor: '#ecf0f1',
   padding: 0,
 },
 header: {
  
   marginTop:0,
   fontSize: 32,
   fontWeight:'bold',
 
   borderWidth:0,
  height:100,
  width:'100%'
 },
 
 EditButton: {
flexDirection: 'row',
    alignItems: 'center',
   paddingTop: 7,
    justifyContent: 'space-between', //space-between
  
 },
 textInput: {
    height: 47,
   marginTop: 7,
    paddingRight: 5,
    paddingLeft: 10,
    borderColor: 'gray',
   marginBottom:1,
    borderWidth: 1,
    width: '82%',
   fontSize:21,
  },
});
 
//AppRegistry.registerComponent('TodoList', () => TodoList);
AppRegistry.registerComponent('App', () => App);
 

