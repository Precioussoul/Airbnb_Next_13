import {Listings, Reservation, User} from "@prisma/client"
import {IconType} from "react-icons/lib"

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string
  updatedAt: string
  emailVerified: string | null
}

export type AvatarProps = {
  src?: string | null | undefined
}

export type CategoryBoxProps = {
  label: string
  icon: IconType
  description?: string
  selected?: boolean
}

export type CategoryInputProps = {
  icon: IconType
  label: string
  selected?: boolean
  onClick: (s: string) => void
}

export type CountrySelectvalueProps = {
  flag: string
  label: string
  latlng: string[] | number[]
  region: string
  value: string
}

export type CountrySelectProps = {
  value: CountrySelectvalueProps
  onChange: (value: CountrySelectvalueProps) => void
}

export type MapProps = {
  center: number[]
}

export type CounterProps = {
  title: string
  subtitle: string
  value: number
  onChange: (value: number) => void
}

export type ImageUploadProps = {
  onChange: (value: string) => void
  value: string
}

export type EmptyState = {
  title?: string
  subtitle?: string
  showReset?: boolean
}

export type ListingCardProps = {
  data: Listings
  reservations?: Reservation
  onAction?: (id: string) => void
  disabled?: boolean
  actionLabel?: string
  actionId?: string
  currentUser: SafeUser | null
}
export type HeartButtonProps = {
  listingId?: string
  currentUser?: SafeUser | null
}
export type IParams = {
  listingId?: string
}
