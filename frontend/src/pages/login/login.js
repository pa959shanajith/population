import React from 'react';
import {Form,Input,Button,Modal} from 'antd';
import  './login.css';
import Service from '../../services/populationService';
import {connect} from 'react-redux';
import {setUserAuth} from '../../redux/settingsactions';

const FormItem = Form.Item;

const Login = (props) => {
    
    const ServiceAPI = new Service()
    const onFinish = values => {
      ServiceAPI.Login({emailId:values.username,password:values.password}).then((res) => {
        if(res.status === 200){
          props.handleAuth(true);
        }
        props.history.push('/home')
      }).catch((err) => {
        if(err.response.status === 401 || err.response.data === "jwt expired"){
          Modal.info({
            title:'Session Expired',
            content:(
              <>
              <p>Sorry your session has been expired, please login again</p>
              </>
            ),
            onOk: () => {props.handleAuth(false);}
          })
          
        }
        console.log(err);
      })
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
      return errorInfo
    };
  
    return (
      <div className="login-page">
        <div className="login-box">
          <div className="illustration-wrapper">
            <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login"/>
          </div>
          <Form
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <p className="form-title">Welcome back</p>
            <p>Login to the Dashboard</p>
            <FormItem
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input autoFocus className="new task" name="username"
                placeholder="Username"
              />
            </FormItem>
  
            <FormItem
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password autoFocus
                className='password'
                name="password"
                placeholder="Password"
              />
            </FormItem>
  
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                LOGIN
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  };


  const mapState = state => {
  }
  
  const mapDispatch = dispatch => ({
    handleAuth : (payload) => {
      dispatch(setUserAuth(payload))
    }
  })

export default connect(mapState,mapDispatch)(Login);