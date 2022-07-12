import React, {useRef, useState} from 'react';

import { styles } from './style';
import { ChatTeardropDots } from 'phosphor-react-native';
import { theme } from '../../theme';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC, TouchableOpacity } from 'react-native-gesture-handler';
import { Options } from '../Options';
import { Form } from '../Form'
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Sucess } from '../Sucess';
export type FeedbackType = keyof typeof feedbackTypes; 


 function Widget() {
   const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
   const [feedbackSent, setFeedbackSent] = useState(false);
  const bottomSheetRef =  useRef<BottomSheet>(null); 
  function handleOpen() {
    bottomSheetRef.current?.expand();
  }
   function handleREstartFeedback() {
     setFeedbackType(null);
     setFeedbackSent(false);
   }
   function handleFeedbackSent(){
     setFeedbackSent(true);
   }
  return (
    <>
    <TouchableOpacity 
        style={styles.button}
        onPress={handleOpen}
>
    <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
    
    />
    </TouchableOpacity>

    <BottomSheet
    ref={bottomSheetRef}
    snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}

    >
     {
          feedbackSent ?
          <Sucess onSendAnotherFeedback={handleREstartFeedback}/>
            :
        <>
          {
        feedbackType ?
          <Form
          feedbackType={feedbackType}
          onFeedbackCanceled={handleREstartFeedback}
          onFeedbackSent={handleFeedbackSent}
          />
          :
          <Options
                    onFeedbackTypeChanged={setFeedbackType}
 
          />
          }
     
            </>
          }
          
    </BottomSheet>
    </>
  );
}
export default gestureHandlerRootHOC(Widget);

