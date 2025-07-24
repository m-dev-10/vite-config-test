import  React  from 'react'
import classes from './Button.module.scss'
import type { TButtonProps } from './Button.types'


export const Button: React.FC<TButtonProps> = ({children, onClick}) => {
	return(
		<button className={classes.button} onClick={onClick}>
	 		{children}
        </button>
	)
}

