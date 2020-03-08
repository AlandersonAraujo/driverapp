import React from 'react';
import {
  Container,
  ContainerInformation,
  ContainerDescription,
  TextTitle,
  TextStorage,
  ContainerFileType,
  ContainerFile,
  TextFile,
  ContainerStorageSize,
  ContainerCircle,
  ContainerCircleText,
  ContainerUserName,
  Apresentation,
  UserName,
} from './styles';
import {colors} from '../../styles';

export default function Dashboard() {
  return (
    <Container>
      <ContainerUserName>
        <Apresentation>Hello, </Apresentation>
        <UserName>Alanderson!</UserName>
      </ContainerUserName>
      <ContainerInformation>
        <ContainerStorageSize>
          <ContainerCircle>
            <ContainerCircleText>73%</ContainerCircleText>
          </ContainerCircle>
        </ContainerStorageSize>
        <ContainerDescription>
          <TextTitle>Internal Storage</TextTitle>
          <TextStorage>27 GB of 100 GB Used</TextStorage>
          <ContainerFileType>
            <ContainerFile
              style={{backgroundColor: colors.lightBlue, marginLeft: 0}}
            />
            <TextFile>Photos</TextFile>
            <ContainerFile style={{backgroundColor: colors.yellow}} />
            <TextFile>Project</TextFile>
            <ContainerFile style={{backgroundColor: colors.red}} />
            <TextFile>Files</TextFile>
          </ContainerFileType>
        </ContainerDescription>
      </ContainerInformation>
    </Container>
  );
}
