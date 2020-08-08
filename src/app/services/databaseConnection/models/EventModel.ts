export interface EventModel {
  id: number,
  name: string,
  description: string,
  event_owner: string,
  icon: string,
  banner: string,
  start_time: string | Date,
  end_time: string | Date,
  registration_start_time: string | Date,
  registration_end_time: string | Date,
  registration_is_open: boolean,
  locationID: string,
  has_started: boolean
}
