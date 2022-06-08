import React from 'react';

const Filter = (props, val) => {
    const filtredItem = props.data.filter(item => item.title == val)
    
}
 
export default Filter;