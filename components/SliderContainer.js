import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Colors from '../constants/colors';

class SliderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2019/06/Blog-banner-1030x538.png',
        'https://static.vecteezy.com/system/resources/thumbnails/000/662/900/small/burger_banner.jpg',
        'https://s3.envato.com/files/200040760/preview.jpg',
      ],
    };
  }

  render() {
    return (
      <View style={styles.carousel}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={200}
          dotColor={Colors.primary}
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          autoplay={true}
          resizeMethod={'resize'}
          resizeMode={'cover'}
          paginationBoxStyle={{
            position: 'absolute',
            bottom: 0,
            padding: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: 'rgba(128, 128, 128, 0.92)',
          }}
          ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
          circleLoop
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
export default SliderContainer;
