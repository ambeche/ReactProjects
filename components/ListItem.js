import React from 'react';
import PropTypes from 'prop-types';
import {ListItem as ListContainer, Thumbnail, Text, Left, Body, Right, Button} from "native-base";

const mediaURL= "http://media.mw.metropolia.fi/wbma/uploads/";

const ListItem = (props) => {
    return (
        <ListContainer thumbnail>
            <Left>
                <Thumbnail square source={{ uri: mediaURL + props.item.thumbnails.w160 }} />
            </Left>
            <Body>
                <Text>{props.item.title}</Text>
                <Text note numberOfLines={1}>{props.item.description}</Text>
            </Body>
            <Right>
                <Button info onPress={()=>{props.navigation.push('Single', {
                    file: props.item.filename,
                    title: props.item.title,
                    description: props.item.description,
                });
                }} title='VIEW'>
                    <Text>View</Text>
                </Button>
            </Right>
        </ListContainer>
    );
};

ListItem.propTypes = {
    item: PropTypes.object,
    navigation: PropTypes.object,
};

export default ListItem;
