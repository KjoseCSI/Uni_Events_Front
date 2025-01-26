import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { RectButton } from "react-native-gesture-handler";
import { SwipeableImage } from './SwipeableImage';


export function Swipes({ data, currentIndex, handleLike, handlePass,}) {
    


    
    function RightAction() {
        return(
            <RectButton style={styles.container} >
                <SwipeableImage data={data[currentIndex + 1]} ></SwipeableImage>
            </RectButton>
        )
    }

    function LeftAction() {
        return(
            <RectButton style={styles.container} >
                <SwipeableImage data={data[currentIndex + 1]} ></SwipeableImage>
            </RectButton>
        )
    }

  return (
    <ReanimatedSwipeable
    friction={2}
    leftThreshold={40}
    rightThreshold={40}
    renderLeftActions={LeftAction}
    renderRightActions={RightAction}
    onSwipeableOpen={(dir) => {
        if (dir === 'right') {
            handleLike(); // Llamada al método cuando se deslice hacia la derecha
        }else if(dir === 'left'){
            handlePass();
        }
        console.log('open', dir);
      }}
    >
        <SwipeableImage data={data[currentIndex]} ></SwipeableImage>
    </ReanimatedSwipeable>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  })
  