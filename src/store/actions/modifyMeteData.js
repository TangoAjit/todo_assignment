import { UPDATE_META_DATA } from './actionTypes';
import lodash from 'lodash';

const updateMetaDataAction = metaData => ({
    type: UPDATE_META_DATA,
    metaData
})

export const updateIsSelected = (key, index, checked) => (dispatch, getState) => {
    const { data: { metaData } } = getState();
    const updatedMetaData = lodash.cloneDeep(metaData);
    updatedMetaData[key].options[index].isSelected = checked;
    dispatch(updateMetaDataAction(updatedMetaData));
};
