import {SkeletonSquare} from "@/src/shared/components/skeletons/SkeletonSquare/SkeletonSquare";

export default function Loading() {
    return (
        <div>
            <SkeletonSquare width={'100%'} height={'400px'} />
        </div>
    )
}
