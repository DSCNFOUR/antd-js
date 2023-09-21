// components/Home.js
import React from 'react';
import { Card, Space, Col, Row } from 'antd';
import GetDailySentence from '../services/GetDailySentence';
import TableDuty from './TableDuty';
import TableVacationPlan from './TableVacationPlan';
import TableBusinessTrip from './TableBusinessTrip';
import CarouselPictureSharing from './CarouselPictureSharing';
import FormMemo from './FormMemo';

const DateObj = new Date();
const Month = DateObj.getUTCMonth() + 1;
const Day = DateObj.getUTCDate();
const Today = Day + ' ' + Month + ' On Duty'


const Home = () => {
    return (
        <div>
            <Space>
                <Space direction="vertical">
                    <Card title={Today} >
                        <TableDuty/>
                    </Card>

                    <Card title="Daily Sentence" >
                        <GetDailySentence/>
                    </Card>

                    <Card title="Memo" >
                        <FormMemo />
                    </Card>
                </Space>

                <Space direction="vertical" >
                    <Card title='Vacation Plan'>
                        <TableVacationPlan/>
                    </Card>

                    <Card title="Business Trip" >
                        <TableBusinessTrip />
                    </Card>

                    <Card title="Picture Sharing" >
                        <div style={{width: '300px', height:'200px'}} >
                            <CarouselPictureSharing/>
                        </div>
                    </Card>
                </Space>
            </Space>
        </div>
    );
};


export default Home;