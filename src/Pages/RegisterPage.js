import React from 'react';
import { FormGroup, Input, Button, Form, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import profile from '../Assets/pp2.png';

const RegisterPage = () => {
    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <img src={`${profile}`} alt='profile img' height='120vh' width='120px' style={{marginTop:'0px'}} />
            </div>
            <div style={{textAlign: 'center', fontSize:'30px', margin:'20px'}}>
                Register
            </div>
            <div className='d-flex justify-content-center' style={{alignItems:'center'}}>
                <Form style={{width : '400px', height: '205px'}}>
                    <FormGroup>
                        <Label for="examplePassword">Enter Email</Label>
                        <Input type="text" name="email" placeholder="Email" autoComplete="on" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Enter Username</Label>
                        <Input type="text" name="username" placeholder="Username" autoComplete="on" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Enter Password</Label>
                        <Input type="password" name="password" placeholder="Password" autoComplete="on" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Confirm Password</Label>
                        <Input type="password" name="confirmPass" placeholder="Confirm Password" autoComplete="on" />
                    </FormGroup>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <Link to='/login'>
                            <Button color='primary' type='submit' style={{borderRadius: '20px', padding: '12px'}}>
                                Register
                            </Button>
                        </Link>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-around', marginTop:'20px', marginBottom:'20px', fontSize:'20px',}}>
                        <Link to='/'>
                            <Button outline color='secondary' type='submit' style={{padding: '7px'}}>
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default RegisterPage;
