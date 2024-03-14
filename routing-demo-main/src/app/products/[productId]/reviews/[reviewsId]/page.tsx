type Props = {
    params: {
          productId: string,
          reviewId: string
    }
  }
  
  export default function ReviewsDetails({ params }: Props) {
    return (
          <h1>Details about product {params.productId}
          and Reviews {params.reviewId}</h1>
    )
  }