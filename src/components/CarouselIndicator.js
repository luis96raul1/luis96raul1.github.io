import { StatusButton } from "./styleComponents/sliderBootstrap"

export const CarouselIndicator = ({ data, handleCurrentIndex, currentPage }) => {
  return (
    <div className="carousel-indicators">
      {data.map(({ id }) =>
        id === currentPage ?
          <StatusButton key={id} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={id} className="active" aria-current="true" aria-label={`Slide ${id}`}></StatusButton>
          : <StatusButton key={id} onClick={() => handleCurrentIndex(id)} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={id} aria-label={`Slide ${id}`}></StatusButton>
      )}
    </div>
  )
}
