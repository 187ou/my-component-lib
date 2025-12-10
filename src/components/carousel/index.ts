// src/components/carousel/index.ts
import Carousel from './Carousel.vue'
import { withInstall } from '@/utils/install'

export const LinCarousel = withInstall(Carousel, 'LinCarousel')
export default LinCarousel

export type { CarouselProps, CarouselEmits, CarouselItem } from './carousel-types'

