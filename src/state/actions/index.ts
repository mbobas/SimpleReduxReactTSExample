import { ActionType } from '../action-types/index'

interface DepositAction {
    type: ActionType.DEPOSIT
    payload: number
}

interface WithdrawAction {
    type: ActionType.WITHDRAW
    payload: number
}

interface BankruptAction {
    type: ActionType.BANKRUPT
}

interface Add1 {
    type: ActionType.ADD_1
}

interface Multiple {
    type: ActionType.MULTIPLE
    payload: number
}

interface Toggle {
    type: ActionType.TOGGLE
}

export type Action = DepositAction | WithdrawAction | BankruptAction | Add1 | Multiple | Toggle