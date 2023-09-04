import { FC, useEffect } from "react";

type CarouselProps = { 
    name: string, 
    listRef: React.RefObject<HTMLUListElement>, 
    children: React.ReactNode 
}

const Carousel: FC<CarouselProps> = ({ name, listRef, children }) => {

    useEffect(() => {
        listRef.current?.scroll({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className={`${name}-carousel`}>
            <button
                className="button button-navigation button-navigation__left"
                onClick={() => {
                    if (listRef.current) {
                        const width = listRef.current.getBoundingClientRect().width;
                        let left = listRef.current.scrollLeft - width;

                        listRef.current.scroll({
                            top: 0,
                            left,
                            behavior: "smooth",
                        });
                    }
                }}
            >
                <img src="icons/regular/caret-left.svg" alt="left arrow" />
            </button>
            {children}
            <button
                className="button button-navigation button-navigation__right"
                onClick={() => {
                    if (listRef.current) {
                        const width = listRef.current.getBoundingClientRect().width;
                        let left = listRef.current.scrollLeft + width;

                        listRef.current.scroll({
                            top: 0,
                            left,
                            behavior: "smooth",
                        });
                    }
                }}
            >
                <img src="icons/regular/caret-right.svg" alt="right arrow" />
            </button>
        </div>
    );
};

export default Carousel;