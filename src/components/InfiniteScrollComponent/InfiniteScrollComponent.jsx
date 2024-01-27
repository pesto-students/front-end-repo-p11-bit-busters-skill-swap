import React, { useState, useEffect, useRef, useCallback } from "react";
import { twMerge } from "tailwind-merge";
import Loader from "../Loader/Loader";
import { debounce } from "lodash";

const InfiniteScrollComponent = ({
    fetchMoreData,
    hasMore,
    endMessage,
    children,
    containerClasses,
    isLoading,
    reverse = false,
    scrollRef = window,
}) => {
    const containerRef = useRef(null);

    const checkIfEdgeReached = () => {
        const container = containerRef.current;
        if (!container) return false;

        if (reverse) {
            return scrollRef.scrollTop <= 400;
        } else {
            const rect = container.getBoundingClientRect();
            return rect.bottom <= window.innerHeight;
        }
    };

    const handleScroll = async () => {
        if (checkIfEdgeReached() && !isLoading && hasMore) {
            fetchMoreData();
        }
    };

    const debouncedHandleScroll = useCallback(
        debounce(handleScroll, 200),
        [isLoading, hasMore]
    );
   
    useEffect(() => {
        scrollRef.addEventListener("scroll", debouncedHandleScroll);
        return () => scrollRef.removeEventListener("scroll", debouncedHandleScroll);
    }, [isLoading, hasMore]);

    useEffect(() => {
        debouncedHandleScroll();
    }, [children]);

    return (
        <div className={`flex ${reverse ? "flex-col-reverse" : "flex-col "}`}>
            <div
                className={twMerge(
                    `infinite-scroll-container`,
                    containerClasses
                )}
                ref={containerRef}
            >
                {!hasMore && reverse && endMessage}

                {children}

                {!hasMore && !reverse && endMessage}
            </div>
            <div className={`my-6 ${isLoading ? "" : "hidden"}`}>
                <Loader loading={isLoading} fullPageLoader={false} />
            </div>
        </div>
    );
};

export default InfiniteScrollComponent;
