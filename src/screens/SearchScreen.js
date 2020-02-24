import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/people/1', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            }).catch(error => console.log('error=',error));

            setResults(response.data.businesses);
        } catch (err) {
            console.log('err=', err);
            setErrorMessage('Something went wrong');
        }
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found: {results.length}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;
