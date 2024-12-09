import React, { useState } from 'react'
import { useNavigate } from "react-router";
import { Card, Form } from 'react-bootstrap'

export default function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({});
    const handleChange = ({ target: { name, value } }) => {
        console.log(name, value)
        setForm({ ...form, [name]: value })
    }

    const login = () => {
        if (form.userName === "jams" && form.password === "12345") {
            navigate("/homepage");
        }
    }
    return (
        <div className='d-flex justify-content-center'>
            {/* <pre>{JSON.stringify(form, null, 4)}</pre> */}
            <Card >
                <Form>
                    <Form.Label htmlFor="userName">User Name</Form.Label>
                    <Form.Control
                        type="password"
                        id="userName"
                        name='userName'
                        aria-describedby="passwordHelpBlock"
                        onChange={handleChange}

                    />
                    <br />
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="password"
                        name='password'
                        onChange={handleChange}
                        aria-describedby="passwordHelpBlock"
                    />
                    <Form.Control
                        type="button"
                        value={'Login'}
                        onClick={login}
                        aria-describedby="passwordHelpBlock"
                    />
                </Form>
            </Card>
        </div>
    )
}
