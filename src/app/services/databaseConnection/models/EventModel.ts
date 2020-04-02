export interface EventModel {
  id: number,
  name: string,
  description: string,
  event_owner: string,
  icon: string,
  banner: string,
  start_time: string,
  registration_start_time: string,
  registration_end_time: string,
  registration_is_open: boolean,
  has_started: boolean
}
