import React, { Component } from "react";
import {GBCard11} from './components/GBCard11';
import { GbNavAside } from "./components/gbNavAside";
import { NewsSVG } from './svgs/NewsSVG';
import { WidgetsSVG } from './svgs/WidgetsSVG';
import { BookMarksSVG } from './svgs/BookMarksSVG';
import { CalendarSVG } from './svgs/CalendarSVG';

class App extends Component {
  render() {
    return <GBCard11
             backgroundImg='https://images.unsplash.com/photo-1526924286897-37e06ab5ac13?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=e92851db78f744fbd211bace07046f63' 
             title='Astronauts could land on Red Planet by 2039' 
             source='Globuzzer' 
             time ='10h ago'
             category = 'Nature'/>
  }
}

export default App;


/*
<GbNavAside
      links={
        [{
          'txt': 'news',
          'icon': <NewsSVG classes='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50' />
        },
        {
          'txt': 'widgets',
          'icon': <WidgetsSVG classes='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50' />
        },
        {
          'txt': 'bookmarks',
          'icon': <BookMarksSVG classes='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50' />
        },
        {
          'txt': 'calendar',
          'icon': <CalendarSVG classes='nav-aside-icon gb-icon-medium gb-icon-white-opacity-50' />
        },]
      }
      userName='Thomas Schneider'
      userImageUrl='https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=6dd9dc582c677370d110940fda65b992'
    />
    */