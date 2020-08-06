import React, { useRef, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  TextInput,
  FlatList,
  Platform,
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { KeyboardSpacer } from "react-native-keyboard-spacer";

export default function App() {
  const randomNum = useRef(Math.random()).current;
  const [state, setState] = useState();

  function MyHeader() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
          Hello React Native
        </Text>
        <ActivityIndicator
          size="large"
          color="#c1262c"
          style={{ marginBottom: 30 }}
        />
        <TextInput
          style={{
            padding: 20,
            borderWidth: 2,
            borderColor: "green",
          }}
          onChangeText={(text) => setState(text)}
          value={state}
          placeholder="What do you think of this app? ^.^"
        />
      </View>
    );
  }

  function MyFooter() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            borderWidth: 2,
            borderColor: "black",
            padding: 20,
            marginBottom: 30,
          }}
        >
          <Text>Hello again!</Text>
        </View>
        <Button
          onPress={() => Alert.alert("Learning RN is so easy")}
          title="Learn More"
          color="#c1262c"
        />

        <View style={{ marginTop: 30 }}>
          <Button
            onPress={() => Alert.alert(`${state}`)}
            title="Have my thoughts!"
            color="#c1262c"
          />
        </View>

        <TextInput
          style={{
            padding: 20,
            borderWidth: 2,
            borderColor: "green",
          }}
          onChangeText={(text) => setState(text)}
          value={state}
          placeholder="What do you think of this app? ^.^"
        />
      </View>
    );
  }
  /* {[0, 1, 2, 3, 4].map((i) => {
        return (
          <TouchableOpacity
            key={i}
            onPress={() =>
              Alert.alert(`This is image ${Math.ceil(randomNum + i)}`)
            }
          >
            <Image
              source={{
                uri: `https://picsum.photos/500/300?random=${randomNum + i}`,
              }}
              style={{ width: "100%", height: 160, marginBottom: 30 }}
            />
          </TouchableOpacity>
        );
      })} */

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      enableAutomaticScroll={Platform.OS === "ios"}
    >
      <FlatList
        style={{
          flex: 1,
          marginHorizontal: 40,
          marginVertical: 60,
        }}
        ListHeaderComponent={MyHeader()}
        keyExtractor={(item) => item.toString() /* or -> String(item) */}
        data={[0, 1, 2, 3, 4]}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  `This is image ${
                    Math.ceil(randomNum + item) /* or -> item + 1*/
                  }`
                )
              }
            >
              <Image
                source={{
                  uri: `https://picsum.photos/500/300?random=${
                    randomNum + item
                  }`,
                }}
                style={{ width: "100%", height: 160, marginBottom: 30 }}
              />
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={MyFooter()}
      />
    </KeyboardAwareScrollView>
  );
}
