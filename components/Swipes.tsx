import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { RectButton } from "react-native-gesture-handler";
import { SwipeableImage } from './SwipeableImage';


export function Swipes({users, currentIndex}) {
    
    function RightAction() {

        return(
            <RectButton style={styles.container} >
                <SwipeableImage user={users[currentIndex + 1]} ></SwipeableImage>
            </RectButton>
        )
    }

    function LeftAction() {
        return(
            <RectButton style={styles.container} >
                <SwipeableImage user={users[currentIndex + 1]} ></SwipeableImage>
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
    >
        <SwipeableImage user={users[currentIndex]} ></SwipeableImage>
    </ReanimatedSwipeable>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  })
  