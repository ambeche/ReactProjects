import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import PropTypes from 'prop-types';

const mediaURL= "http://media.mw.metropolia.fi/wbma/uploads/"
const Single = (props) => {
  console.log(props.filename);
  const { navigation } = props;
  const fili = navigation.getParam('file', 'not found');
  console.log(fili);
  return (
    <Container>
      <Card>

        <CardItem cardBody>
              <Image source={{uri: mediaURL + fili}} style={{
                height: 320,
                marginLeft:10,
                marginRight:10,
                 width: null,
                  flex: 1}}/>
            </CardItem>

            <CardItem>
              <Left>

                  <Icon active name="image" />

                  <Body>
                  <Text >
                    {JSON.stringify(navigation.getParam('title', 'not found'))}
                  </Text>
                  <Text>
                  {JSON.stringify(navigation.getParam('description', 'not found'))}
                  </Text>
                  </Body>
                  </Left>
            </CardItem>


      </Card>
    </Container>
  );
};



Single.propTypes = {
  style: PropTypes.object,
};

export default Single;
