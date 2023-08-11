import style from './Container.module.scss'
import cn from 'classnames'
export const Container = ({className, children}) => {
	return <div className={cn(style.container, className)}>
		{children}
	</div>
}