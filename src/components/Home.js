import React from 'react';
import { Card, Space, Col, Row } from 'antd';
import GetDailySentence from '../services/GetDailySentence';

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
                        <Row>
                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                                Support Center
                            </Col>

                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                                LS-1 SJ, L2-2 ZY
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                                Backend
                            </Col>

                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                                DK
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                                DWP
                            </Col>

                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                                ZM
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                                CBA
                            </Col>

                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                                QYJ
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                            </Col>

                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                            </Col>
                        </Row>
                    </Card>

                    <Card title="Daily Sentence" >
                        <GetDailySentence/>
                    </Card>

                    <Card title="Memo" >
                        <p>今年我们公司体检卡不是实体卡，是电子卡。请大家按预约说明用身份证实名绑定认证预约即可去体检。</p>
                    </Card>
                </Space>

                <Space direction="vertical">
                <Card title={Today} >
                        <Row>
                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                                Support Center
                            </Col>

                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                                LS-1 SJ, L2-2 ZY
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                                Backend
                            </Col>

                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                                DK
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                                DWP
                            </Col>

                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                                ZM
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                                CBA
                            </Col>

                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                                QYJ
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                            </Col>

                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                            </Col>
                        </Row>
                    </Card>

                    <Card title="Daily Sentence" >
                        <GetDailySentence />
                    </Card>

                    <Card title="Memo" >
                        <p>今年我们公司体检卡不是实体卡，是电子卡。请大家按预约说明用身份证实名绑定认证预约即可去体检。</p>
                    </Card>
                </Space>
            </Space>
        </div>
    );
};


export default Home;