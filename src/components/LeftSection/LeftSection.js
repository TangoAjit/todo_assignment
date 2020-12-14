import React from 'react';
import CheckBox from '../common/CheckBox/CheckBox';
import { useSelector, useDispatch } from 'react-redux';
import { updateIsSelected } from '../../store/actions/modifyMeteData';
import './LeftSection.css';

const LeftSection = props => {
    const { metaData } = useSelector(store => store.data);
    const dispatch = useDispatch();
    const keys = Object.keys(metaData);
    const checkBoxClickHandler = (key, index) => checked => {
        console.log(key, index, checked);
        dispatch(updateIsSelected(key, index, checked));
    }
    return (
        <React.Fragment>
            {keys && keys.length && keys.map(key => {
                const { title, options } = metaData[key];
                return (
                    <React.Fragment>
                        <h2>{title}</h2>
                        {options && options.length && options.map((option, index) => (
                            <div className="list-container" key={`${option.title}_${index}`} >
                                <CheckBox title={option.title} checked={option.isSelected} onClick={checkBoxClickHandler(key, index)} />
                            </div>
                        ))}
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    )
};

export default LeftSection;
