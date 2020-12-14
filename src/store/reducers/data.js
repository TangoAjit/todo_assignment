import { UPDATE_META_DATA } from '../actions/actionTypes';

const init = {
    metaData: {
        portugal: {
            title: 'Portugal',
            options: [
                {
                    title: 'Aasiya Jayavant',
                    isSelected: false
                },
                {
                    title: 'Luvleen Lawrence',
                    isSelected: false
                },
                {
                    title: 'Rey Mibourne',
                    isSelected: false
                },
                {
                    title: 'Cayla Brister',
                    isSelected: false
                },
            ]
        },
        nicaragua: {
            title: 'Nicaragua',
            options: [
                {
                    title: 'Deveedaas Nandi',
                    isSelected: false
                },
                {
                    title: 'Obasey Chidy',
                    isSelected: false
                },
                {
                    title: 'Xenie Dolezelova',
                    isSelected: false
                },
                {
                    title: 'Ezequiel Dengra',
                    isSelected: false
                },
            ]
        },
        marshallIslands: {
            title: 'Marshall Islands',
            options: [
                {
                    title: 'Aaron Almaraz',
                    isSelected: false
                },
                {
                    title: 'Jelena Denisova',
                    isSelected: false
                }
            ]
        },
    }
}

const reducer = (state = init, action) => {
    switch (action.type) {
        case UPDATE_META_DATA:
            return {
                ...state,
                metaData: action.metaData
            };
        default:
            return {
                ...state
            }
    }
};

export default reducer;
