
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	FlatList,
	AsyncStorage,
	Button,
	TextInput,
	Keyboard,
	Platform,
  TouchableOpacity
} from 'react-native';


const isAndroid = Platform.OS == 'android';
const viewPadding = 10;

export default class TodoList extends Component {
	state = {
		tasks: [],
    trash:[],
		text: '',
    ajey:''
	};

	changeTextHandler = text => {
		this.setState({ text: text });

    if(text=="all")
     {
      alert(this.state.tasks.length)

    	this.setState(
				prevState => {
					let tasks = prevState.tasks.slice();
					return {
						tasks: tasks,
						text: ''
					};
				},
				() => Tasks.save(this.state.tasks) //#?? no effect
			);
    }
  }
	addTask = () => {
		let notEmpty = this.state.text.trim().length > 0; // showing series length

		if (notEmpty) {
			this.setState(
				prevState => {
					let { tasks, text } = prevState;

					return {
						tasks: tasks.concat({ key: tasks.length, text: text }), ///////////yha change kerna hai

						text: ''
					};
				},
				() => Tasks.save(this.state.tasks) //#?? no effect
			);
		}
	};

	addTaskTrash = (j) => {
		let notEmpty = this.state.text.trim().length > 0; // showing series length

		 {
			this.setState(
				prevState => {
					let { trash, text } = prevState;

					return {
						trash: trash.concat({ key: trash.length, text: this.state.tasks[j].text }), ///////////yha change kerna hai

						text: ''
					};
				},
				() => Trash.save(this.state.trash) //#?? no effect
			);
		}
	};
	deleteTask = i => {
		this.setState(
			prevState => {
				let tasks = prevState.tasks.slice();

			tasks.splice(i, 1)
         
        // this.addTaskTrash(i);
			
      	return { tasks: tasks };
			},
			() => Tasks.save(this.state.tasks)
		);
	};

	EditTask = i => {
		console.log(this.state);
		let notEmpty = this.state.tasks.length > 0; // showing series length
		
     if(!notEmpty) 
     {alert("Enter something")}
    
     	if (notEmpty) {
			this.setState(
				prevState => {
					let tasks = prevState.tasks.slice();

					tasks[i] = { key: i, text: this.state.text };

					return {
						tasks: tasks,

						text: this.state.tasks[i].text
            					};
				},
				() => Tasks.save(this.state.tasks) //#?? no effect
			);
		}
   
	};
	componentDidMount() {
		Keyboard.addListener(isAndroid ? 'keyboardDidShow' : 'keyboardWillShow', e =>
			this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
		);

		Keyboard.addListener(isAndroid ? 'keyboardDidHide' : 'keyboardWillHide', () =>
			this.setState({ viewPadding: viewPadding })
		);

		Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
	}

ajay(p){
  console.log(this.state.tasks[p].text)

}

cards()
{
  return
  {
    
        
  }
}

	render() {
		return (
			<View style={[styles.container, { paddingBottom: this.state.viewPadding }]}>
				
  
<FlatList
					style={styles.list}
					data={this.state.tasks}
					renderItem={({ item, index }) => (
				<View>
            <TouchableOpacity onPress={this.ajay(index)}>
							<View style={styles.listItemCont}>
								<Button title="Edit" onPress={() => this.EditTask(index)} />
								<Text style={styles.listItem}>{item.text}</Text>
          
								<View style={styles.listItemCont}>

									<Button title="X" onPress={() => this.deleteTask(index)} />
								</View>
							</View>
   </TouchableOpacity>
							<View style={styles.hr} />
						</View>
					)}
				/>
        
			      <TextInput
					style={styles.textInput }
					onChangeText={this.changeTextHandler}
					onSubmitEditing={this.addTask}
					value={this.state.text}
					placeholder="Add Tasks"
					returnKeyType="done"
					returnKeyLabel="done"
				/>
      
      
      </View>
		);
	}
}

let Tasks = {
	convertToArrayOfObject(tasks, callback) {
		return callback(tasks ? tasks.split('||').map((task, i) => ({ key: i, text: task })) : []);
	},
	convertToStringWithSeparators(tasks) {
		return tasks.map(task => task.text).join('||');
	},
	all(callback) {
		return AsyncStorage.getItem('TASKS', (err, tasks) => this.convertToArrayOfObject(tasks, callback));
	},
	save(tasks) {
		AsyncStorage.setItem('TASKS', this.convertToStringWithSeparators(tasks));
	}
};


let Trash = {
	convertToArrayOfObject(tasks, callback) {
		return callback(tasks ? tasks.split('||').map((task, i) => ({ key: i, text: task })) : []);
	},
	convertToStringWithSeparators(tasks) {
		return tasks.map(task => task.text).join('||');
	},
	all(callback) {
		return AsyncStorage.getItem('TASKS', (err, tasks) => this.convertToArrayOfObject(tasks, callback));
	},
	save(tasks) {
		AsyncStorage.setItem('TASKS', this.convertToStringWithSeparators(tasks));
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		padding: viewPadding,
		paddingTop: 20
	},
	list: {
		width: '100%'
	},
	listItem: {
		paddingTop: 2,
		paddingBottom: 2,
		fontSize: 18
	},
	hr: {
		height: 1,
		backgroundColor: 'grey'
	},
	listItemCont: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between' //space-between
	},

	textInput: {
		height: 40,
		paddingRight: 10,
		paddingLeft: 10,
		borderColor: 'gray',
		borderWidth: isAndroid ? 0 : 1,
		width: '100%'
	}
});


