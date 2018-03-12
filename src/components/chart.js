import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'

export default (props) => {
    
    function average(data) {
        let total = data.reduce(function(a, b) {
            return a + b;
        });
        return Math.round(total/data.length);
    }
        return(
            <div>
                <Sparklines height={120} width={180} data={props.data}>
                    <SparklinesLine color={props.color} />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <div>
                    {average(props.data)} {props.units}
                </div>
            </div>
        );
}