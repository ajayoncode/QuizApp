import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, AsyncStorage } from 'react-native';
import Item from './Item';
import ModelComponent from './ModelComponent';

let edittedItemKey, editedItemValue;

export default class App extends Component {
	constructor(props) {
		super(props);
		(this.list_values = []),
			(this.state = { list_values_holder: [], input_value_holder: '', modalVisible: false, popupModelType: 'add' });
		this.getData();
	}

	render() {
		return (
			<View style={styles.container}>
				<Text
					style={styles.headerTitle}
					onPress={() => {
						this.props.navigation.navigate('Detail', { name: 'value from ToDo' });
					}}
				>
					My ToDo
				</Text>

				<FlatList
					style={{ width: '100%', marginTop: 10 }}
					data={this.state.list_values_holder}
					extraData={this.state}
					renderItem={({ item }) => (
						<Item
							title={item}
							deleteItem={key => this.deleteItem(key)}
							editItemPopUpModel={(key, editedValue) => this.editItemPopUpModel(key, editedValue)}
							editItem={(key, editedValue) => this.editItem(key, editedValue)}
							editItemCompleteStatus={(key, completeToggleValue) =>
								this.editItemCompleteStatus(key, completeToggleValue)
							}
						/>
					)}
					keyExtractor={item => item.id}
				/>

				<TouchableOpacity
					onPress={() => {
						this.setState({ popupModelType: 'add' });
						this.setModalVisible(true);
					}}
					style={styles.fab}
				>
					<Text style={styles.fabIcon}>+</Text>
				</TouchableOpacity>

				<ModelComponent
					modalVisible={this.state.modalVisible}
					setModalVisible={visible => this.setModalVisible(visible)}
					model_type={this.state.popupModelType}
					addItem={value => this.addItem(value)}
					editItem={newEditedValue => this.editItem(newEditedValue)}
					edittedItemKey={edittedItemKey}
					editedItemValue={editedItemValue}
				/>
			</View>
		);
	}

	deleteItem(key) {
		let index = this.list_values.indexOf(key);
		this.list_values.splice(index, 1);

		this.storeData(this.list_values);
	}

	addItem(value) {
		const obj = {
			id: value,
			title: value,
			isCompleted: false
		};

		this.list_values.push(obj);
		this.storeData(this.list_values);
	}

	editItemPopUpModel(key, editedValue) {
		edittedItemKey = key;
		editedItemValue = editedValue;

		this.setState({ popupModelType: 'edit' });
		this.setModalVisible(true);
	}

	editItem(newEditedValue) {
		let index = this.list_values.indexOf(edittedItemKey);
		this.list_values[index].title = newEditedValue;
		this.storeData(this.list_values);
	}

	editItemCompleteStatus(key, completeToggleValue) {
		let index = this.list_values.indexOf(key);
		this.list_values[index].isCompleted = completeToggleValue;
		this.storeData(this.list_values);
	}

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	storeData = async value => {
		try {
			if (Array.isArray(value) && value.length) {
				await AsyncStorage.setItem('@list_data', JSON.stringify(value));
				this.setState({ list_values_holder: value });
			} else {
				AsyncStorage.clear();
				this.setState({ list_values_holder: '' });
			}

			this.setState({ modalVisible: false });
		} catch (e) {}
	};

	getData = async () => {
		try {
			let listDataFromStorage = await AsyncStorage.getItem('@list_data');
			if (listDataFromStorage !== null) {
				this.list_values = JSON.parse(listDataFromStorage);
				this.setState({ list_values_holder: this.list_values });
			}
		} catch (e) {}
	};
}

const styles = StyleSheet.create({
	headerTitle: {
		width: '100%',
		padding: 10,
		textAlign: 'center',
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'black'
	},
	list_item: {
		fontSize: 16
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eaedf0'
	},
	fab: {
		position: 'absolute',
		width: 56,
		height: 56,
		alignItems: 'center',
		justifyContent: 'center',
		right: 20,
		bottom: 20,
		backgroundColor: '#5b6371',
		borderRadius: 30,
		elevation: 8
	},
	fabIcon: {
		fontSize: 40,
		marginBottom: 4,
		color: 'white'
	}
});
