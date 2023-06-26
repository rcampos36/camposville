import { Roboto, Yellowtail, Open_Sans } from "next/font/google"

export const roboto = Roboto({
    subsets: ['cyrillic'],
    weight: ['300', '400', '500', '700']
})
export const yellowtail = Yellowtail({
    subsets: ['latin'],
    weight: '400'
})

export const openSans = Open_Sans({
    subsets: ['cyrillic'],
    weight: '300'
})