import React, {useEffect, useState} from 'react';
import {
  Container,
  TabsContainer,
  Tabs,
  TabItem,
  TabHeader,
  TittleProject,
  ContainerIcon,
  ContainerFooter,
  TextFooter,
  TextFooter2,
  ContainerTitle,
  TextTitle,
  ContainerTitleIcon,
  TextTitleIcon,
  ContainerTitleIcon2,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../styles';

export default function Tab() {
  const [dados, setdados] = useState([
    {
      id: 1,
      title: 'Design Shift',
      color: colors.red,
      colorSub: colors.pink,
      amount: 10,
    },
    {
      id: 2,
      title: 'Health Care',
      color: colors.lightBlue,
      colorSub: colors.lighterBlue,
      amount: 12,
    },
    {
      id: 3,
      title: 'Food App',
      color: colors.yellow,
      colorSub: colors.lightYellow,
      amount: 16,
    },
  ]);

  return (
    <Container>
      <ContainerTitle>
        <TextTitle>Folders</TextTitle>
        <ContainerTitleIcon>
          <TextTitleIcon>View All</TextTitleIcon>
          <ContainerTitleIcon2>
            <Icon name="chevron-right" size={20} color={colors.darkerBlue} />
          </ContainerTitleIcon2>
        </ContainerTitleIcon>
      </ContainerTitle>
      <TabsContainer>
        {dados.map(item => (
          <Tabs>
            <TabItem key={item.id} style={{backgroundColor: item.color}}>
              <TabHeader>
                <ContainerIcon style={{backgroundColor: item.colorSub}}>
                  <Icon name="folder" size={25} color={colors.white} />
                </ContainerIcon>
                <Icon name="dots-vertical" size={28} color={colors.white} />
              </TabHeader>
              <TittleProject>{item.title}</TittleProject>
              <ContainerFooter>
                <Icon name="folder-outline" size={15} color={colors.white} />
                <TextFooter>{item.amount}</TextFooter>
                <TextFooter2>Folder</TextFooter2>
              </ContainerFooter>
            </TabItem>
          </Tabs>
        ))}
      </TabsContainer>
    </Container>
  );
}
