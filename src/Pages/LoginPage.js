import React from 'react';
import { FormGroup, Input, Button, Form, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import profile from '../Assets/pp2.png';

const LoginPage = () => {
    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <img src={`${profile}`} alt='profile img' height='120px' width='120px' style={{marginTop: '80px'}} />
            </div>
            <div className='d-flex justify-content-center' style={{alignItems:'center'}}>
                <Form style={{width : '400px', height: '205px'}}>
                    <FormGroup>
                        <Label for="examplePassword">Enter Password</Label>
                        <Input type="password" name="password" placeholder="Password" autoComplete="on" />
                    </FormGroup>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <Link to='/'>
                            <Button color='primary' type='submit' style={{borderRadius: '50px', padding: '12px'}}>
                                Login
                            </Button>
                        </Link>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-around', marginTop:'20px'}}>
                        <Link to='/'>
                            Back To Home
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;
