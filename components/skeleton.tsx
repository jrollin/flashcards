const Skeleton = () => {
    return (
        <>
            <div className="animate-pulse">
                <div>
                    <div className="space-y-4">
                        <div className="bg-gray-300 rounded-full w-28 h-28"></div>
                        <div className="flex justify-between">
                            <div className="w-1/4 h-10 bg-gray-300 rounded"></div>
                            <div className="w-24 h-10 bg-gray-300 rounded"></div>
                        </div>
                        <div className="w-24 h-10 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skeleton;
