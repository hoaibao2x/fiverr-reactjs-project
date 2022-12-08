import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoDetailJobAction } from '../../../redux/User/action/getInfoDetailJobAction';
import './info.css'

export default function InfoDetailJob(props) {

    const { infoJob } = useSelector(state => state.InfoDetailJobReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        let { id } = props.match.params
        dispatch(getInfoDetailJobAction(id))
    }, [])

    return (
        <div className='container-fluid'>
            <div className='info-job'>
                <div className='row'>
                    <div className='col-8'>

                    </div>
                    <div className='col-4'>
                        <div className='card'>
                            <div className='card-head'>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item1" role="presentation">
                                        <button className="nav-link" id="basic-tab" data-toggle="tab" data-target="#basic" type="button" role="tab">Basic</button>
                                    </li>
                                    <li className="nav-item1" role="presentation">
                                        <button className="nav-link active" id="standard-tab" data-toggle="tab" data-target="#standard" type="button" role="tab" >Standard</button>
                                    </li>
                                    <li className="nav-item1" role="presentation">
                                        <button className="nav-link" id="premium-tab" data-toggle="tab" data-target="#premium" type="button" role="tab" >Premium</button>
                                    </li>
                                </ul>

                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="standard" role="tabpanel" aria-labelledby="standard-tab">1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
