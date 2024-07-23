import BookingDetails from "@/src/components/BookingDetails";

const BookingPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <BookingDetails id={params.id} />
    </div>
  )
}

export default BookingPage;
