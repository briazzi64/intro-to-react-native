import { useState, useEffect } from 'react';
import { StyleSheet ,Text, View, Button, Image} from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [faceIsSmiling, setFaceIsSmiling] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  async function takePicture() {
    if(camera) {
      const data = await camera.takePictureAsync(null)
      setImage(data.uri);
    }
  }

  function handleFacesDetected({ faces }) {
    if (!faces.length) {
      setFaceIsSmiling(false);
      return;
    }

    const allFacesSmiling = faces.every(face => face.smilingProbability > 0.8);
    setFaceIsSmiling(allFacesSmiling);
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
  return (
   <View style={{ flex: 1}}>
    <View style={styles.imageContainer}>
      <Camera 
        ref={ref => setCamera(ref)}
        style={styles.fixedRatio} 
        type={type}
        ratio={'1:1'}
        onFacesDetected={handleFacesDetected}
        faceDetectorSettings={{
          mode: FaceDetector.FaceDetectorMode.fast,
          detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
          runClassifications: FaceDetector.FaceDetectorClassifications.all,
          minDetectionInterval: 100,
          tracking: true,
        }} />
    </View>
    <View style={styles.buttonContainer}>
      <Button
        title="Flip Image"
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}>
      </Button>
      <Button disabled={!faceIsSmiling} title={faceIsSmiling ? "Take Picture" : "All Faces in View Must be Smiling"} onPress={() => takePicture()} />
    </View>
    <View style={styles.imageContainer}>
      {image && <Image source={{uri: image}} style={{flex:1}}/>}
    </View>
   </View>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  fixedRatio:{
    flex: 1,
    aspectRatio: 1
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10
  }
})