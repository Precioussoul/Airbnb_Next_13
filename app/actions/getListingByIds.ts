import {IParams} from "../types"
import prisma from "../libs/prismadb"

export default async function getListingId(params: IParams) {
  const {listingId} = params

  try {
    const listing = await prisma.listings.findUnique({
      where: {
        id: listingId,
      },
      include: {
        user: true,
      },
    })

    if (!listing) {
      return null
    }

    return {
      ...listing,
      createdAt: listing.createdAt.toISOString(),
      user: {
        ...listing.user,
        createdAt: listing.user.createdAt.toISOString(),
        updatedAt: listing.user.updatedAt.toISOString(),
        emailVerified: listing.user.emailVerified?.toISOString() || null,
      },
    }
  } catch (error: any) {
    throw new Error(error)
  }
}
