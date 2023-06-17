"use client"
import {useRouter} from "next/navigation"
import {useCallback, useState} from "react"
import Container from "../Container"
import Heading from "../Heading"
import {ReservationClientProps} from "@/app/types"
import axios from "axios"
import {toast} from "react-hot-toast"
import ListingCard from "../listings/ListingCard"

const ReservationsClient = ({
  reservations,
  currentUser,
}: ReservationClientProps) => {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState("")

  const onCancel = useCallback((id: string) => {
    setDeletingId(id)

    axios
      .delete(`/api/reservations/${id}`)
      .then(() => {
        toast.success("reservation cancelled")
      })
      .catch(() => {
        toast.error("Something went wrong")
      })
      .finally(() => {
        setDeletingId("")
      })
  }, [])

  return (
    <Container>
      <Heading title='Reservations' subtitle='Bookings on your properties' />
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        {reservations?.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel='Cancel guest reservation'
          />
        ))}
      </div>
    </Container>
  )
}

export default ReservationsClient