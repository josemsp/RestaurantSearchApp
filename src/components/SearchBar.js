import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = ({term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <AntDesign style={styles.iconStyle} name="search1" />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        //marginHorizontal: 15
        margin: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;