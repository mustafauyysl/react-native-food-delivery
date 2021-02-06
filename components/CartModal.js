import React, {Component} from 'react';
import {
  View,
  Modal,
  FlatList,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../redux/actions/cart';
import CartProductContainer from './CartProductContainer';
import Colors from '../constants/colors';
import RedButton from './RedButton';

class CartModal extends Component {
  renderItem = (item) => {
    return (
      <CartProductContainer
        title={item.item.product.title}
        price={item.item.product.price}
        amount={item.item.quantity}
        img={item.item.product.img}
        onPress={() => this.props.actions.removeFromCart(item.item)}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          visible={this.props.isVisible}
          transparent={true}
          animationType="slide">
          <View style={styles.modal}>
            <TouchableHighlight
              style={styles.closeButton}
              onPress={this.props.onPress}
              underlayColor="transparent">
              <Text style={styles.closeButtonTitle}>x</Text>
            </TouchableHighlight>
            <View style={styles.innerModal}>
              <FlatList
                style={styles.list}
                horizontal={true}
                data={this.props.cart}
                keyExtractor={(item) => item.id}
                renderItem={(item) => this.renderItem(item)}
              />
              <RedButton
                title="Sepete Devam Et"
                onPress={this.props.navigation}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  list: {
    width: '100%',
    padding: 10,
  },
  innerModal: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 200,
    paddingVertical: 20,
  },
  closeButton: {
    borderColor: Colors.primary,
    borderWidth: 2,
    height: 40,
    width: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 210,
  },
  closeButtonTitle: {
    fontSize: 25,
    color: Colors.primary,
  },
});

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
