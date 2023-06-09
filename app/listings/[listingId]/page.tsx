import getCurrentUser from "@/app/actions/getCurrentUser"
import getListingId from "@/app/actions/getListingByIds"
import getReservations from "@/app/actions/getReservations"
import ClientOnly from "@/app/components/ClientOnly"
import EmptyState from "@/app/components/EmptyState"
import ListingClient from "@/app/components/listings/ListingClient"
import {IParams} from "@/app/types"

const ListingPage = async ({params}: {params: IParams}) => {
  const listing = await getListingId(params)
  const currentUser = await getCurrentUser()
  const reservations = await getReservations(params)

  if (!listing) {
    return <EmptyState />
  }

  return (
    <div>
      <ClientOnly>
        <ListingClient
          listing={listing}
          currentUser={currentUser}
          reservations={reservations}
        />
      </ClientOnly>
    </div>
  )
}

export default ListingPage
