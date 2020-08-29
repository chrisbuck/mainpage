import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByPrice, setStartDate, setEndDate } from '../actions/filters';

class HoldingsListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    };
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input className="text-input" placeholder="Search coins" type="text" value={this.props.filters.text} onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                        }} />
                    </div>
                    <div className="input-group__item">
                        <select className="select" value={this.props.filters.sortBy} onChange={(e) => {
                            if( e.target.value === 'date' ){
                                this.props.dispatch(sortByDate());
                            } else if( e.target.value === 'price' ){
                                this.props.dispatch(sortByPrice());
                            }
                        }}>
                            <option value="date">Date</option>
                            <option value="price">Price</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker 
                            startDate={this.props.filters.startDate}
                            startDateId={'startDate'}
                            endDate={this.props.filters.endDate}
                            endDateId={'endDate'}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                </div>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return{
        filters: state.filters
    };
}

export default connect(mapStateToProps)(HoldingsListFilters);