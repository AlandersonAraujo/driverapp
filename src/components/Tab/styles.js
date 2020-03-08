import styled from 'styled-components/native';
import {colors} from '../../styles';

export const Container = styled.View``;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {padding: 10, paddingRight: 20},
  showsHorizontalScrollIndicator: false,
})``;

export const Tabs = styled.View`
  display: flex;
  width: 171.33px;
  margin-right: 16px;
`;

export const TabItem = styled.View`
  width: 171.33px;
  height: 193.9px;
  border-radius: 26.56px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const TabHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 21.25px 5px 0px 12px;
`;

export const TittleProject = styled.Text`
  font-size: 18.59px;
  color: ${colors.white};
  font-weight: bold;
  margin-left: 18.59px;
`;

export const ContainerIcon = styled.View`
  width: 37.18px;
  height: 37.18px;
  border-radius: 10.35px;
  align-items: center;
  justify-content: center;
`;

export const ContainerFooter = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 21.25px;
  margin-left: 18.59px;
`;

export const TextFooter = styled.Text`
  font-size: 14.6px;
  color: ${colors.white};
  margin-left: 3px;
`;

export const TextFooter2 = styled.Text`
  font-size: 14.6px;
  color: ${colors.white};
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
