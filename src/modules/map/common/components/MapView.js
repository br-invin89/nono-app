import React from 'react'
import MapView from 'react-native-maps'
import { View, Image } from 'react-native'
import { W, H } from '~/common/constants'

export default class CustomMapView extends React.Component {
  render() {
    const { children } = this.props
    const { currentLocation } = this.props
    let region = {}
    if (currentLocation) {
      region = {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    }

    return (
      <View 
        style={{
          position: 'absolute', left: 0, top: 0,
          width: W, height: H, zIndex: 10
        }}
      >
        { currentLocation && 
        <>
          <MapView 
            style={{
              width: '100%', height: '100%'
            }}
            region={region}
            showsUserLocation={true}
            // mapType={Platform.OS == "android" ? "none" : "standard"}
            showsMyLocationButton={true}
            followsUserLocation={true}
            showsCompass={true}
            showsTraffic={true}
            rotateEnabled={true}
            loadingEnabled={true}
            pitchEnabled={true}
          >
            { this.renderMarkers() }
            { this.renderCurrentLocationMarker() }
          </MapView>
          { children && children }
        </>
        }
      </View>      
    )
  }
  renderMarkers() {
    const { placesOnMap } = this.props

    return (
      <>
        {placesOnMap.map((place, i) => (
          <MapView.Marker key={i} title={place.name} coordinate={place.coords}>
            {place.isOpened ?
            <Image source={require('~/common/assets/images/png/pin-open.png')} 
              style={{
                width: 40, height: 40
              }}
            />
            :
            <Image source={require('~/common/assets/images/png/pin-close.png')} 
              style={{
                width: 40, height: 40
              }}
            />
            }            
          </MapView.Marker>
        ))}
      </>
    )
  }

  renderCurrentLocationMarker() {
    const { currentLocation } = this.props    

    return (
      <>
        <MapView.Marker key='my-location' coordinate={currentLocation.coords}>
          <Image source={require('~/common/assets/images/png/currentLocation.png')}
            style={{
              width: 150, height: 150
            }}
          />
        </MapView.Marker>
      </>
    )
  }
}
