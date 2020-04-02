import { environment } from '../../../environments/environment';

export class DatabaseEndpoints {
  public static rootURL = `${environment.apiUrl}ippon/`;

  public static userDataEndpoint = `${DatabaseEndpoints.rootURL}user-data/`;
  public static userTournamentsEndpoint = `${DatabaseEndpoints.rootURL}events/my_tournaments/`;
}
