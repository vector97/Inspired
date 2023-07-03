import cn from 'classnames';
import s from './Container.module.scss';

export const Container = ({ children, className }) => (
  <div className={cn(s.container, className)}>{children}</div>
)
