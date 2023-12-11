import skeletons from '../skeletons.module.css';
import styles from './SkeletonSquare.module.css';

export interface SkeletonSquareProps {
    className?: string;
    width: string;
    height: string;
}

export const SkeletonSquare = ({className = '', width, height}: SkeletonSquareProps) => {
    const classes = [
        className,
        skeletons.skeletonBackgroundAnimation,
        styles.container,
    ]

    return (
        <div className={classes.join(' ')} style={{width, height}}>
        </div>
    )
}
