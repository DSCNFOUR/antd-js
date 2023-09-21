// services/GetDailySentence.js
import React, {useState, useEffect} from 'react';
import AxiosInstance from './AxiosInstance';

const GetDailySentence = () => {
    const [sentence, setSentence] = useState([]);

    useEffect(()=> {
        AxiosInstance.get().then((response) =>{
            setSentence(response.data);
        }).catch((error)=>{
            console.error('Error when fetching daily sentence:', error);
        });
    }, []);
    // useEffect(() => {
    //     const fetchSentence = async () => {
    //         try {
    //             const response = await fetch('https://apiv3.shanbay.com/weapps/dailyquote/quote');
    //             if(!response.ok){
    //                 throw new Error('No response')
    //             }
    //             const data = await response.json();
    //             setSentence(data);
    //         } catch(error){
    //             console.error('Error fetching daily sentence:', error);
    //         }
    //     };
    //     fetchSentence();
    // }, []);

    return (
        <div>
            <ul>
                <li>{sentence.translation}</li>
                <li>{sentence.content}</li>
            </ul>
        </div>
    );
    console.log(sentence);
};

export default GetDailySentence;