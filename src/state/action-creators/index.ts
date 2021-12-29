import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
} 

export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
} 

export const bankrupt = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BANKRUPT
        })
    }
} 

export const add1 = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_1
        })
    }
} 

export const multiple = (number: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.MULTIPLE,
            payload: number
        })
    }
} 

export const onToggle = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.TOGGLE,
        })
    }
} 

