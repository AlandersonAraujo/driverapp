import React, {useEffect, useState} from 'react';
import {
  Container,
  TabsContainer,
  Tabs,
  TabItem,
  TabFile,
  TittleFile,
  ContainerFileName,
  ContainerFileSize,
  TextFileSize,
  TextFileSize2,
  ContainerTitle,
  TextTitle,
  ContainerTitleIcon,
  TextTitleIcon,
  ContainerTitleIcon2,
  TextFilename,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../styles';

export default function List() {
  const [dados, setdados] = useState([
    {
      id: 1,
      title: 'Design Thinking Process',
      color: colors.red,
      fileName: 'PDF',
      fileSize: 2,
      fileType: 'MB',
    },
    {
      id: 2,
      title: 'Design Thinking Process',
      color: colors.yellow,
      fileName: 'PNG',
      fileSize: 5,
      fileType: 'MB',
    },
    {
      id: 3,
      title: 'Design Thinking Process',
      color: colors.green,
      fileName: 'ZIP',
      fileSize: 16,
      fileType: 'GB',
    },
  ]);

  return (
    <Container>
      <ContainerTitle>
        <TextTitle>Recents Files</TextTitle>
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
            <TabItem key={item.id}>
              <TabFile>
                <ContainerFileName style={{backgroundColor: item.color}}>
                  <TextFilename>{item.fileName}</TextFilename>
                </ContainerFileName>
                <TittleFile>{item.title}</TittleFile>
                <ContainerFileSize>
                  <TextFileSize>{item.fileSize}</TextFileSize>
                  <TextFileSize2>{item.fileType}</TextFileSize2>
                </ContainerFileSize>
                <Icon
                  name="dots-vertical"
                  size={28}
                  color={colors.darkerBlue}
                />
              </TabFile>
            </TabItem>
          </Tabs>
        ))}
      </TabsContainer>
    </Container>
  );
}
