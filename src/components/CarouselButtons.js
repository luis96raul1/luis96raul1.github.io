
export const CarouselButtons = ({ data, dispatch }) => {

  const handlePreviousPage = () => {
    dispatch({ type: 'previous', payload: data.length });
  }
  const handleNextPage = () => {
    dispatch({ type: 'next', payload: data.length });
  }
  return (
    <>
      <button onClick={handlePreviousPage} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button onClick={handleNextPage} className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </>
  )
}
