import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import { indigo900, indigo800, grey800 } from 'material-ui/styles/colors';

let today = new Date();
let minDate = Number(new Date()) - (24*60*60*1000)*7;

class Calendar extends Component{
    render(){
        return(
            <div style={{height:'calc(100vh - 36px)', width:'600px', paddingTop:20, backgroundColor:grey800}}>
            <Paper style={{zIndex:12, marginLeft:20, marginRight:20, width:'calc(inherit - 40px)'}}>
                <InfiniteCalendar
                    theme={calendarStyle}
                    width={560}
                    height={346}
                    selectedDate={today}
                    disableDays={[0,6]}
                    minDate={minDate}
                    keyboardSupport={true}
                />
            </Paper>
            </div>
        );
    }
}

export default Calendar;

const calendarStyle = {
    textColor: {
        default: '#333',
        active: '#FFF'
    },
    selectionColor: '#559FFF',
    todayColor: '#FFA726',
    weekdayColor: indigo800,
    headerColor: indigo900,
    floatingNav: {
        background: 'rgba(56, 87, 138, 0.94)',
        color: '#FFF',
        chevron: '#FFA726'
    }
};