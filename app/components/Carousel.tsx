import { FC } from "react";

const Carousel: FC<{ id: string, listRef: React.RefObject<HTMLUListElement>, children: React.ReactNode }> = ({ id, listRef, children }) => {
    return (
        <div className={`${id}-carousel`}>
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