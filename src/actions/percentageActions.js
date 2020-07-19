import {ActionConstants} from "../constants"

export const updatePercentage = () => ({
  type: ActionConstants.UPDATE_PERCENTAGE
})

export const startUpload = () => ({
  type: ActionConstants.START_UPLOAD
})

export const pauseUpload = () => ({
  type: ActionConstants.PAUSE_UPLOAD
})

export const stopUpload = () => ({
  type: ActionConstants.STOP_UPLOAD
})

export const resetUpload = () => ({
  type: ActionConstants.RESET_UPLOAD
})

export const uploadComplete = () => ({
  type: ActionConstants.COMPLETE_UPLOAD
})