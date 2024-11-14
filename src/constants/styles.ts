import { SIZE, STATUS, TYPE } from "@/constants/enum";

// Button
export const buttonSizeClasses = {
  [SIZE.SMALL]: 'w-12 h-12 text-xs',
  [SIZE.MEDIUM]: 'md:text-lg md:w-btn-md w-28 text-xs',
  [SIZE.LARGE]: 'w-full text-base'
};

export const buttonTypeClasses = {
  [TYPE.PRIMARY]: 'bg-gradient-primary text-white font-bold',
  [TYPE.SECOND]: 'bg-white text-purple-500 font-bold',
  [TYPE.THIRD]:
    'w-10 p-2 bg-gray-200 rounded-full drop-shadow-lg text-lg focus:bg-second focus:text-white focus:font-bold'
};

// Input
export const inputTypeClasses = {
  [TYPE.PRIMARY]: 'focus:border focus:border-green-300 h-12',
  [TYPE.SECOND]: 'border border-gray-400 h-12',
  [TYPE.THIRD]: `border border-gray-400 resize-none`
};

// Table
export const cellSizeClasses = {
  [SIZE.SMALL]: 'lg:w-tb-sm',
  [SIZE.MEDIUM]: 'lg:w-tb-md',
  [SIZE.LARGE]: 'lg:w-tb-xl'
};

// Toast
export const toastStyles = {
  [STATUS.SUCCESS]: 'bg-green-500',
  [STATUS.ERROR]: 'bg-red-500',
  [STATUS.WARNING]: 'bg-yellow-500'
};