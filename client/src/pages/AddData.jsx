import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function AddData() {
    const navigate=useNavigate()
    const [data, setdata] = useState({})

    const formSubmit = (e) => {
        axios.post('http://localhost:3001/api/add',data).then((result) => {
            console.log(result)
            if(!result){
                navigate('/add')
            }else{
                navigate('/')                
            }
        }).catch((err)=>{
            console.log(err)
        })
        e.preventDefault()
    }
    return (
        <>
            <Navbar />
            <div className="container formContainer p-5 w-50  ">
                <div className="row">
                    <div className="col-sm-12 text-white fs-5">
                        <div className="title text-center fs-3">
                            <span className=''>ADD DATA</span>
                        </div>
                        <form encType='multipart/form-data' onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Student
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={(e) => { setdata({ ...data, student: e.target.value }) }}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Mark
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={(e) => { setdata({ ...data, mark: e.target.value }) }}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Attendence
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder='attendence in percentage (%)'
                                    onChange={(e) => { setdata({ ...data, attendence: e.target.value }) }}
                                />
                            </div>
                            <div className="subBtn d-flex justify-content-center">
                                <button type="submit" className="btn mt-3  w-100 submitBtn">
                                    Submit
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
