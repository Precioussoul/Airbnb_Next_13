import prisma from "@/app/libs/prismadb"
import {IListingQueryParams} from "../types"

export default async function getListings(params: IListingQueryParams) {
  try {
    const {
      userId,
      roomCount,
      bathroomCount,
      guestCount,
      locationValue,
      startDate,
      endDate,
      category,
    } = params

    let query: any = {}

    if (userId) {
      query.userId = userId
    }
    if (category) {
      query.category = category
    }
    if (roomCount) {
      query.roomCount = {
        gte: +roomCount,
      }
    }
    if (guestCount) {
      query.guestCount = {
        gte: +guestCount,
      }
    }
    if (bathroomCount) {
      query.bathroomCount = {
        gte: +bathroomCount,
      }
    }
    if (locationValue) {
      query.locationValue = locationValue
    }
    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                endDate: {gte: startDate},
                startDate: {lte: startDate},
              },
              {
                startDate: {lte: endDate},
                endDate: {gte: endDate},
              },
            ],
          },
        },
      }
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    })

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }))

    return safeListings
  } catch (err: any) {
    throw new Error("something went wrong")
  }
}
