import { StatusButton } from "./styleComponents/sliderBootstrap"

interface CarouselIndicatorProps {
  data: { id: number }[];
  handleCurrentIndex: (id: number) => void;
  currentPage: number;
}

export const CarouselIndicator = ({ data, handleCurrentIndex, currentPage }: CarouselIndicatorProps) => {
  return (
    <div className="carousel-indicators">
      {data.map(({ id }) =>
        id === currentPage ?
          <StatusButton key={id} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={String(id)} className="active" aria-current="true" aria-label={`Slide ${id}`}></StatusButton>
          : <StatusButton key={id} onClick={() => handleCurrentIndex(id)} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={String(id)} aria-label={`Slide ${id}`}></StatusButton>
      )}
    </div>
  )
}
