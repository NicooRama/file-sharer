import {SkeletonSquare} from "@/src/shared/components/skeletons/SkeletonSquare/SkeletonSquare";
import styles from "@/src/shared/components/FormFrame/FormFrame.module.css";

export default function Loading() {
    return (
        <div className={styles.formFrameCard}>
            <SkeletonSquare className={'center'} width={'auto'} height={'218px'} />
        </div>
    )
}
