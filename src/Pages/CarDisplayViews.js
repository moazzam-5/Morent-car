import { useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";
import { getCarArray } from "../Helpers/CarsProvider";
import { CatalogueCard } from "../Components/Cards/Cards";
import "./CarDisplay.css"

export function ScrollDisplay(){
    const ref = useRef(null);
    const { onMouseDown } = useDraggableScroll(ref);
    return (
        <section className="flex flex-col gap-4 max-w-[72rem]">
          <div className="flex flex-row justify-between">
            <p className="text-light">Popular Cars</p>
            <a href="#" className="fw-semibold">
              View All
            </a>
          </div>
          <div
            onMouseDown={onMouseDown}
            ref={ref}
            className="scrollable flex flex-row gap-6 overflow-scroll scroll"
          >
            {getCarArray(4).map((car, index) => (
              <CatalogueCard car={car} key={index} />
            ))}
          </div>
        </section>
    )
}