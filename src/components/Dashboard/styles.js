import styled from 'styled-components/native';
import {colors} from '../../styles';

export const Container = styled.View`
  align-items: stretch;
  padding: 5px 33.2px;
`;

export const ContainerInformation = styled.View`
  height: 143.43px;
  border-radius: 18.59px;
  background: ${colors.white3};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const ContainerDescription = styled.View`
  flex-direction: column;
`;

export const TextTitle = styled.Text`
  font-size: 23.9px;
  font-weight: bold;
  margin-bottom: 7.9px;
  color: ${colors.darkerBlue};
`;

export const TextStorage = styled.Text`
  font-size: 15.93px;
  color: ${colors.darkBlue};
  margin-bottom: 14px;
`;

export const ContainerFileType = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerFile = styled.View`
  height: 9.29px;
  width: 9.29px;
  border-radius: 4.64px;
  margin-left: 15px;
`;

export const TextFile = styled.Text`
  font-size: 14.6px;
  color: ${colors.grey};
  margin-left: 6.64px;
`;

export const ContainerStorageSize = styled.View`
  width: 100px;
`;

export const ContainerCircle = styled.View`
  height: 86.72px;
  width: 86.72px;
  border-radius: 43.36px;
  border: 5px solid ${colors.red};
  align-items: center;
  justify-content: center;
`;

export const ContainerCircleText = styled.Text`
  font-size: 21.25px;
  font-weight: bold;
  color: ${colors.darkerBlue};
`;

export const ContainerUserName = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 26.56px;
`;

export const Apresentation = styled.Text`
  font-size: 26.56px;
  color: ${colors.darkerBlue};
`;

export const UserName = styled.Text`
  font-size: 26.56px;
  font-weight: bold;
  color: ${colors.darkerBlue};
`;
