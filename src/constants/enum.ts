export enum TYPE {
  PRIMARY = 'primary',
  SECOND = 'second',
  THIRD = 'third',
  FILE = 'file',
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  COMMENT = 'comment',
  CONTACT = 'contact'
}

export enum SIZE {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export enum TAG {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  SPAN = 'span'
}

export enum FONT_SIZE {
  LARGE = 'text-heading',
  MEDIUM = 'text-4xl',
  SMALL = 'text-2xl',
  X_SMALL = 'lg:text-lg text-sm',
  MIMI = 'text-sm'
}

export enum FONT_WEIGHT {
  THIN = 'thin',
  LIGHT = 'light',
  NORMAL = 'normal',
  MEDIUM = 'medium',
  SEMIBOLD = 'semibold',
  BOLD = 'bold'
}

export enum CELL {
  TH = 'th',
  TD = 'td'
}

export enum CURRENT {
  USER = 'user',
  PROFILE = 'profile'
}

export enum GENDER {
  MALE = '0',
  FEMALE = '1',
  OTHER = '2'
}

export enum KEY {
  USER = 'currentUser'
}

export enum STATUS {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning'
}

export enum TIME_STATUS {
  STALE_TIME = 1000 * 60 * 60, // milliseconds * seconds * minutes = 1 hour
  COOKIE_TIME = 60 * 60 * 24 * 2 // seconds * minutes * hour * day
}