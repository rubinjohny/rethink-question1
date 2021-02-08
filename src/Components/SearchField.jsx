import React from 'react'
import { Input } from 'antd';
            


export const SearchField = ({onSearch}) => {

    return(
        <div className="search-container">
            <Input 
                placeholder="Input any text to search for Dad Jokes" 
                onChange={e => onSearch(e.target.value)}
                style={{width:"70%"}}
            />
        </div>
    )
}