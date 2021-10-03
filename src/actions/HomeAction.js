import types from './../types';
import axios from 'axios'

export const serverGetHolidays = (data) => {

    let extension = ''

    if (data.month !== "any") {
        extension = extension + `&month=${data.month}`;
    }

    if (data.day !== "any") {
        extension = extension + `&day=${data.day}`;
    }


    return (dispatch) => {

        const headers = {
            "Content-Type": "application/json",
        }

        axios({
            headers,
            url: `https://holidays.abstractapi.com/v1/?api_key=66c1277d4af740409df2ebc09ee2cfad&country=${data.country}&year=${data.year}${extension}`,
            method: 'get'
        }).then((response) => {
                return dispatch({
                    type: types.HOLIDAYS,
                    payload: response.data
                })
        }).catch((err) => {
            return dispatch({
                type: types.FAILED,
                payload: {
                    "sucess": "false",
                    "msg": "Your request failed! Please check your internet and try again",
                }
            })
        })
    }
}