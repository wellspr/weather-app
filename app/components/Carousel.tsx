import { FC, useEffect } from "react";
import Regular from "~/icons/RegularIcons";

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
                <Regular icon="caret-left"/>
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
                <Regular icon="caret-right" />
            </button>
        </div>
    );
};

export default Carousel;