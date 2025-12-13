import Timeline from './Timeline.vue'
import TimelineItem from './TimelineItem.vue'
import { withInstall } from '@/utils/install'

export const LinTimeline = withInstall(Timeline, 'LinTimeline')
export const LinTimelineItem = withInstall(TimelineItem, 'LinTimelineItem')

export default LinTimeline

export type { TimelineItemProps } from './timeline-types'
