import styled from 'styled-components/native';
import {colors} from '../../styles';

export const Container = styled.View``;

export const TabsContainer = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const Tabs = styled.View`
  display: flex;
  align-items: stretch;
  padding: 6px 33.2px;
`;

export const TabItem = styled.View`
  height: 74.37px;
  border-radius: 18.59px;
  background: ${colors.white3};
`;

export const TabFile = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 21.25px 5px 0px 12px;
`;

export const TittleFile = styled.Text`
  font-size: 15.93px;
  color: ${colors.darkerBlue};
  font-weight: bold;
`;

export const ContainerFileName = styled.View`
  width: 39.84px;
  height: 39.84px;
  border-radius: 10.49px;
  align-items: center;
  justify-content: center;
`;

export const ContainerFileSize = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`;

export const TextFileSize = styled.Text`
  font-size: 14.6px;
  color: ${colors.darkerBlue};
  margin-left: 3px;
`;

export const TextFileSize2 = styled.Text`
  font-size: 14.6px;
  color: ${colors.darkerBlue};
  margin-left: 5px;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 33.2px 10px 33.2px;
`;

export const TextTitle = styled.Text`
  font-size: 21.25px;
  color: ${colors.darkerBlue};
  font-weight: bold;
`;

export const ContainerTitleIcon = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextTitleIcon = styled.Text`
  font-size: 14.6px;
  margin-right: 9.29px;
  color: ${colors.darkerBlue};
`;

export const ContainerTitleIcon2 = styled.View`
  width: 31.87px;
  height: 31.87px;
  border-radius: 9.29px;
  align-items: center;
  justify-content: center;
  background: ${colors.white2};
`;

export const TextFilename = styled.Text`
  font-size: 10.62px;
  color: ${colors.white};
  font-weight: bold;
`;
