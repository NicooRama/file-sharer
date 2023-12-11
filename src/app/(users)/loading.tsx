import {SkeletonSquare} from "@/src/shared/components/skeletons/SkeletonSquare/SkeletonSquare";

export default function Loading() {
    return (
        <div className={'form-frame-margin'}>
            <SkeletonSquare className={'center'} width={'498px'} height={'295px'} />
        </div>
    )
}
