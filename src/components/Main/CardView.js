import React, {Component} from 'react'
import {
    FlatList,
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import Ionicons from '../../../node_modules/@expo/vector-icons/Ionicons';

export default class CardView extends Component {

  constructor(props) {
      super(props)
  }

  _keyExtractor = (item, index) => item.key

  _renderItem = (item) => {
    return(
        <View key={item.item.index} style={styles.cardContainer} >
            <View style={styles.infoContainer}>
                <Text key={item.item.index} style={styles.title}>{item.item.title}</Text>
                <Text key={item.item.index} style={styles.voterCount}>{item.item.voters.length} UPVOTES</Text>
                <View style={styles.voterImageContainer}>
                    <Image key={item.item.index} style= {styles.voterImage}/>
                    <Image key={item.item.index} style= {styles.voterImage}/>
                    <Image key={item.item.index} style= {styles.voterImage}/>
                </View>
            </View>
            <TouchableOpacity key={item.item.index} style={styles.voteButtonContainer} onPress={()=>alert('yes')}>
                <Ionicons name="ios-hand-outline" size={32} color="white"/>

            </TouchableOpacity>
        </View>
    )  
  }

  render() {
    return(
        <View>
            <FlatList
                data={this.props.data}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: 'white',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 0.1,
  
    },
    infoContainer: {
        flexDirection: 'column',
        padding: 15,
    },
    title: {
        fontFamily: 'System',
        fontWeight: '600',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
        shadowColor: 'gray',

    },
    voterCount: {
        fontFamily: 'System',
        marginBottom: 10,
        color: 'gray'
    },
    voterImageContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginTop: 10,
    },
    voterImage: {
        height: 30,
        width: 30,
        backgroundColor: 'gray',
        borderRadius: 16,
        borderColor: 'white',
        marginRight: 8,
    },
    voteButtonContainer:{
        height: '100%',
        backgroundColor: 'black',
        marginLeft: 'auto',
        width: 75,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: 'white',
        fontFamily: 'System',
        fontWeight: 'bold',
        fontSize: 26,
    }
})