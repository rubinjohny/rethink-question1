import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {apiUrl, apiHeader} from '../utils.js'
import {Intro} from '../Components/Intro'
import {SearchField} from '../Components/SearchField'
import {DataSection} from '../Components/DataSection'
import { notification } from 'antd'

import "../App.css"

const makeRequest = () => {
    let call;
    return url => {
        if (call) {
            call.cancel("Only one request allowed at a time.");
        }
        call = axios.CancelToken.source();
        return axios.get(url, {
            cancelToken: call.token,
            headers: apiHeader
        });
    };
};
const get = makeRequest();

export const Dashboard = () => {
    

    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");

    const search = async () => {
        try {
            const res = await get(`${apiUrl}?term=${searchText}`);
            setData(res.data?.body)
        } catch (err) {
            if (axios.isCancel(err)) {
                console.error(`Cancelling previous request: ${err.message}`);
            }
            else{
                notification.error({
                    message: err.message,
                    description: "Too many requests! There is a daily limit for this Api",
                });
            }
            
        }
    }

    useEffect(() => {
        if(searchText !== "")
            search(searchText);

        return () => {}
    }, [searchText])

    return(
        <div className="dashboard">
            <div className="content">
                <Intro />
                <SearchField onSearch={setSearchText} />
                <DataSection data={data}/>
            </div>
        </div>
    )
}
