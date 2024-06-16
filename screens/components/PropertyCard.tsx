import React, { useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Animated } from 'react-native';
import AutoCarousel from './AutoCarousel';

const PropertyCard = ({ product }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const data = [
    'https://thumbs.dreamstime.com/b/rangoli-22927378.jpg',
    'https://thumbs.dreamstime.com/b/rangoli-22927388.jpg',
    'https://thumbs.dreamstime.com/b/rangoli-22927288.jpg',
    'https://thumbs.dreamstime.com/b/rangoli-22920288.jpg',
  ];

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [rotateAnim]);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['-45deg', '-45deg'], // Maintain -45deg rotation, but you can animate between angles if needed
  });

  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={styles.imageBox}>
          <Animated.View style={[styles.animatedContainer, { transform: [{ rotate: rotation }] }]}>
            <Text style={styles.text}>Buy</Text>
          </Animated.View>
          <AutoCarousel data={data} interval={3000} />
          <View style={styles.priceContainer}>
            <View style={styles.priceInfo}>
              <Text style={styles.priceLabel}>PRICE</Text>
              <Text style={styles.price}>₹10000</Text>
              <Text style={styles.totalAreaLabel}>Total Area</Text>
              <Text style={styles.totalArea}>20000 Gunta {product?.areatype}</Text>
            </View>
            <View style={styles.pricePerContainer}>
              <Text style={styles.pricePer}>₹10000/Gunta</Text>
            </View>
          </View>
        </View>
        <View style={styles.lowerContent}>
          <View style={styles.tags}>
            <Text style={styles.tag}>Industrial</Text>
            <Text style={styles.tag}>Land</Text>
          </View>
          <TouchableOpacity onPress={() => console.log('Navigate to detail', product?.id)}>
            <Text style={styles.title}>Property Name</Text>
          </TouchableOpacity>
          <Text style={styles.location}>
            Highcourt, GDG, Bangalore, Karnataka-560001
          </Text>
          <View style={styles.propertyPrice}>
            <TouchableOpacity style={styles.moreDetailButton} onPress={() => console.log('Navigate to detail', product?.id)}>
              <Text style={styles.moreDetail}>More Detail</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.callButtonWrapper}>
            <TouchableOpacity style={styles.callButton} onPress={() => console.log('Call', product?.id)}>
              <Text style={styles.callButtonText}>Call</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  imageBox: {
    position: 'relative',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: 'absolute',
    bottom: 2,
    left: 2,
    right: 2,

    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 5,
  },
  priceInfo: {
    flex: 1,
  },
  pricePerContainer: {
    justifyContent: 'center',
  },
  priceLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  price: {
    color: '#fff',
    fontSize: 16,
  },
  pricePer: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalAreaLabel: {
    color: '#fff',
    marginTop: 5,
  },
  totalArea: {
    color: '#fff',
  },
  lowerContent: {
    padding: 15,
  },
  tags: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tag: {
    marginRight: 10,
    fontWeight: 'bold',
    color: '#333',
    fontSize: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  location: {
    color: '#666',
    marginBottom: 15,
    fontSize: 14,
  },
  propertyPrice: {
    marginTop: 10,
  },
  moreDetailButton: {
    backgroundColor: '#00c0ff',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  moreDetail: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  callButtonWrapper: {
    marginTop: 10,
  },
  callButton: {
    backgroundColor: '#000',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  callButtonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  animatedContainer: {
    position: 'absolute',
    left: -67,
    top: 25,
    backgroundColor: '#00c0ff',
    paddingHorizontal: 80,
    zIndex: 9,
  },
  text: {
    fontSize: 13,
    lineHeight: 23,
    color: '#ffffff',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default PropertyCard;
