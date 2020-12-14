import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateIsSelected } from '../../store/actions/modifyMeteData';
import CrossButton from '../common/CrossButton.js/CrossButton';
import './RightSection.css';

const RightSection = prop => {
    const { metaData } = useSelector(store => store.data);
    const dispatch = useDispatch();
    const keys = Object.keys(metaData);
    const removeButtonClickHandler = (key, index) => () => {
        dispatch(updateIsSelected(key, index, false));
    }
    let isAnyValueSeletected = false;
    return (
        <React.Fragment>
            {Array.isArray(keys) && keys.length && keys.map(key => {
                const details = metaData[key];
                const hasSelected = details.options.some(option => option.isSelected);
                if(!isAnyValueSeletected) {
                    isAnyValueSeletected = hasSelected;
                }
                return (
                    <React.Fragment>
                        {hasSelected && (
                            <React.Fragment>
                                <h2>{details.title}</h2>
                                {details.options.map((option, index) => (
                                    <React.Fragment>
                                        {option.isSelected && (
                                            <div className="selected-item-container">
                                                <div>{option.title}</div>
                                                <div>
                                                    <CrossButton onClick={removeButtonClickHandler(key, index)} />
                                                </div>
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </React.Fragment>
                        )}
                    </React.Fragment>
                )
            })}
            {!isAnyValueSeletected && (
                <div className="no_value_container">
                    <div>No Value selected</div>
                </div>
            )}
        </React.Fragment>
    )
};

export default RightSection;
