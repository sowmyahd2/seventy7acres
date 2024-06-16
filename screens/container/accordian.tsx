import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

const Accordion = () => {
    const [panels, setPanels] = useState([
        { id: 1, title: 'Residentail', content: 'Content for Panel 1 goes here...', isVisible: true },
        { id: 2, title: 'commerical', content: 'Content for Panel 2 goes here...', isVisible: true },
        { id: 3, title: 'Project', content: 'Content for Panel 2 goes here...', isVisible: true },
        // Add more panels as needed
    ]);

    const togglePanel = (id) => {
        setPanels((prevPanels) => {
            return prevPanels.map(panel => {
                if (panel.id === id) {
                    return { ...panel, isVisible: !panel.isVisible };
                }
                return panel;
            });
        });
    };

    const renderPanel = ({ item }) => (
        <View>
            <TouchableOpacity style={styles.panelHeader} onPress={() => togglePanel(item.id)}>
                <Text style={styles.panelHeaderText}>{item.title}</Text>
                <Text>{item.isVisible ? '-' : '+'}</Text>
            </TouchableOpacity>
            {item.isVisible && (
                <View >
                    <View style={styles.panelContent}>
                    <TouchableOpacity
                        
                        >
                        <Text style={styles.textcss}>Buy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        
                        >
                        <Text style={styles.textcss}>Buy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        
                        >
                        <Text style={styles.textcss}>Buy</Text>
                    </TouchableOpacity>
                </View>
                </View>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={panels}
                renderItem={renderPanel}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        padding: 20,
    },
    textcss:{
        borderWidth: 1,
borderColor:"#ebecf0",
backgroundColor: '#fff',
padding: 10,
color:"#42526e",
fontSize:14,
fontWeight:400,
marginRight:10,
width:100  ,
textAlign:"center"  

    },
    panelHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        padding: 10,
        marginBottom: 10,
    },
    panelHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
       
    },
    panelContent: {
       flexDirection:"row",
        padding: 10,
       
    },
};

export default Accordion;
