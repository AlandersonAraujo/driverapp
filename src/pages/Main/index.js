import React from 'react';
import {Container} from './styles';
import Header from '../../components/Header';
import Tab from '../../components/Tab';
import List from '../../components/List';
import Dashboard from '../../components/Dashboard';

export default function Main() {
  return (
    <Container>
      <Header />
      <Dashboard />
      <Tab />
      <List />
    </Container>
  );
}
