import React from 'react';
import {Container, ContainerIcon} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../styles';

export default function Header() {
  return (
    <Container>
      <Icon name="notification-clear-all" size={36} color={colors.darkerBlue} />
      <ContainerIcon>
        <Icon
          name="magnify"
          size={34}
          color={colors.darkerBlue}
          style={{marginRight: 21}}
        />
        <Icon name="inbox" size={32} color={colors.darkerBlue} />
      </ContainerIcon>
    </Container>
  );
}
