import {defer} from 'rxjs';
import {Data} from '@angular/router';

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

export interface RouteData extends Data  {
  icon?: string;
  show: boolean;
  name?: string;
}

