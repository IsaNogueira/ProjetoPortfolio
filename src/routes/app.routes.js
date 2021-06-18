import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';
import Portfolio from '../pages/CriaçãoPort';
import Test from '../pages/TestCriacao';
import Portfolioo from '../pages/Portfolio';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
    <AppDrawer.Navigator
    drawerStyle={{
     backgroundColor: '#171717'
    }}
    drawerContentOptions={{
        labelStyle:{
            fontWeight: 'bold'
        },
        activeTintColor: '#FFF',
        activeBackgroundColor: '#BA55D3',
        inactiveBackgroundColor: '#000',
        inactiveTintColor: '#DDD',
        itemStyle: {
            marginVertical: 5,
        }
    }}
    >
        <AppDrawer.Screen name="Home" component={Home}/>
        <AppDrawer.Screen name="Registrar" component={New} />
        <AppDrawer.Screen name="Perfil" component={Profile} />
        <AppDrawer.Screen name="To do List" component={Portfolio} />
        <AppDrawer.Screen name="Criação Port" component={Test} />
        <AppDrawer.Screen name="Portfolio" component={Portfolioo} />

    </AppDrawer.Navigator>
    );
}

export default AppRoutes;
