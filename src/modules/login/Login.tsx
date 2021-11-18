import React from 'react';
import { Button, Col, Form, Image, Input, Row } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginAction } from './LoginSlice';

export interface IFormData {
  account: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const loginState = useAppSelector((state) => state.loginReducer);

  const onLogin = async (values: IFormData) => {
    try {
      await dispatch(loginAction({ account: values.account, password: values.password }));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={'login'}>
      <Row style={{ height: '100vh' }}>
        <Col md={12}>
          <div className={'login__form'}>
            <div className={'login__form__logo'}>
              <Image
                src={'http://3.1.13.10:2028/static/media/vietbulding.9fefff9f.png'}
                preview={false}
                style={{ height: 220, width: 220 }}
              />
            </div>
            <div className={'login__form__wrapper-form'}>
              <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} className={'label-left'} onFinish={onLogin}>
                <Form.Item label={'Tài khoản'} name={'account'}>
                  <Input size={'large'} />
                </Form.Item>
                <Form.Item label={'Mật khẩu'} name={'password'}>
                  <Input.Password
                    size={'large'}
                    iconRender={(visible: any) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6 }}>
                  <Button
                    loading={loginState.loading.loadingLogin}
                    type={'primary'}
                    danger
                    style={{ width: '100%' }}
                    size={'large'}
                    htmlType={'submit'}
                  >
                    Đăng nhập
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
        <Col md={12}>
          <div className={'login__img'}>
            <Image src={'/assets/img/backLogin.png'} preview={false} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
