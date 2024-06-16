import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Accordion from './accordian';
import Slider from '@react-native-community/slider';

const SearchForm = () => {
    const [propertyType, setPropertyType] = useState(1); // 1: Buy, 2: Rent, 3: Lease
    const [cityName, setCityName] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const handlePropertyTypeChange = (type) => {
        setPropertyType(type);
        // Fetch property categories based on the selected property type
        // Implement AJAX request to fetch categories from the server
    };

    const handleCityNameChange = (text) => {
        setCityName(text);
        // Fetch search results based on the entered city name
        // Implement AJAX request to fetch search results from the server
    };

    const handleSearchResultClick = (type, value) => {
        // Handle click on search result
        // Redirect to appropriate screen or update state accordingly
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Property Type */}
                <View style={styles.propertyTypeContainer}>
                    <TouchableOpacity
                        style={[styles.propertyTypeButton, propertyType === 1 && styles.selectedPropertyTypeButton]}
                        onPress={() => handlePropertyTypeChange(1)}>
                        <Text>Buy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.propertyTypeButton, propertyType === 2 && styles.selectedPropertyTypeButton]}
                        onPress={() => handlePropertyTypeChange(2)}>
                        <Text>Rent</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.propertyTypeButton, propertyType === 3 && styles.selectedPropertyTypeButton]}
                        onPress={() => handlePropertyTypeChange(3)}>
                        <Text>Lease</Text>
                    </TouchableOpacity>
                </View>
                
                <Accordion />
                
                <Slider
                    style={{ width: "100%", height: 40 }}
                    minimumValue={0}
                    maximumValue={10000}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="red"
                    onValueChange={(value) => setCurrentPage(value)}
                    step={200}
                />
                
                <Text testID="testTextId" style={styles.title}>
                    {currentPage}
                </Text>
                
                {/* City Name */}
                <TextInput
                    style={styles.cityInput}
                    placeholder="Search by city locality pincode..."
                    value={cityName}
                    onChangeText={handleCityNameChange}
                />

                {/* Search Results */}
                {searchResults.length > 0 && (
                    <View style={styles.searchResultsContainer}>
                        {searchResults.map((result, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.searchResultItem}
                                onPress={() => handleSearchResultClick(result.type, result.value)}>
                                <Text>{result.value}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}

                {/* Apply Filter Button */}
                <TouchableOpacity style={styles.applyFilterButton}>
                    <Text style={styles.applyFilterButtonText}>Apply Filter</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#FFFF',
    },
    propertyTypeContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    propertyTypeButton: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#00c0ff',
        borderRadius: 18,
        marginRight: 20,
    },
    selectedPropertyTypeButton: {
        backgroundColor: '#E3EEFF',
        borderColor: '#0D3BFF',
        color: '#0D3BFF',
    },
    cityInput: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginBottom: 20,
    },
    searchResultsContainer: {
        marginBottom: 20,
    },
    searchResultItem: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
    },
    applyFilterButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    applyFilterButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default SearchForm;
