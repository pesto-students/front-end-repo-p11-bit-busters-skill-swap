import React, { useState, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import Loader from "../Loader/Loader";

const InfiniteScrollComponent = ({
    fetchMoreData,
    hasMore,
    endMessage,
    children,
    containerClasses,
    isLoading,
}) => {
    const containerRef = useRef(null);

    const checkIfBottomReached = () => {
        const container = containerRef.current;
        if (!container) return false;

        const rect = container.getBoundingClientRect();
        return rect.bottom <= window.innerHeight;
    };

    const handleScroll = async () => {
        if (checkIfBottomReached() && !isLoading && hasMore) {
            fetchMoreData();
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isLoading, hasMore]);

    useEffect(() => {
        handleScroll();
    }, [children]);

    return (
        <>
            <div
                className={twMerge(
                    `infinite-scroll-container`,
                    containerClasses
                )}
                ref={containerRef}
            >
                {children}

                {!hasMore && endMessage}
            </div>
            <div className="my-6">
                <Loader loading={isLoading} fullPageLoader={false} />
            </div>
        </>
    );
};

export default InfiniteScrollComponent;
