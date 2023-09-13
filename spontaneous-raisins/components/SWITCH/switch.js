import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native'


const Switch1 = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
   <Switch
   
        trackColor={{false: '#ff0000', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#ff0000' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
  )
}

export default Switch1;