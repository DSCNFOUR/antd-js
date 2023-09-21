// FormMemo.js
import React, {useState, useEffect} from 'react';
import {Input, Button, Form, message} from 'antd';
import axios from 'axios';

const FormMemo = ({memo, onCreated, onUpdated})=> {
    const [form] = Form.useForm();
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(()=>{
        if(memo){
            form.getFieldValue({text: memo.txt});
            setIsUpdating(true);
        }
    }, [memo, form]);

    const onFinish = async (values) => {

        try{
            const apiUrl = isUpdating ? `/api/memo/update/${memo.id}`: '/api/memo/create';
            const response = await axios[isUpdating? 'put':'post'](apiUrl, values)
    
            if(isUpdating){
                message.success('Memo updated successfully');
                onUpdated(response.data);
            }else {
                message.success('Memo created successfully')
                onCreated(response.data);
            }
            form.resetFields();
        } catch(error) {
            message.error('Error submitting memo');
            console.error('Error: ', error);
        }
    };

    return (
        <Form form={form} onFinish={onFinish} layout='vertical'>
            <Form.Item name="text" rules={[{required: true, message: 'Please enter memo text'}]}>
                <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item>
                {isUpdating? (<Button type="primary" htmlType="submit">
                    Update
                </Button>) : (<Button type="primary" htmlType="submit">Create</Button>)}
            </Form.Item>
        </Form>
    );
};

export default FormMemo;
